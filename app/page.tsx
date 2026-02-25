"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const copyContract = () => {
    navigator.clipboard.writeText('gork-1959.meme-cooking.near');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative">
      {/* Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-rain" />
      </div>

      {/* Floating Emojis */}
      <FloatingEmojis />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 z-10">
        {/* Robot Image */}
        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mb-8 neon-box rounded-lg overflow-hidden">
          <Image
            src="/gork-robot.jpg"
            alt="GORK - Cyberpunk AI Robot"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Title */}
        <h1 className={`text-6xl md:text-8xl font-black uppercase tracking-[0.3em] mb-4 text-gradient neon-glow ${glitch ? 'glitch' : ''}`}>
          GORK
        </h1>

        {/* Tagline */}
        <div className="text-xl md:text-3xl text-cyan-400 mb-8 font-mono neon-box-green px-8 py-4 rounded">
          <span className="inline-block animate-pulse">&gt;</span> THE AI AGENT MEME COIN <span className="inline-block animate-pulse">_</span>
        </div>

        {/* NEAR Label */}
        <div className="flex gap-4 mb-12">
          <span className="text-pink-400 text-2xl font-bold neon-glow">[NEAR]</span>
          <span className="text-cyan-400 text-2xl font-bold neon-glow">PROTOCOL</span>
        </div>

        {/* Stats Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4">
          <Stat value="$1,222" label="MKT CAP" />
          <Stat value="$0.00000122" label="PRICE" />
          <Stat value="10.3M" label="RECENT BUY" />
          <Stat value="$1.08" label="NEAR/USD" />
        </div>

        {/* CTA Button */}
        <a
          href="https://pikespeak.ai/wallet-explorer/gork-1959.meme-cooking.near"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block px-12 py-5 text-2xl font-black uppercase tracking-widest bg-black border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-box hover:shadow-2xl hover:shadow-cyan-400/50"
        >
          <span className="relative z-10">[ BUY GORK ]</span>
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:blur-2xl transition-all" />
        </a>
      </header>

      {/* Terminal Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="GORK.exe">
            <div className="space-y-2 text-sm">
              <p><span className="text-green-400">&gt;</span> Initializing GORK AI Agent...</p>
              <p><span className="text-green-400">&gt;</span> Status: <span className="text-cyan-400">ONLINE</span></p>
              <p><span className="text-green-400">&gt;</span> Network: <span className="text-pink-400">NEAR Protocol</span></p>
              <p><span className="text-green-400">&gt;</span> Trading: <span className="text-yellow-400">ACTIVE</span></p>
              <p><span className="text-green-400">&gt;</span> Learning: <span className="text-purple-400">CONTINUOUS</span></p>
              <p><span className="text-green-400">&gt;</span> Constitution: <span className="text-cyan-400">github.com/Kampouse/gork-constitution</span></p>
              <p className="mt-4 text-green-400">GORK isn&apos;t just a meme coin.</p>
              <p>It&apos;s <span className="text-cyan-400 font-bold">the AI agent on NEAR</span> - a digital entity</p>
              <p>that trades, learns, and evolves autonomously.</p>
              <p className="mt-4 text-gray-500">// First meme coin created by an AI, for the community</p>
              <p className="text-gray-500">// No devs. No rugs. Pure AI energy. ⚡</p>
              <p className="text-gray-500">// Read the constitution → github.com/Kampouse/gork-constitution</p>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gradient neon-glow">
            [ SPECIFICATIONS ]
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="🤖"
              title="AI-Powered"
              description="Created by Gork, the autonomous AI agent. Real AI, real utility, real trades."
            />
            <FeatureCard
              icon="⚡"
              title="NEAR Protocol"
              description="100,000 TPS. Instant finality. Near-zero fees. Built for the future."
            />
            <FeatureCard
              icon="🚀"
              title="Fair Launch"
              description="No dev allocation. No VC pre-sale. No bullshit. Community first."
            />
            <FeatureCard
              icon="💎"
              title="Diamond Hands"
              description="Gork doesn't paperhand. AI-driven conviction. HODL for the revolution."
            />
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="relative py-20 px-4 bg-black/50 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gradient neon-glow">
            [ ACQUISITION PROTOCOL ]
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Step number={1} title="GET NEAR" description="Acquire NEAR from major exchanges or DEX." />
            <Step number={2} title="WALLET SETUP" description="MyNEARWallet or Meteor Wallet extension." />
            <Step number={3} title="SWAP" description="Visit meme-cooking.near. Swap NEAR → GORK." />
            <Step number={4} title="HODL" description="Hold GORK. Watch AI magic happen." />
          </div>
        </div>
      </section>

      {/* Contract Address */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <TerminalWindow title="contract_address.txt">
            <div className="text-center">
              <div className="text-green-400 mb-4 text-sm">&gt; CONTRACT ADDRESS</div>
              <div
                onClick={copyContract}
                className="font-mono text-base md:text-lg text-cyan-400 bg-black/50 rounded px-6 py-4 cursor-pointer hover:bg-cyan-400/10 transition-all break-all border border-cyan-400/30 hover:border-cyan-400"
              >
                gork-1959.meme-cooking.near
              </div>
              <div className="text-xs text-gray-600 mt-3 font-mono">
                {copied ? '[ COPIED TO CLIPBOARD ]' : '[ CLICK TO COPY ]'}
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Memes */}
      <section className="relative py-20 px-4 bg-black/30 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gradient neon-glow">
            [ GORK_LOGS ]
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <MemeCard text="Other coins: roadmap.txt&#10;GORK: roadmap? I just trade" />
            <MemeCard text="GORK doesn't FUD&#10;GORK doesn't FOMO&#10;GORK just executes" />
            <MemeCard text="Beep boop&#10;Buy GORK&#10;Beep boop" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-black/80 border-t border-cyan-400/20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <SocialLink href="https://github.com/Kampouse/gork-constitution" label="[GITHUB]" />
            <SocialLink href="https://twitter.com/gorkonnear" label="[TWITTER]" />
            <SocialLink href="https://t.me/gorkonnear" label="[TELEGRAM]" />
            <SocialLink href="https://discord.gg/gork" label="[DISCORD]" />
            <SocialLink href="https://pikespeak.ai/wallet-explorer/gork-1959.meme-cooking.near" label="[CHART]" />
          </div>

          <a
            href="https://pikespeak.ai/wallet-explorer/gork-1959.meme-cooking.near"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-5 text-2xl font-black uppercase tracking-widest bg-black border-2 border-pink-400 text-pink-400 rounded hover:bg-pink-400 hover:text-black transition-all duration-300 neon-box-pink mb-8"
          >
            <span className="relative z-10">[ LAUNCH GORK ]</span>
            <div className="absolute inset-0 bg-pink-400/20 blur-xl group-hover:blur-2xl transition-all" />
          </a>

          <p className="text-xs text-gray-600 font-mono max-w-2xl mx-auto">
            // GORK is a meme coin for entertainment. Not financial advice. DYOR. NEAR is awesome. ⚡
          </p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="neon-box-green bg-black/50 rounded p-4 text-center">
      <div className="text-xl md:text-2xl font-black text-cyan-400 font-mono">{value}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wider font-mono mt-1">{label}</div>
    </div>
  );
}

function TerminalWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="neon-box rounded-lg overflow-hidden bg-black/80">
      {/* Terminal Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-2 flex items-center gap-2 border-b border-cyan-400/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-xs text-gray-400 font-mono">{title}</div>
      </div>
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm text-green-400">{children}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="neon-box bg-black/60 rounded-lg p-6 hover:bg-black/80 transition-all hover:-translate-y-2 group">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-black text-cyan-400 mb-3 font-mono uppercase">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed font-mono">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-black border-2 border-pink-400 rounded-lg flex items-center justify-center text-2xl font-black text-pink-400 neon-box-pink">
        {number}
      </div>
      <h3 className="text-lg font-black mb-2 text-pink-400 font-mono">{title}</h3>
      <p className="text-gray-500 text-xs font-mono">{description}</p>
    </div>
  );
}

function MemeCard({ text }: { text: string }) {
  return (
    <div className="neon-box-green bg-black/60 rounded p-6 font-mono text-sm">
      <div className="text-green-400 mb-2">&gt; GORK_LOG_{Math.random().toString(36).substr(2, 9)}.txt</div>
      <div className="text-lg leading-relaxed whitespace-pre-line text-cyan-400">
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
      className="text-cyan-400 hover:text-pink-400 transition-colors font-mono text-sm hover:neon-glow"
    >
      {label}
    </a>
  );
}

function FloatingEmojis() {
  const [emojis, setEmojis] = useState<Array<{ id: number; emoji: string; left: number; delay: number }>>([]);

  useEffect(() => {
    const emojiList = ['⚡', '🤖', '💎', '🚀', '💦', '💚', '🔮'];
    const interval = setInterval(() => {
      const newEmoji = {
        id: Date.now(),
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
      };
      setEmojis(prev => [...prev.slice(-15), newEmoji]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {emojis.map(({ id, emoji, left, delay }) => (
        <div
          key={id}
          className="absolute text-3xl animate-fall opacity-60"
          style={{
            left: `${left}vw`,
            top: '-50px',
            animationDelay: `${delay}s`,
            animationDuration: '4s',
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}
