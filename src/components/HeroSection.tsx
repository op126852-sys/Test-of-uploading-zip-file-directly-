"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { EASE } from "@/lib/motion";
import { scrollToId } from "@/lib/nav";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="EXOSIA — Explore the mysteries of space"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden md:h-screen md:min-h-[650px]"
    >
      {/* Background photograph — helmet right, launch fire left */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-astronaut.jpg"
          alt="A close-up of an astronaut in a reflective white helmet standing beside a fiery rocket launch"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-[55%_center]"
        />
      </div>

      {/* Readability gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,6,8,0.62),rgba(4,6,8,0.18)_55%,rgba(4,6,8,0.42))] md:bg-[linear-gradient(to_right,rgba(4,6,8,0.38),rgba(4,6,8,0.02)_55%,rgba(4,6,8,0.20))]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(to_bottom,rgba(4,6,8,0.5),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(4,6,8,0.72),rgba(4,6,8,0.05)_65%,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-4 md:px-6 lg:px-7 xl:px-9"
      >
        {/* Upper-left title block */}
        <div className="pt-[104px] md:pt-[96px] lg:pt-[104px]">
          <h1 className="w-[82%] text-[clamp(42px,13vw,58px)] font-normal leading-[0.98] tracking-[-0.035em] text-white md:w-[34%] md:text-[clamp(48px,4.2vw,62px)]">
            <motion.span variants={line} className="block">
              Explore the
            </motion.span>
            <motion.span variants={line} className="block">
              mysteries
            </motion.span>
            <motion.span variants={line} className="block">
              of space.
            </motion.span>
          </h1>
          <motion.p
            variants={line}
            className="mt-5 max-w-[240px] text-[11px] leading-[1.5] text-white/70 md:mt-6 md:max-w-[260px] md:text-[12px]"
          >
            Experience the captivating beauty and mysteries of the cosmos on our
            journey.
          </motion.p>
        </div>

        {/* Lower row */}
        <div className="mt-auto flex items-end justify-between pb-[96px] md:pb-[64px]">
          {/* Bottom-left secondary block */}
          <motion.div variants={line} className="max-w-[250px] md:max-w-none">
            <h2 className="text-[15px] font-medium leading-tight text-white md:text-[16px]">
              Broaden Your Perspective
            </h2>
            <p className="mt-3 max-w-[230px] text-[7.5px] uppercase leading-[1.65] tracking-[0.05em] text-white/70 md:text-[8.5px]">
              Become part of the history of space exploration, journey through
              star systems, and discover new worlds. Our team is here to help
              you fulfill your dream of cosmic adventures.
            </p>
            <a
              href="#mission"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("mission");
              }}
              className="mt-3 inline-block border-b border-white/0 pb-[2px] text-[8px] uppercase tracking-[0.14em] text-white/85 transition-colors duration-200 ease-cinematic hover:border-white/70 hover:text-white"
            >
              Read More
            </a>
          </motion.div>

          {/* Bottom-right Discover control */}
          <motion.button
            variants={line}
            type="button"
            onClick={() => scrollToId("mission")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Discover — scroll to our mission"
            className="group grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full border border-white/45 bg-transparent text-white transition-colors duration-200 ease-cinematic hover:border-white/90 md:h-[104px] md:w-[104px]"
          >
            <span className="flex flex-col items-center gap-1.5 uppercase">
              <span className="text-[8px] tracking-[0.18em] md:text-[9px]">
                Discover
              </span>
              <ArrowDown
                size={12}
                strokeWidth={1.25}
                className="transition-transform duration-200 ease-cinematic group-hover:translate-y-[3px]"
              />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
