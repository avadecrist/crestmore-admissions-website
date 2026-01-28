// Social Media Icon Component
'use client';
import Link from 'next/link';
import { IconType } from 'react-icons';

type IconLinkVariant = 'icon' | 'labeled';

interface IconLinkProps {
  href: string;
  icon: IconType;
  label?: string;
  variant?: IconLinkVariant; //variants
  size?: number;
  className?: string;
}

export default function IconLink({
  href,
  icon: Icon,
  label,
  variant = 'icon',
  size = 24,
  className = '',
}: IconLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <Icon size={size} />
      {variant === 'labeled' && label && <span>{label}</span>}
    </Link>
  );
}

// example usage
//import { FaSpotify, ... } from 'react-icons/fa';
//import IconLink from '@/socials/IconLink';
{/* <IconLink href="/episodes" icon={FaSpotify} />

<IconLink
  href="/contact"
  icon={FaEnvelope}
  label="Contact"
  variant="labeled"
/> */}
