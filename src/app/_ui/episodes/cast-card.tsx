// /app/_ui/episodes/cast-card.tsx
'use client';

import Image from 'next/image';
import type { CastMember } from '@/app/_types/episode';
import IconLink from '@/app/_ui/socials/icon';

type CastCardProps = CastMember;

export default function CastCard({
  name,
  role,
  hometown,
  major,
  imageSrc,
  imageAlt = `${name} portrait`,
  paragraphs = [],
  iconLinks = [],
}: CastCardProps) {
    const defaultParagraphs = 
    [`${name} is originally from ${hometown} and pursuing a degree in ${major}.`,
    `Thank you, ${name}, for helping bring Crestmore Admissions to life!`,
    ];

    const finalParagraphs = paragraphs?.length ? paragraphs : defaultParagraphs;

  return (
    <div className='w-full rounded-3xl bg-offwhite px-8 md:px-16 py-10 md:py-14 shadow-[0_20px_40px_rgba(0,0,0,0.12)]'>

      <div className='flex flex-col items-center gap-6 md:gap-12 md:flex-row md:items-stretch'>

        {/* Image */}
        <div className='relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-2xl bg-black/10 md:h-[340px] md:w-[260px]'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes='(max-width: 768px) 220px, 260px'
            className='object-cover'
          />
        </div>

        {/* Text Section */}
        <div className='flex w-full flex-1 flex-col'>

          {/* NAME as CHARACTER */}
          <h2 className='text-3xl text-navy tracking-wide'>
            {name}
            {role && (
              <span className='ml-4 font-normal text-navy/70'>
                as {role}
              </span>
            )}
          </h2>

          {/* Description */}
          <div className='mt-6 space-y-3'>
            {finalParagraphs.map((p, idx) => (
              <p
                key={idx}
                className='text-base md:text-lg leading-relaxed text-offblack'
              >
                {p}
              </p>
            ))}
          </div>

          {/* Socials Bottom Right */}
          {iconLinks.length > 0 && (
            <div className='mt-auto flex w-full items-center justify-end gap-4 pt-8'>
              <p className='text-offblack text-base'>Socials:</p>
              <div className='flex items-center gap-4 text-navy'>
                {iconLinks.map((link) => (
                  <IconLink
                    key={`${link.iconKey}-${link.href}`}
                    href={link.href}
                    iconKey={link.iconKey}
                    label={link.label}
                    variant='icon'
                    size={22}
                    className='text-navy'
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}