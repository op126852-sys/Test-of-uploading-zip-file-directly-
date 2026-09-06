"use client";

import Reveal from "@/components/Reveal";
import StatsBar from "@/components/StatsBar";
import ParallaxImage from "@/components/ParallaxImage";
import { asset } from "@/lib/assets";

export default function MissionSection() {
  return (
    <section
      id="mission"
      aria-label="Our mission"
      className="relative min-h-[780px] w-full overflow-hidden md:h-[90vh] md:min-h-[620px]"
    >
      <ParallaxImage
        src={asset("/images/mission.jpg")}
        alt="An astronaut floats diagonally outside a spacecraft hatch beside a fiery launch tower"
        className="object-[62%_center]"
        sizes="100vw"
      />

      {/* Readability gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,8,10,0.7),rgba(6,8,10,0.3)_42%,rgba(6,8,10,0.02)_72%,rgba(6,8,10,0.2))]" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-[linear-gradient(to_top,rgba(6,8,10,0.9),rgba(6,8,10,0.28)_55%,transparent)]" />

      <div className="relative z-10 mx-auto flex h-full min-h-[780px] max-w-[1800px] flex-col px-4 pb-12 pt-[110px] md:min-h-[620px] md:px-6 md:pb-[10vh] md:pt-0 lg:px-7 xl:px-9">
        <div className="max-w-[540px] md:mt-[14vh] md:pl-[11%] md:max-w-none lg:mt-[15vh] lg:pl-[14%]">
          <Reveal>
            <p
              className="uppercase text-white/65"
              style={{ fontSize: "8px", letterSpacing: "0.2em" }}
            >
              / Our Mission
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              className="mt-6 max-w-[520px] font-normal text-white md:mt-7"
              style={{
                fontSize: "clamp(20px, 2.2vw, 24px)",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
              }}
            >
              We believe the wonders of space belong to everyone. EXOSIA takes
              you on a journey through star systems and new worlds — stories of
              discovery, courage, and the captivating mysteries of the cosmos.
            </p>
          </Reveal>
        </div>

        <div className="mt-auto pt-20 md:mt-auto md:pt-0">
          <StatsBar />
        </div>
      </div>
    </section>
  );
}
