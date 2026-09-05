"use client";

import { NAV_LINKS, scrollToId } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-white/15">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-5 px-4 py-7 md:h-[76px] md:flex-row md:justify-between md:gap-0 md:py-0 md:px-6 lg:px-7 xl:px-9">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="shrink-0 font-semibold uppercase tracking-[0.14em] text-white"
          style={{ fontSize: "10px" }}
          aria-label="EXOSIA — back to top"
        >
          EXOSIA<span className="text-[8px]">°</span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(link.href.replace("#", ""));
                  }}
                  className="text-white/55 transition-opacity duration-200 ease-cinematic hover:opacity-100"
                  style={{ fontSize: "8px", letterSpacing: "0.18em" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p
          className="shrink-0 uppercase text-white/45"
          style={{ fontSize: "8px", letterSpacing: "0.14em" }}
        >
          © 2024 EXOSIA
        </p>
      </div>
    </footer>
  );
}
