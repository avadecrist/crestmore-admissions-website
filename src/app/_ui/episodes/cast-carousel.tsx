'use client';

import { useEffect, useMemo, useState } from 'react';
import CastCard from '@/app/_ui/episodes/cast-card';
import type { CastMember } from '@/app/_types/episode';

type CastCarouselProps = {
  members: CastMember[];
  initialIndex?: number;
  loop?: boolean; // default true
  className?: string;
};

export default function CastCarousel({
  members,
  initialIndex = 0,
  loop = true,
  className = '',
}: CastCarouselProps) {
  const safeMembers = useMemo(() => members ?? [], [members]);
  const hasMany = safeMembers.length > 1;

  const clampIndex = (i: number) => {
    if (safeMembers.length === 0) return 0;
    return Math.min(Math.max(i, 0), safeMembers.length - 1);
  };

  const [index, setIndex] = useState(() => clampIndex(initialIndex));

  // Keep index valid if members change
  useEffect(() => {
    setIndex((prev) => clampIndex(prev));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeMembers.length]);

  const goPrev = () => {
    if (!hasMany) return;
    setIndex((prev) => {
      const next = prev - 1;
      if (loop) return (next + safeMembers.length) % safeMembers.length;
      return Math.max(0, next);
    });
  };

  const goNext = () => {
    if (!hasMany) return;
    setIndex((prev) => {
      const next = prev + 1;
      if (loop) return next % safeMembers.length;
      return Math.min(safeMembers.length - 1, next);
    });
  };

  // Keyboard support (left/right arrows)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!hasMany) return;
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [hasMany]); // intentionally not depending on goPrev/goNext to avoid rebind churn

  if (safeMembers.length === 0) return null;

  const current = safeMembers[index];

  const prevDisabled = !hasMany || (!loop && index === 0);
  const nextDisabled = !hasMany || (!loop && index === safeMembers.length - 1);

  return (
    <section className={`w-full ${className}`} aria-label='Cast carousel'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4'>
        {/* Left arrow */}
        <button
          type='button'
          onClick={goPrev}
          disabled={prevDisabled}
          aria-label='Previous cast member'
          className='grid h-12 w-12 place-items-center rounded-full transition hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 md:h-14 md:w-14'
        >
          {/* simple chevron */}
          <span className='text-navy text-5xl leading-none select-none'>‹</span>
        </button>

        {/* Card */}
        <div className='w-full'>
          <CastCard {...current} />
          {/* Dots */}
          {hasMany ? (
            <div className='mt-6 flex justify-center gap-2'>
              {safeMembers.map((m, i) => (
                <button
                  key={m.id}
                  type='button'
                  aria-label={`Go to ${m.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? 'bg-navy' : 'bg-navy/20 hover:bg-navy/40'
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* Right arrow */}
        <button
          type='button'
          onClick={goNext}
          disabled={nextDisabled}
          aria-label='Next cast member'
          className='grid h-12 w-12 place-items-center rounded-full transition hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 md:h-14 md:w-14'
        >
          <span className='text-navy text-5xl leading-none select-none'>›</span>
        </button>
      </div>
    </section>
  );
}