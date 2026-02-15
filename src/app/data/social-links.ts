import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IconType } from 'react-icons';
// Want to eventually incorporate data for Spotify, YouTube, TikTok, etc.

export type SocialIconKey = 'linkedin' | 'instagram' | 'tiktok' | 'youtube' | 'spotify';

export type SocialMediaData = {
  href: string;
  label: string;
  iconKey: SocialIconKey;
};

export const chloeIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.linkedin.com/in/chloeavant/',
    label: '@chloeavant',
    iconKey: 'linkedin',
  },
];

export const shairaIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.linkedin.com/in/shairayousuf/',
    label: '@shairayousuf',
    iconKey: 'linkedin',
  },
];

export const ashleyIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.instagram.com/ashleyjae.uhrig?igsh=NTc4MTIwNjQ2YQ==',
    label: '@ashleyjae.uhrig',
    iconKey: 'instagram',
  },
];

export const spotifyIconLinks: SocialMediaData[] = [
  {
    href: 'https://open.spotify.com/user/31dufnibz7g5hrfmtqmupr7yk4w4?si=c1480335f0704905',
    label: '@crestmoreadmissions',
    iconKey: 'spotify',
  },
];

export const youtubeIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.youtube.com/@crestmoreadmissions',
    label: '@crestmoreadmissions',
    iconKey: 'youtube',
  },
];

export const instaIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.instagram.com/crestmoreadmissions?igsh=NTc4MTIwNjQ2YQ==',
    label: '@crestmoreadmissions',
    iconKey: 'instagram',
  },
];

export const tiktokIconLinks: SocialMediaData[] = [
  {
    href: 'https://www.tiktok.com/@crestmoreadmissions?_r=1&_t=ZP-93QvC9D6mDu',
    label: '@crestmoreadmissions',
    iconKey: 'tiktok',
  },
];