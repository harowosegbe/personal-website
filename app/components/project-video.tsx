"use client";

import { useEffect, useRef } from "react";

export function ProjectVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!video || reducedMotion.matches) return;

    video.play().catch(() => {
      // Controls remain available when autoplay is blocked.
    });
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      aria-label={`${title} project video`}
      className="h-full w-full object-contain"
      controls
      loop
      muted
      playsInline
      preload="metadata"
    >
      Your browser does not support embedded video.
    </video>
  );
}
