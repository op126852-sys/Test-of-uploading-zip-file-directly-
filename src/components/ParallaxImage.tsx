"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Parallax range in px (image travel over the full section scroll). */
  range?: number;
}

/**
 * Full-bleed background image with a very subtle vertical parallax.
 * Displacement is capped at a few tens of pixels per the motion brief.
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  range = 40,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-range / 2, range / 2]);

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute -inset-x-0 -top-[12%] h-[124%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
}
