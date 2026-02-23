type SpotifyTokenResponse = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
};

type SpotifyImage = { url: string; height: number | null; width: number | null };

export type SpotifyEpisodeData = {
  id: string;
  name: string;
  description: string;
  release_date: string;
  external_urls: { spotify: string };
  images?: SpotifyImage[]
};

export type SpotifyEpisodesResponse = {
  items: SpotifyEpisodeData[];
  total: number;
  limit: number;
  offset: number;
};

function stripHtml(input: string) {
  // Spotify descriptions are usually plain, but this keeps you safe.
  return input.replace(/<[^>]*>/g, "").trim();
}

function normalizeEpisode(ep: SpotifyEpisodeData): SpotifyEpisodeData {
  return {
    id: ep.id,
    name: ep.name,
    description: stripHtml(ep.description),
    release_date: ep.release_date,
    external_urls: ep.external_urls,
    images: ep.images,
  };
}

export type SpotifyPaging<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export async function getSpotifyAccessToken(): Promise<SpotifyTokenResponse> {
  const clientId = requireEnv("SPOTIFY_CLIENT_ID");
  const clientSecret = requireEnv("SPOTIFY_CLIENT_SECRET");

  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Spotify token error (${response.status}): ${text}`);
  }

  return response.json();
}

// Small helper so your fetch calls are consistent
async function spotifyFetch<T>(url: string): Promise<T> {
  const { access_token } = await getSpotifyAccessToken();

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Spotify API error (${response.status}): ${text}`);
  }

  return response.json();
}

/**
 * Get episodes for a given SHOW (podcast series)
 * Spotify endpoint: GET /v1/shows/{id}/episodes
 * Normalizes and sorts in order newest -> oldest
 */
export async function getEpisodes({
  showId,
  market = 'US',
  limit = 50,
  offset = 0,
}: {
  showId: string;
  market?: string;
  limit?: number;
  offset?: number;
}): Promise<SpotifyEpisodesResponse> {
  if (!showId) throw new Error('getEpisodes: showId is required');

  const url = new URL(`https://api.spotify.com/v1/shows/${showId}/episodes`);
  url.searchParams.set('market', market);
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('offset', String(offset));

  console.log("Fetching episodes from Spotify...");
  const data = await spotifyFetch<SpotifyPaging<SpotifyEpisodeData>>(
    url.toString()
  );

  const sortedItems = [...data.items].sort((a, b) => {
    return (
      new Date(b.release_date).getTime() -
      new Date(a.release_date).getTime()
    );
  });

  const normalizedItems = sortedItems.map(normalizeEpisode);

  return {
    ...data,
    items: normalizedItems,
  };
}

/**
 * Get a single EPISODE by episodeId
 * Spotify endpoint: GET /v1/episodes/{id}
 */
export async function getEpisodeById(options: {
  episodeId: string;
  market?: string;
}): Promise<SpotifyEpisodeData> {
  const { episodeId, market = "US" } = options;

  if (!episodeId) throw new Error("getEpisodeById: episodeId is required");

  const url = new URL(`https://api.spotify.com/v1/episodes/${episodeId}`);
  url.searchParams.set("market", market);

  const ep = await spotifyFetch<SpotifyEpisodeData>(url.toString());
  return normalizeEpisode(ep);
}
