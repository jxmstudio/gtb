'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Project card video — vertical (9:16) walkthrough reel shown inside the
 * landscape media slot of a ProjectsShowcase card.
 *
 * The source reels are portrait; cropping them to the card's 16:10 slot would
 * cut the presenter/subject out of frame. Instead the reel renders contained
 * and centred, over a blurred still of the project as backdrop.
 *
 * Autoplays muted (loops, plays inline); an IntersectionObserver pauses it
 * off-screen so two reels on one page don't burn bandwidth. The reels carry
 * voiceover, so a mute toggle is overlaid — it stops propagation because the
 * whole card is wrapped in a Link.
 */

type ProjectCardVideoProps = {
  src: string;
  poster: string;
  /** Still image blurred behind the contained vertical video. */
  backdrop: string;
  label: string;
};

export function ProjectCardVideo({ src, poster, backdrop, label }: ProjectCardVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md brightness-[0.45]"
        style={{ backgroundImage: `url('${backdrop}')` }}
        aria-hidden="true"
      />
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="relative z-10 h-full mx-auto aspect-[9/16] object-cover"
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMuted((m) => !m);
        }}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute z-20 bottom-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
      >
        {muted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
      </button>
    </div>
  );
}
