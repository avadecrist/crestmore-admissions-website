import type { Metadata } from "next";
import { getEpisodes } from './_lib/spotify';
import { mockEpisodes } from "./_lib/mock-spotify";
import HomeClient from "./_ui/home/home-client";
import { showId } from "./_lib/constants";

export const metadata: Metadata = {
  title: "Crestmore Admissions Podcast",
  description: "Officiate website for the Crestmore Admissions Podcast.",
};

export default async function Home() {

  const USE_MOCK = process.env.USE_SPOTIFY_MOCK === "true"; //for testing

  // to fetch episodes
  const episodes = USE_MOCK ? mockEpisodes : (await getEpisodes({ showId })).items;

  return <HomeClient episodes={episodes} />;
}

