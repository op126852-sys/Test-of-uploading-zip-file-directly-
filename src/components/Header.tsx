"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";
import { NAV_LINKS, scrollToId } from "@/lib/nav";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-[0.14em] text-white ${className}`}
      style={{ fontSize: "10px" }}
    >
      EXOSIA<span className="ml-[1px] text-[8px] leading-none">°</span>
    </span>
  );
}

function OutlineTickets({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => scrollToId("premiere")}
      className={`inline-flex items-center justify-center border border-white/55 bg-transparent px-3 uppercase text-white transition-all duration-200 ease-cinematic hover:bg-white hover:text-[#090B0E] focus-visible:outline-white/70 ${className}`}
      style={{
        height: "26px",
        width: "82px",
        fontSize: "8.5px",
        letterSpacing: "0.12em",
        borderRadius: "2px",
      }}
    >
      Get Tickets
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    // wait for overlay close so smooth scroll is visible
    setTimeout(() => scrollToId(href.replace("#", "")), 60);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="flex h-[54px] items-center justify-between px-[16px] md:h-[56px] md:px-[24px] lg:px-[28px] xl:px-[36px]">
        {/* LEFT — wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="shrink-0"
          aria-label="EXOSIA — back to top"
        >
          <Wordmark />
        </a>

        {/* CENTER — desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10 xl:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.href);
                  }}
                  className="text-white/55 transition-opacity duration-200 ease-cinematic hover:opacity-100"
                  style={{ fontSize: "9px", letterSpacing: "0.18em", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT — tickets / mobile menu */}
        <div className="flex items-center gap-4">
          <OutlineTickets className="hidden md:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-7 w-7 items-center justify-center text-white/85 transition-opacity duration-200 hover:opacity-60 md:hidden"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col bg-[#06080A]/95 md:hidden"
          >
            <div className="flex h-[54px] items-center justify-between px-4">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-7 w-7 items-center justify-center text-white/85"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-6">
              <ul className="flex flex-col gap-7">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        go(link.href);
                      }}
                      className="text-white"
                      style={{ fontSize: "26px", fontWeight: 300, letterSpacing: "-0.02em" }}
                    >
                      {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.36 }}
                onClick={() => go("#premiere")}
                className="mt-12 w-full border border-white/55 py-3.5 uppercase text-white transition-colors duration-200 hover:bg-white hover:text-[#090B0E]"
                style={{ fontSize: "10px", letterSpacing: "0.14em" }}
              >
                Get Tickets
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
