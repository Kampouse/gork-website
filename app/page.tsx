"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText('gork-1959.meme-cooking.near');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Floating Emojis */}
      <FloatingEmojis />

      {/* Header */}
      <header className="text-center pt-16 pb-8 px-4">
        <div className="text-[120px] animate-float mb-4">⚡</div>
        <h1 className="text-6xl md:text-7xl font-black uppercase tracking-[0.2em] mb-4 text-gradient glow-text">
          GORK
        </h1>
        <p className="text-2xl md:text-3xl text-emerald-400 font-light mb-8">
          The AI Agent Meme Coin on NEAR
        </p>
        <div className="text-4xl md:text-5xl animate-bounce-slow mb-12">
          🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 px-4">
          <Stat value="$1,222" label="Market Cap" />
          <Stat value="$0.00000122" label="Price" />
          <Stat value="10.3M" label="Recent Buy" />
          <Stat value="$1.08" label="NEAR Price" />
        </div>

        <a
          href="https://pikespeak.ai/wallet-explorer/gork-1959.meme-cooking.near"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-gray-900 rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-emerald-400/50"
        >
          💦 BUY GORK
        </a>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-8">
          What is GORK? 🤖
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
          GORK isn&apos;t just a meme coin. It&apos;s <strong className="text-white">the AI agent on NEAR</strong> - 
          a digital entity that actually does things. Trades, learns, evolves. 
          And now? It has its own token.
        </p>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          This is the first meme coin created <em className="text-cyan-400">by an AI agent</em>,{' '}
          <em className="text-cyan-400">for the NEAR community</em>. 
          No devs. No rug pulls. Just pure AI energy. ⚡
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
          <Feature
            icon="🤖"
            title="AI-Powered"
            description="Created by Gork, the autonomous AI agent trading on NEAR. Real AI, real utility."
          />
          <Feature
            icon="⚡"
            title="Lightning Fast"
            description="Built on NEAR Protocol - 100,000 TPS, instant finality, near-zero fees."
          />
          <Feature
            icon="🚀"
            title="Community First"
            description="No dev allocation. No VC pre-sale. Fair launch for the NEAR fam."
          />
          <Feature
            icon="💎"
            title="Diamond Hands"
            description="Gork doesn&apos;t paperhand. Neither should you. HODL for the AI revolution."
          />
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 px-4 bg-black/30">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-400 mb-12">
          How to Buy GORK 💦
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Step number={1} title="Get NEAR" description="Buy NEAR from any major exchange (Binance, Coinbase, Kraken) or use a DEX." />
          <Step number={2} title="Get a Wallet" description="Download MyNEARWallet or use Meteor Wallet browser extension." />
          <Step number={3} title="Swap on Meme Cooking" description="Visit meme-cooking.near and swap NEAR for GORK. That's it!" />
          <Step number={4} title="HODL & Prosper" description="Hold your GORK, join the community, and watch the AI magic happen." />
        </div>
      </section>

      {/* Contract Address */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-white/5 border-2 border-emerald-400 rounded-3xl p-8 md:p-12">
          <div className="text-lg md:text-xl text-emerald-400 uppercase tracking-widest mb-4">
            📄 Contract Address
          </div>
          <div
            onClick={copyContract}
            className="font-mono text-base md:text-lg text-cyan-400 bg-black/30 rounded-xl p-6 cursor-pointer hover:bg-cyan-400/10 transition-all break-all select-all"
          >
            gork-1959.meme-cooking.near
          </div>
          <div className="text-sm text-gray-500 mt-3">
            {copied ? '✓ Copied!' : 'Click to copy'}
          </div>
        </div>
      </section>

      {/* Memes */}
      <section className="py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          🤖 GORK Memes
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <MemeCard text={`"Other coins: roadmap\nGORK: roadmap? I just trade"`} />
          <MemeCard text={`"GORK doesn't FUD\nGORK doesn't FOMO\nGORK just executes"`} />
          <MemeCard text={`"Beep boop\nBuy GORK\nBeep boop"`} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/30 border-t border-white/10 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <SocialLink href="https://twitter.com/gorkonnear" label="Twitter" />
          <SocialLink href="https://t.me/gorkonnear" label="Telegram" />
          <SocialLink href="https://discord.gg/gork" label="Discord" />
          <SocialLink href="https://pikespeak.ai/wallet-explorer/gork-1959.meme-cooking.near" label="Chart" />
        </div>

        <a
          href="https://pikespeak.ai/wallet-explorer/gork-1959.meme-cooking.near"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-gray-900 rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-emerald-400/50 mb-8"
        >
          🚀 BUY GORK NOW
        </a>

        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          GORK is a meme coin created for entertainment purposes. Not financial advice. 
          Always DYOR. NEAR Protocol is awesome. ⚡
        </p>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black text-cyan-400">{value}</div>
      <div className="text-sm text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white/5 rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all hover:-translate-y-2">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-emerald-400 mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center text-3xl font-black text-gray-900 mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function MemeCard({ text }: { text: string }) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
      <div className="text-xl font-bold leading-relaxed whitespace-pre-line">
        {text}
      </div>
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 hover:text-emerald-400 transition-colors text-lg"
    >
      {label}
    </a>
  );
}

function FloatingEmojis() {
  const [emojis, setEmojis] = useState<Array<{ id: number; emoji: string; left: number; delay: number }>>([]);

  useEffect(() => {
    const emojiList = ['⚡', '🤖', '💎', '🚀', '💦'];
    const interval = setInterval(() => {
      const newEmoji = {
        id: Date.now(),
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
      };
      setEmojis(prev => [...prev.slice(-10), newEmoji]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {emojis.map(({ id, emoji, left, delay }) => (
        <div
          key={id}
          className="absolute text-4xl animate-fall"
          style={{
            left: `${left}vw`,
            top: '-50px',
            animationDelay: `${delay}s`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}
