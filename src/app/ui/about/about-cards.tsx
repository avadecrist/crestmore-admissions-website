'use client';

import Image from 'next/image';
import IconLink from '../socials/icon';
import { IconType } from 'react-icons';

type AboutCardProps = {
  name: string;
  role?: string;
  imageSrc: string;
  imageAlt?: string;
  aboutTitle: string;
  paragraphs: string[];
  iconType: IconType;
};

export default function AboutCard({
  name,
  role = 'ROLE',
  imageSrc,
  imageAlt = `${name} portrait`,
  aboutTitle = "",
  paragraphs,
  iconType,
}: AboutCardProps) {
  return (
    <section className="mx-auto w-full max-w-5xl pb-20">
      <div className="overflow-hidden bg-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT: Navy panel */}
          <div className="relative bg-navy px-10 py-10">
            <div className="text-offwhite">
              <h3 className="tracking-wide text-center">{name.toUpperCase()}</h3>
              <p className="mt-2 text-[10px] font-medium tracking-[0.25em] opacity-80">
                {role.toUpperCase()}
              </p>
            </div>

            {/* Photo */}
            <div className="mb-5 relative w-full overflow-hidden rounded-sm bg-white/10">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Chloe LinkedIn badge */}
            <IconLink 
            href="/contact"
            icon={iconType}
            label="@chloeavant"
            variant="labeled"
            className="text-beige"
            />

            {/* Shaira LinkedIn badge */}
            <IconLink 
            href="/contact"
            icon={iconType}
            label="@shairayousuf"
            variant="labeled"
            className="text-beige"
            />

          </div>

          {/* RIGHT: About panel */}
          <div className="bg-offwhite px-10 py-10">
            <h3 className="text-offblack">{aboutTitle}</h3>

            <div className="mt-6 space-y-5 font-sans text-[15px] leading-7 text-offblack/90">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SPECIFIC RIGHT SIDE VARIANT