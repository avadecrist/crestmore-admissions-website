// /_data/episode-extras.ts
import { chloe, shaira, nick, lauren, nora, sebastian, ethan, lars, sophia, ashley } from './cast';
import { EpisodeExtras } from '../_types/episode';

export const episodeExtrasByDate: Record<string, EpisodeExtras> = {
  '2026-02-27': {
    cast: [chloe, shaira, lauren, nick],
    transcriptPath: '/episode1.md',
  },
  '2026-03-06': {
    cast: [chloe, shaira, nora, sebastian],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
  '2026-03-13': {
    cast: [chloe, shaira, ethan],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
  '2026-03-20': {
    cast: [chloe, shaira, lars],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
  '2026-03-27': {
    cast: [chloe, shaira, lauren, sophia],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
  '2026-04-03': {
    cast: [chloe, shaira, lauren, sophia, ashley],
    transcriptPath: '/content/transcripts/spotifyEpisodeIdHere.md',
  },
};
