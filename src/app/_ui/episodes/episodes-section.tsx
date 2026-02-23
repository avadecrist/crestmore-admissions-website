// will contain Episodes List to import in homepage

import { SpotifyEpisodeData } from '@/app/_lib/spotify';
import { truncate } from '@/app/_lib/text';
import Link from 'next/link';
import Image from 'next/image';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function EpisodesSection({
  episodes,
}: {
  episodes: SpotifyEpisodeData[];
}) {
  return (
    <div className='mt-12 space-y-16'>
    {episodes.map((ep, idx) => {
        const imageUrl = ep.images?.[0]?.url ?? null;
        const episodeNumber = episodes.length - idx;

        return (
        <div key={ep.id} className='text-center'>
            <Link
            href={`/episodes/${ep.id}`}
            aria-label={`Open episode ${episodeNumber}: ${ep.name}`}
            className={[
                'group block w-full max-w-sm md:max-w-xl',
                'transition-transform duration-200 hover:-translate-y-1',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/60',
            ].join(' ')}
            >
            {/* Episode number */}
            <h2 className='text-navy tracking-wide'>
                EPISODE {episodeNumber}
            </h2>

            {/* Cover + title/date row */}
            <div className='mt-6 flex items-start gap-6'>
                {/* Cover (fixed size like mock) */}
                <div className='relative h-24 w-24 shrink-0 overflow-hidden rounded-sm bg-offblack/5'>
                {imageUrl && (
                    <Image
                    src={imageUrl}
                    alt={`${ep.name} cover`}
                    fill
                    sizes='96px'
                    className='object-cover'
                    />
                )}

                {/* Play overlay */}
                <span className='absolute inset-0 flex items-center justify-center'>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full border border-offblack/60 bg-offwhite/60 transition group-hover:bg-offwhite/80'>
                    <svg width='14' height='14' viewBox='0 0 24 24'>
                        <path d='M8 5v14l11-7z' fill='currentColor' />
                    </svg>
                    </span>
                </span>
                </div>

                {/* Title + date */}
                <div className='text-left'>
                <h3 className='text-2xl md:text-3xl leading-snug text-offblack transition group-hover:underline'>
                    {ep.name}
                </h3>
                <p className='mt-1 text-base text-navy/80'>
                    {formatDate(ep.release_date)}
                </p>
                </div>
            </div>
            </Link>

            {/* Description (centered like mock) */}
            <p className='mx-auto mt-8 max-w-sm md:max-w-xl text-offblack/70'>
            {truncate(ep.description, 140)}
            </p>

            {/* Short divider (not full width) */}
            <div className='mx-auto mt-10 h-px w-64 bg-offblack/40' />
        </div>
        );
    })}
    </div>
  );
}
