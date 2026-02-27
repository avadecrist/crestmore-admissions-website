import { formatDate } from "@/app/_lib/text";
import Link from "next/link";

type EpisodeHeroProps = {
    episodeNumber?: number;
    title: string;
    releaseDateISO: string
    description: string;
    spotifyHref: string;
    spotifyEmbedSrc: string;
}
export default function EpisodeHero({
    episodeNumber,
    title,
    releaseDateISO,
    description,
    spotifyHref,
    spotifyEmbedSrc,
}: EpisodeHeroProps) {
    return(
        <>  
        
    
    <header className="w-full">
      {/* Top line: Episode # | Title */}
      <div className="flex flex-col items-center text-navy">
        <h1 className="font-semibold leading-tight text-end md:text-4xl">
          <span className="tracking-wide">
            {episodeNumber ? `EPISODE ${episodeNumber}` : "EPISODE"}
          </span>
          <span className="mx-2">|</span>
          <span className="font-normal">{title}</span>
        </h1>

        {/* Release date */}
        <h2 className="text-xl text-end text-navy/70 pt-[-5]">
          {formatDate(releaseDateISO)}
        </h2>
      </div>

        {/* Description */}
      <div className="mt-10 text-center">
        <h3 className="tracking-wide text-offblack/95">
          In this episode…
        </h3>

        <p className="mt-4 leading-relaxed text-offblack">
          {description}
        </p>
      </div>

      {/* Spotify embed */}
      <div className="mt-10">
        <div className="overflow-hidden rounded-xl border border-offblack/20 bg-offwhite">
          <iframe
            src={spotifyEmbedSrc}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block"
            title={`Spotify player for ${title}`}
          />
        </div>

        {/* Spotify button */}
        <Link
          href={spotifyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-offwhite transition-all hover:opacity-90 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/60"
        >
          Listen on Spotify
        </Link>
      </div>
    </header>
        </>
    );
}