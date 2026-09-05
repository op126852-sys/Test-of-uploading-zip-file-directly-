import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "EXOSIA° — Explore the mysteries of space",
  description:
    "EXOSIA is a premium sci-fi space series. Journey through star systems and new worlds — stories of discovery, courage, and the captivating mysteries of the cosmos. One night under the stars of Prague, November 27th 2024.",
  openGraph: {
    title: "EXOSIA° — Explore the mysteries of space",
    description:
      "A premium sci-fi space series. Stories of discovery, courage, and the captivating mysteries of the cosmos.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
