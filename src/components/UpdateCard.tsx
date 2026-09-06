"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { asset } from "@/lib/assets";

export interface Update {
  category: string;
  date: string;
  title: string;
  image: string;
  alt: string;
}

export default function UpdateCard({ update }: { update: Update }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      className="group"
    >
      <a href="#updates" onClick={(e) => e.preventDefault()} className="block">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
          <Image
            src={asset(update.image)}
            alt={update.alt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1023px) 46vw, 32vw"
            className="object-cover transition-[transform,filter] duration-700 ease-cinematic group-hover:scale-[1.025] group-hover:brightness-110"
          />
        </div>
        <div className="flex items-center gap-3 pt-4 text-white/50" style={{ fontSize: "7.5px", letterSpacing: "0.14em" }}>
          <span className="uppercase">{update.category}</span>
          <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-white/35" />
          <span className="uppercase">{update.date}</span>
        </div>
        <h3
          className="pt-2 font-normal text-white/75 transition-opacity duration-300 ease-cinematic group-hover:text-white"
          style={{ fontSize: "15px", lineHeight: 1.3, letterSpacing: "-0.01em" }}
        >
          {update.title}
        </h3>
      </a>
    </motion.article>
  );
}
