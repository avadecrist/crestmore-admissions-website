/* PROPS:
 * transcriptPath (from EpisodeExtras)
 * prev?: EpisodeNavItem (which has id: string; label: string)
 * next?: EpisodeNavItem (which has id: string; label: string)
 */
// change styling later, at least props are set up
import Link from "next/link";
import type { EpisodeNavItem } from "@/app/_types/episode";

type PrevNextNavProps = {
  transcriptPath?: string | null;
  prev?: EpisodeNavItem;
  next?: EpisodeNavItem;
};

export default function PrevNextNav({ 
    transcriptPath, 
    prev, 
    next, 
}: PrevNextNavProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        {/* Prev */}
        <div>
          {prev ? (
            <Link href={`/episodes/${prev.id}`} className="text-navy hover:underline">
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}
        </div>

        {/* Transcript */}
        <div>
          {transcriptPath ? (
            <Link href={transcriptPath} className="text-offblack hover:underline">
              VIEW TRANSCRIPT
            </Link>
          ) : (
            <span className="text-offblack/50">TRANSCRIPT COMING SOON</span>
          )}
        </div>

        {/* Next */}
        <div className="text-right">
          {next ? (
            <Link href={`/episodes/${next.id}`} className="text-navy hover:underline">
              {next.label} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </section>
  );
}