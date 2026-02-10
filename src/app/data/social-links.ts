import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';

export type AboutIconLink = {
  href: string;
  label: string;
  icon: IconType;
};

export const chloeIconLinks: AboutIconLink[] = [
  {
    href: 'https://www.linkedin.com/in/chloeavant/',
    label: '@chloeavant',
    icon: FaLinkedin,
  },
];

export const shairaIconLinks: AboutIconLink[] = [
  {
    href: 'https://www.linkedin.com/in/shairayousuf/',
    label: '@shairayousuf',
    icon: FaLinkedin,
  },
];

export const ashleyIconLinks: AboutIconLink[] = [
  {
    href: 'https://www.instagram.com/ashleyjae.uhrig?igsh=NTc4MTIwNjQ2YQ==',
    label: '@ashleyjae.uhrig',
    icon: FaInstagram,
  },
];