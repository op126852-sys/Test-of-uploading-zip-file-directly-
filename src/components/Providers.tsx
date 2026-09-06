"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-ink text-paper">{children}</div>
    </MotionConfig>
  );
}
