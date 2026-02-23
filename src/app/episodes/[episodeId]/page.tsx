// Isolated Episode Page
import CastCard from "../../_ui/episodes/cast-card";
import {
  nickIconLinks,
} from '@/app/_data/social-links';
import { Metadata } from "next";
import { mockEpisodes } from "@/app/_lib/mock-spotify"; // for testing
import { getEpisodeById } from "@/app/_lib/spotify";
import { truncate } from "@/app/_lib/text";
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

  

    return (
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-serif text-navy">
          {episode.name}
        </h1>

        {episode.images?.[0]?.url && (
          <div className="relative mt-6 h-60 w-60">
            <Image
              src={episode.images[0].url}
              alt={episode.name}
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
        )}

        <p className="mt-6 text-black/80">
          {episode.description}
        </p>

        {/* Spotify Button */}
        <a
          href={episode.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          Listen on Spotify
        </a>
      </section>
    );
}