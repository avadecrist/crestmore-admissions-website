import type { Metadata } from "next";
import { getEpisodes } from './_lib/spotify';
import { mockEpisodes } from "./_lib/mock-spotify";
import type { SpotifyEpisodesResponse } from './_lib/spotify';
import HomeClient from "./_ui/home/home-client";

export const metadata: Metadata = {
  title: "Crestmore Admissions Podcast",
  description: "Officiate website for the Crestmore Admissions Podcast.",
};

export default async function Home() {

  const USE_MOCK = process.env.USE_SPOTIFY_MOCK === "true"; //for testing

  // For fetching released episodes for Episodes Section
  const showId = "3IM0lmZxpFAY7CwMuv9H4g"; //replace with actual show_id
  
  // const episodes: SpotifyEpisodesResponse = await getEpisodes({ showId });
  const episodes = USE_MOCK
  ? mockEpisodes
  : (await getEpisodes({ showId })).items;

  // return <HomeClient episodes={episodes.items} />;
  return <HomeClient episodes={episodes} />;
}

