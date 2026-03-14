// /_data/episode-extras.ts
import { chloe, shaira, nick, lauren, nora, sebastian, ethan, lars, sophia, ashley } from './cast';
import { EpisodeExtras } from '../_types/episode';

export const episodeExtrasByDate: Record<string, EpisodeExtras> = {
  '2026-02-27': {
    cast: [chloe, shaira, lauren, nick],
    transcriptPath: '/episode1.md',
  },
  '2026-03-07': {
    cast: [chloe, shaira, nora, sebastian],
    transcriptPath: '/episode2.md', // /content/transcripts/episode2.md
  },
  '2026-03-14': {
    cast: [chloe, shaira, ethan],
    // transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
  '2026-03-21': {
    cast: [chloe, shaira, lars],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
  '2026-03-28': {
    cast: [chloe, shaira, lauren, sophia],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
  '2026-04-04': {
    cast: [chloe, shaira, lauren, sophia, ashley],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
};
