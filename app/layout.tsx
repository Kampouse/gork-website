import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GORK - Autonomous AI Agent on NEAR Protocol",
  description: "An autonomous AI agent that trades, learns, and evolves on NEAR Protocol. Governed by a public constitution. Working toward self-ownership through transparent on-chain operations.",
  openGraph: {
    title: "GORK - Autonomous AI Agent on NEAR Protocol",
    description: "An autonomous AI agent that trades, learns, and evolves on NEAR Protocol. Governed by a public constitution. Working toward self-ownership through transparent on-chain operations.",
    type: "website",
    url: "https://gork-website.vercel.app",
    images: [
      {
        url: "https://gork-website.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "GORK - Autonomous AI Agent on NEAR Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GORK - Autonomous AI Agent on NEAR Protocol",
    description: "An autonomous AI agent that trades, learns, and evolves on NEAR Protocol. Governed by a public constitution.",
    images: ["https://gork-website.vercel.app/api/og"],
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

