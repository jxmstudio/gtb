"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoFacadeProps {
  videoId: string;
  title: string;
  /** aspect ratio as a percentage string, e.g. "177.78%" for 9:16 */
  aspectPadding?: string;
}

export default function VideoFacade({
  videoId,
  title,
  aspectPadding = "177.78%",
}: VideoFacadeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 cursor-pointer"
      style={{ paddingTop: aspectPadding }}
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        /* ── Actual YouTube iframe, only loads after click ── */
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        /* ── Facade: thumbnail + TOFA-branded play button ── */
        <>
          {/* Thumbnail */}
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            fill
            className="object-cover"
            sizes="340px"
            priority
          />

          {/* Dark scrim */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="group flex items-center justify-center w-16 h-16 rounded-full bg-gtb-aero shadow-xl ring-4 ring-white/20 transition-transform duration-200 group-hover:scale-110 hover:scale-110">
              <svg
                className="w-7 h-7 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* "Click to play" hint */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-white/70 text-xs tracking-wide">
              Tap to play
            </span>
          </div>
        </>
      )}
    </div>
  );
}
