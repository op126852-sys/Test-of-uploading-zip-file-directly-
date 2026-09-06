"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const STATS = [
  { value: "4", label: "Series" },
  { value: "36", label: "Episodes" },
  { value: "18", label: "Characters" },
  { value: "1 Night", label: "Live Premiere" },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function StatsBar() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
      className="grid grid-cols-2 gap-x-8 gap-y-9 md:flex md:flex-wrap md:items-start md:justify-center md:gap-x-16 lg:gap-x-24 xl:gap-x-28"
    >
      {STATS.map((stat) => (
        <motion.div
          key={stat.label}
          variants={item}
          className="flex flex-col"
        >
          <p
            className="font-medium leading-none text-white"
            style={{ fontSize: "26px", letterSpacing: "-0.01em" }}
          >
            {stat.value}
          </p>
          <p
            className="mt-2 uppercase text-white/55"
            style={{ fontSize: "7.5px", letterSpacing: "0.18em" }}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
