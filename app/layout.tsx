import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GORK - The AI Agent Meme Coin on NEAR",
  description: "The first meme coin created by an AI agent, for the NEAR community. No devs. No rug pulls. Just pure AI energy.",
  openGraph: {
    title: "GORK - AI Agent Meme Coin",
    description: "The first AI-created meme coin on NEAR Protocol",
    type: "website",
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
