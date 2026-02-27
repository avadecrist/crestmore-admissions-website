// /_ui/socials/icon.tsx
import Link from 'next/link';
import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import type { SocialIconKey } from '@/app/_data/social-links';

const ICONS: Record<SocialIconKey, React.ComponentType<{ size?: number; className?: string }>> = {
  spotify: FaSpotify,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  email: IoIosMail,
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
      aria-label={`Link to ${iconKey}`}
    >
      <Icon size={size} />
      {variant === 'labeled' && label && <span>{label}</span>}
    </Link>
  );
}
