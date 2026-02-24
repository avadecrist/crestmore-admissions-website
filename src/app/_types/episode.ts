// /_types/episode.ts
import { SocialMediaData } from "../_data/social-links";

// Individual Cast Member Data
export type CastMember = {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt?: string;
  role: string;

  hometown?: string;
  major: string;

  paragraphs?: string[]; 
  iconLinks?: SocialMediaData[];
};

export type EpisodeExtras = {
  cast?: CastMember[];
  transcriptPath?: string; 
};

export type EpisodeNavItem = {
  id: string;
  label: string;
};