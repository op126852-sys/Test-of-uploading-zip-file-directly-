export const NAV_LINKS = [
  { label: "HOME", href: "#hero" },
  { label: "SERIES", href: "#mission" },
  { label: "CHARACTERS", href: "#updates" },
  { label: "EPISODES", href: "#premiere" },
] as const;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
