// // Social Media Icon Component
// 'use client';
// import Link from 'next/link';
// import { IconType } from 'react-icons';

// type IconLinkVariant = 'icon' | 'labeled';

// interface IconLinkProps {
//   href: string;
//   icon: IconType;
//   label?: string;
//   variant?: IconLinkVariant; //variants
//   size?: number;
//   bgColor?: string;
//   textColor?: string;
//   className?: string;
// }

// export default function IconLink({
//   href,
//   icon: Icon,
//   label,
//   variant = 'icon',
//   size = 24,
//   className = '',
//   bgColor = '',
// }: IconLinkProps) {
//   return (
//     <Link
//       href={href}
//       className={`
//         inline-flex items-center justify-center
//         rounded-lg
//         p-1
//         transition-all duration-200
//         bg-${bgColor}
//         hover:scale-105 hover:bg-${bgColor}/90 
//         ${className}`}
//     >
//       <Icon size={size} />
//       {variant === 'labeled' && label && <span>{label}</span>}
//     </Link>
//   );
// }

// // example usage
// //import { FaSpotify, ... } from 'react-icons/fa';
// //import IconLink from '@/socials/IconLink';
// {/* <IconLink href="/episodes" icon={FaSpotify} />

// <IconLink
//   href="/contact"
//   icon={FaEnvelope}
//   label="Contact"
//   variant="labeled"
// /> */}
'use client';

import Link from 'next/link';
import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import type { SocialIconKey } from '@/app/data/social-links';

const ICONS: Record<SocialIconKey, React.ComponentType<{ size?: number; className?: string }>> = {
  spotify: FaSpotify,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

type IconLinkVariant = 'icon' | 'labeled';

interface IconLinkProps {
  href: string;
  iconKey: SocialIconKey;
  label?: string;
  variant?: IconLinkVariant;
  size?: number;
  className?: string;
}

export default function IconLink({
  href,
  iconKey,
  label,
  variant = 'icon',
  size = 24,
  className = '',
}: IconLinkProps) {
  const Icon = ICONS[iconKey];
  
  // Guard so it never crashes silently
  if (!Icon) {
    return (
      <Link href={href} className={className} target="_blank" rel="noreferrer">
        <span className="text-red-600 text-sm">Missing icon: {iconKey}</span>
        {variant === 'labeled' && label && <span className="ml-2">{label}</span>}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg p-1 transition-all duration-200 hover:scale-105 ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={size} />
      {variant === 'labeled' && label && <span>{label}</span>}
    </Link>
  );
}
