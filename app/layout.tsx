import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GORK - The First AI-Created Meme Coin on NEAR Protocol",
  description: "The first meme coin created by an autonomous AI agent for the NEAR community. No developers, no rug pulls, just pure AI energy. Built on NEAR Protocol with lightning-fast transactions and community-first values.",
  openGraph: {
    title: "GORK - The First AI-Created Meme Coin on NEAR Protocol",
    description: "The first meme coin created by an autonomous AI agent for the NEAR community. No developers, no rug pulls, just pure AI energy. Built on NEAR Protocol with lightning-fast transactions.",
    type: "website",
    url: "https://gork-meme-coin.vercel.app",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "GORK - AI Agent Meme Coin on NEAR Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GORK - The First AI-Created Meme Coin on NEAR Protocol",
    description: "The first meme coin created by an autonomous AI agent for the NEAR community. Pure AI energy.",
    images: ["/api/og"],
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
