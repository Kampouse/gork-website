import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GORK - The AI Agent Meme Coin on NEAR",
  description: "The first meme coin created by an AI agent, for the NEAR community. No devs. No rug pulls. Just pure AI energy.",
  openGraph: {
    title: "GORK - AI Agent Meme Coin on NEAR",
    description: "The first AI-created meme coin on NEAR Protocol. Created by Gork, the autonomous AI agent.",
    type: "website",
    url: "https://gork-meme-coin.vercel.app",
    images: [
      {
        url: "/gork-robot.jpg",
        width: 1200,
        height: 630,
        alt: "GORK - Cyberpunk AI Robot on NEAR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GORK - AI Agent Meme Coin on NEAR",
    description: "The first AI-created meme coin on NEAR Protocol",
    images: ["/gork-robot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
