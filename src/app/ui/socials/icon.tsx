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
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export default function IconLink({
  href,
  icon: Icon,
  label,
  variant = 'icon',
  size = 24,
  className = '',
  bgColor = '',
}: IconLinkProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        p-1
        transition-all duration-200
        bg-${bgColor}
        hover:scale-105 hover:bg-${bgColor}/90 
        ${className}`}
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
