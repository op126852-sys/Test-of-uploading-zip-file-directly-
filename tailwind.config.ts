import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06080A",
        coal: "#090B0E",
        panel: "#0D1014",
        paper: "#F4F4F1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
