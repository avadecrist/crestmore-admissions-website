/* PROPS:
 * transcriptPath (from EpisodeExtras)
 * prev?: EpisodeNavItem (which has id: string; label: string)
 * next?: EpisodeNavItem (which has id: string; label: string)
 */

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
    <div className="w-full">
      {/* Transcript line (top centered) */}
      <div className="text-center">
        {transcriptPath ? (
          <p className="text-sm tracking-wide text-offblack/80">
            VIEW TRANSCRIPT{" "}
            <Link
              href={transcriptPath}
              className="text-navy underline underline-offset-4 hover:opacity-80"
            >
              HERE
            </Link>
          </p>
        ) : (
          <p className="text-sm tracking-wide text-offblack/50">
            TRANSCRIPT COMING SOON
          </p>
        )}
      </div>

      {/* Prev / Next row */}
      <div className="mt-14 flex items-start justify-between gap-10">
        {/* PREVIOUS */}
        <div className="min-w-0">
          <p className="text-xs tracking-widest text-offblack/70">PREVIOUS</p>

          {prev ? (
            <Link
              href={`/episodes/${prev.id}`}
              className={[
                "group mt-4 inline-block",
                "transition-transform duration-200 hover:-translate-y-1",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/60",
              ].join(" ")}
            >
              <span className="text-lg font-serif text-navy group-hover:underline underline-offset-4">
                EPISODE {prev.number} | {prev.label}
              </span>
            </Link>
          ) : (
            <span className="mt-4 block text-lg text-offblack/30">—</span>
          )}
        </div>

        {/* NEXT */}
        <div className="min-w-0 text-right">
          <p className="text-xs tracking-widest text-offblack/70">NEXT</p>

          {next ? (
            <Link
              href={`/episodes/${next.id}`}
              className={[
                "group mt-4 inline-block",
                "transition-transform duration-200 hover:-translate-y-1",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/60",
              ].join(" ")}
            >
              <span className="text-lg text-navy group-hover:underline underline-offset-4">
                EPISODE {next.number} | {next.label}
              </span>
            </Link>
          ) : (
            <span className="mt-4 block text-lg text-offblack/30">—</span>
          )}
        </div>
      </div>
    </div>
  );
}