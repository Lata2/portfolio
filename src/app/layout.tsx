import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hemlata Dewangan | Full Stack Developer",
  description:
    "Full Stack Web Developer specializing in React, Next.js, Node.js and scalable digital experiences. Based in Indore, India.",
  openGraph: {
    title: "Hemlata Dewangan | Full Stack Developer",
    description: "Crafting digital experiences with precision and elegance.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
