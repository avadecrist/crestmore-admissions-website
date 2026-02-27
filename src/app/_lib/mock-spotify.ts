import type { SpotifyEpisodeData } from "@/app/_lib/spotify";

export const mockEpisodes: SpotifyEpisodeData[] = [
  {
    id: "test1",
    name: "Episode Title Goes Here: How to Get Into Your Dream School",
    description:
        "This is mock description text you can freely edit while designing. Add a longer paragraph here to test line wrapping, spacing, and truncation behavior. You can also test special characters — like apostrophes, em dashes, and quotes.",
    release_date: "2026-02-27",
    external_urls: { spotify: "https://open.spotify.com" },
    images: [
    {
      url: "/cover-art.JPEG",
      height: 640,
      width: 640,
    },]
  },
  {
    id: "test2",
    name: "Short Ep Title",
    description:
        "mock description text goes here. Testing a short paragraph.",
    release_date: "2026-03-06",
    external_urls: { spotify: "https://open.spotify.com" },
    images: [
    {
      url: "/cover-art.JPEG",
      height: 640,
      width: 640,
    },]
  },
];

