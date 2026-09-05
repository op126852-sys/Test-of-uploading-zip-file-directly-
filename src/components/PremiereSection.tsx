"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { scrollToId } from "@/lib/nav";
import Footer from "@/components/Footer";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const DETAILS = [
  "November 27th, 2024",
  "Prague, Czech Republic",
  "Doors 19:00 CET",
];

export default function PremiereSection() {
  return (
    <section
      id="premiere"
      aria-label="The premiere"
      className="relative min-h-[720px] w-full overflow-hidden md:h-[680px] md:min-h-[640px]"
    >
      {/* Floating astronaut plate */}
      <div className="absolute inset-0">
        <Image
          src="/images/premiere.jpg"
          alt="An astronaut floats horizontally through dark space beside a massive fiery launch plume"
          fill
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-[62%_center]"
        />
      </div>

      {/* Legibility layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_42%,rgba(6,8,10,0.62),rgba(6,8,10,0.25)_60%,rgba(6,8,10,0.15))]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(to_top,rgba(6,8,10,0.92),rgba(6,8,10,0.25)_60%,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
        className="relative z-10 mx-auto flex h-full min-h-[720px] max-w-[1100px] flex-col items-center justify-center px-4 pb-44 pt-24 text-center md:min-h-[640px] md:px-6 md:pb-32"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-4 uppercase text-white/70"
          style={{ fontSize: "8px", letterSpacing: "0.22em" }}
        >
          <span aria-hidden className="hidden h-px w-10 bg-white/30 sm:block" />
          <span>/ The Premiere</span>
          <span aria-hidden className="hidden h-px w-10 bg-white/30 sm:block" />
        </motion.p>

        <motion.h2
          variants={item}
          className="mt-7 font-normal text-white"
          style={{
            fontSize: "clamp(32px, 4.6vw, 44px)",
            lineHeight: 1.06,
            letterSpacing: "-0.028em",
            maxWidth: "760px",
          }}
        >
          One night under the stars of Prague.
        </motion.h2>

        <motion.span
          variants={item}
          aria-hidden
          className="mt-8 block h-px w-12 bg-white/40"
        />

        <motion.p
          variants={item}
          className="mt-7 max-w-[520px] uppercase text-white/65"
          style={{ fontSize: "8.5px", lineHeight: 1.9, letterSpacing: "0.12em" }}
        >
          Watch the final episode on the big screen, meet the cast, and
          celebrate the journey with fellow fans.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3.5 md:mt-9 md:flex-row md:gap-6"
        >
          {DETAILS.map((detail, i) => (
            <Fragment key={detail}>
              <span
                className="uppercase text-white/75"
                style={{ fontSize: "8.5px", letterSpacing: "0.14em" }}
              >
                {detail}
              </span>
              {i < DETAILS.length - 1 && (
                <span
                  aria-hidden
                  className="hidden h-[3px] w-[3px] rounded-full bg-white/35 md:inline-block"
                />
              )}
            </Fragment>
          ))}
        </motion.div>

        <motion.button
          variants={item}
          type="button"
          onClick={() => scrollToId("premiere")}
          whileTap={{ scale: 0.98 }}
          className="mt-12 inline-flex items-center justify-center uppercase text-[#090B0E] transition-all duration-200 ease-cinematic hover:-translate-y-px hover:bg-[#E3E3DE]"
          style={{
            width: "132px",
            height: "40px",
            background: "#F4F4F2",
            fontSize: "8px",
            letterSpacing: "0.1em",
            borderRadius: "3px",
          }}
        >
          Get Tickets
        </motion.button>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <Footer />
      </div>
    </section>
  );
}
