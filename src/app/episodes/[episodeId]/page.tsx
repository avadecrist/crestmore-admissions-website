// Isolated Episode Page
/* responsibilities: 
  fetch spotify episode data
  compute episode number
  get extras by date (cast + transcript path)
  pass cast → MeetCast
  pass spotify/youtube links → LinksSection (if needed)
  pass transcript + prev/next ids → PrevNextNav
*/

import { Metadata } from "next";
import { mockEpisodes } from "@/app/_lib/mock-spotify"; // for testing
import { getEpisodeById, getEpisodes } from "@/app/_lib/spotify";
import { truncate } from "@/app/_lib/text";
import { toISODateKey } from "@/app/_lib/dates";
import { episodeExtrasByDate } from "@/app/_data/episode-extras";
import { showId } from "@/app/_lib/constants";
import EpisodeHero from "@/app/_ui/episodes/episode-hero";
import MeetCast from "@/app/_ui/episodes/meet-cast";
import PrevNextNav from "@/app/_ui/episodes/prev-next-nav";
import LinksSection from "@/app/_ui/episodes/links-section";
import Image from "next/image";

// note: recommended for Spotify Data
export const revalidate = 3600;


//FOR TESTING
const DESIGN_EPISODE_ID = "6nJNLUs9ttTUdD2ljAsTjT";
const USE_MOCK = process.env.USE_SPOTIFY_MOCK === "true"; // change to false to verify with real spotify data

async function getEpisodeData(id: string) {
  if (USE_MOCK) return mockEpisodes[0]; // test data

  // allow /episodes/test to render without copying ids
  const resolvedId = id === "test" ? DESIGN_EPISODE_ID : id;
  return getEpisodeById({ episodeId: resolvedId });
}

// runs on the server to create metadata before rendering the page
export async function generateMetadata(
  { params }: { params: Promise<{ episodeId: string }> }
): Promise<Metadata> {
  const { episodeId } = await params;
  const episode = await getEpisodeData(episodeId);

  const title = episode.name;
  const description = truncate(episode.description || "Listen to the latest episode on our site.");
  const ogImage = episode.images?.[0]?.url;

  return {
    title,
    description,
    alternates: {
      canonical: `/episodes/${episode.id}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/episodes/${episode.id}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ episodeId: string }>;
}) {
  const { episodeId } = await params;
  const episode = await getEpisodeData(episodeId);

  // Normalize date to access episode extras data
  const releaseKey = toISODateKey(episode.release_date);
  const extras = episodeExtrasByDate[releaseKey];

  // SET UP PROPS FOR COMPONENTS
  // Handle missing extras (helpful for UI testing without transcripts)
  const cast = extras?.cast ?? [];
  const transcriptPath = extras?.transcriptPath ?? null;

  const list = USE_MOCK ? mockEpisodes : (await getEpisodes({ showId })).items;

  const sorted = [...list].sort(
    (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  );

  // Get episode number
  const idx = sorted.findIndex((e) => e.id === episode.id);
  const episodeNumber = idx >= 0 ? sorted.length - idx : undefined;

  // helper to pass episode # to PrevNextNav
  const numberFromIndex = (i: number) => sorted.length - i;

  // Prev and Next epsiode object
  const prevEpisode = idx >= 0 && idx + 1 < sorted.length ? sorted[idx + 1] : null;
  const nextEpisode = idx > 0 ? sorted[idx - 1] : null;

  // Convert prev and next epsiode object into EpisodeNavItem for PrevNextNav component
  const prev = prevEpisode ? { id: prevEpisode.id, label: prevEpisode.name, number: numberFromIndex(idx + 1) } : undefined;
  const next = nextEpisode ? { id: nextEpisode.id, label: nextEpisode.name, number: numberFromIndex(idx - 1) } : undefined;

  // EpisodeHero Props
  const spotifyHref = episode.external_urls.spotify;
  const spotifyEmbedSrc = `https://open.spotify.com/embed/episode/${episode.id}`;

    return (
  <>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <EpisodeHero 
        episodeNumber={episodeNumber}
        title={episode.name}
        releaseDateISO={episode.release_date}
        description={episode.description}
        spotifyHref={spotifyHref}
        spotifyEmbedSrc={spotifyEmbedSrc}
        />
      </section>

      <section className="py-10 md:py-20 mx-auto max-w-sm md:max-w-7xl px-6 lg:px-8 flex flex-col">
        <MeetCast castMembers={cast} />

        <LinksSection />

        <PrevNextNav
        transcriptPath={transcriptPath}
        prev={prev}
        next={next}
        />
      </section>
  </>
    );
}