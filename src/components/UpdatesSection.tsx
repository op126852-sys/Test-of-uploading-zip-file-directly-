"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/lib/motion";
import UpdateCard, { type Update } from "@/components/UpdateCard";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/assets";

const UPDATES: Update[] = [
  {
    category: "Episodes",
    date: "October 2024",
    title: "Final Season Trailer Now Streaming",
    image: "/images/update-planet.jpg",
    alt: "A lone astronaut stands on an alien world beneath a giant ringed planet",
  },
  {
    category: "Event",
    date: "September 2024",
    title: "Prague Premiere Tickets Now Live",
    image: "/images/update-launch.jpg",
    alt: "A rocket launches vertically through orange smoke into a blue sky",
  },
  {
    category: "Characters",
    date: "August 2024",
    title: "Meet the New Crew of the Vantis",
    image: "/images/update-mars.jpg",
    alt: "An astronaut walks across a dusty Mars-like landscape at sunset",
  },
];

export default function UpdatesSection() {
  return (
    <section
      id="updates"
      aria-label="Latest from the Mission"
      className="relative w-full overflow-hidden"
    >
      {/* Dark photographic plate — distant launch fire, astronaut silhouette */}
      <div className="absolute inset-0">
        <Image
          src={asset("/images/updates-bg.jpg")}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-[rgba(6,8,10,0.72)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,#06080A,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#06080A,transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 pb-24 pt-24 md:px-6 md:pb-28 md:pt-[110px] lg:px-7 xl:px-9">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-5">
          <div>
            <Reveal>
              <p className="uppercase text-white/45" style={{ fontSize: "8px", letterSpacing: "0.2em" }}>
                Updates
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="mt-4 font-normal text-white"
                style={{
                  fontSize: "clamp(30px, 4vw, 40px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.028em",
                }}
              >
                Latest from the
                <br className="hidden sm:block" /> Mission
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="pt-2">
            <a
              href="#updates"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center justify-between gap-2 border border-white/30 bg-transparent px-3 uppercase text-white/80 transition-all duration-200 ease-cinematic hover:border-white/70 hover:text-white"
              style={{
                width: "132px",
                height: "30px",
                fontSize: "8px",
                letterSpacing: "0.12em",
                borderRadius: "2px",
              }}
            >
              View All Updates
              <ArrowUpRight size={10} strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
          className="mt-12 grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-8"
        >
          {UPDATES.map((update) => (
            <UpdateCard key={update.title} update={update} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
