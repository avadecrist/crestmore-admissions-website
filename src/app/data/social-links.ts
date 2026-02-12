import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IconType } from 'react-icons';

export type SocialMediaData = {
  href: string;
  label: string;
  icon: IconType;
};

export const chloeIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.linkedin.com/in/chloeavant/',
    label: '@chloeavant',
    icon: FaLinkedin,
  },
];

export const shairaIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.linkedin.com/in/shairayousuf/',
    label: '@shairayousuf',
    icon: FaLinkedin,
  },
];

export const ashleyIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.instagram.com/ashleyjae.uhrig?igsh=NTc4MTIwNjQ2YQ==',
    label: '@ashleyjae.uhrig',
    icon: FaInstagram,
  },
];