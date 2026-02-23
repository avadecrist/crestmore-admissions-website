// will contain Episodes List to import in homepage
/*
    - calls getEpisodes() (server-side)
    - maps to EpisodeCard
    - includes your header + TimerSection
    - lives only on the homepage
    - have episodes prop that holds that fetched getEpisodes
*/

import { SpotifyEpisodeData } from "@/app/_lib/spotify";
import { truncate } from "@/app/_lib/text";
import Link from "next/link";
import Image from "next/image";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EpisodesSection({
  episodes,
}: {
  episodes: SpotifyEpisodeData[];
}){
    return(
        <div className="mt-12 space-y-14">
        {episodes.map((ep, idx) => {
            const imageUrl = ep.images?.[0]?.url ?? null;
            const episodeNumber = episodes.length - idx;

            return (
            <div key={ep.id} className="text-center">
                <h3 className="font-serif text-2xl tracking-wide text-navy">
                EPISODE {episodeNumber}
                </h3>

                <div className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-6 sm:flex-row sm:items-start">

                {/* link to /episodes/[episodeId]/page.tsx */}
                <Link
                    href={`/episodes/${ep.id}`}
                    className="group relative block h-20 w-20 overflow-hidden rounded-sm bg-black/5"
                >
                    {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={`${ep.name} cover`}
                        fill
                        sizes="80px"
                        className="object-cover"
                    />
                    )}

                    {/* Play overlay */}
                    <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/60 bg-white/70 transition group-hover:bg-white">
                        <svg width="14" height="14" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" fill="currentColor" />
                        </svg>
                    </span>
                    </span>
                </Link>

                {/* Title */}
                <div className="text-left">
                    <Link
                    href={`/episodes/${ep.id}`}
                    className="text-sm text-black/80 hover:underline"
                    >
                    {ep.name}
                    </Link>

                    <p className="mt-1 text-sm text-blue-700">
                    {formatDate(ep.release_date)}
                    </p>
                </div>
                </div>

                <p className="mx-auto mt-6 max-w-xl text-xs text-black/70">
                {truncate(ep.description, 180)}
                </p>

                <div className="mx-auto mt-10 h-px w-full max-w-3xl bg-black/40" />
            </div>
            );
        })}
        </div>
    );
}