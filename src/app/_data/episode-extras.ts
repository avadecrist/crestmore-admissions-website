// /_data/episode-extras.ts
import { chloe, shaira, nick, lauren, nora, sebastian, ethan, lars, sophia, ashley } from './cast';
import { EpisodeExtras } from '../_types/episode';

export const episodeExtrasByDate: Record<string, EpisodeExtras> = {
  '2026-02-27': {
    cast: [chloe, shaira, lauren, nick],
    transcriptPath: 'episode1',
  },
  '2026-03-07': {
    cast: [chloe, shaira, nora, sebastian],
    transcriptPath: 'episode2', 
  },
  '2026-03-14': {
    cast: [chloe, shaira, ethan],
    transcriptPath: 'episode3', // store a slug
  },
  '2026-03-21': {
    cast: [chloe, shaira, lars],
    transcriptPath: 'episode4',
  },
  '2026-03-29': {
    cast: [chloe, shaira, lauren, sophia],
    transcriptPath: 'episode5',
  },
  '2026-04-03': {
    cast: [chloe, shaira, lauren, sophia, ashley],
    transcriptPath: 'episode6',
  },
};
