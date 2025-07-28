



import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div
      className="min-h-screen font-sans bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white text-lg md:text-xl"
    >
      <header className="flex flex-col items-center justify-center text-center p-6 md:p-10">
        <img
          src={trumpImage}
          alt="Trump6 Coin Logo"
          className="w-10 md:w-16 rounded-2xl shadow-xl mb-4 md:mb-6"
        />
        <h1 className="text-3xl md:text-6xl font-bold tracking-wide">
          Trump6 Coin
        </h1>
        <p className="text-base md:text-2xl mt-2 md:mt-4 max-w-xl mx-auto">
          Crypto meets politics – The revolution begins.
        </p>

        <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 flex-wrap justify-center">
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md transition-all text-sm md:text-base font-semibold"
          >
            Get Started
          </a>
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition-all text-sm md:text-base font-semibold"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition-all text-sm md:text-base font-semibold"
          >
            Twitter/X
          </a>
        </div>
      </header>

      <section className="px-4 md:px-20 py-8 md:py-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">About Trump6</h2>
        <p className="mb-4">
          Trump6 isn’t just another meme coin on the Solana blockchain – it’s a movement, a digital rebellion,
          and a brand with attitude, inspired by the relentless energy and underground vibe of GTA 6. In a world
          where countless cryptocurrencies vanish into obscurity, Trump6 positions itself as a community-driven
          coin that represents power, loyalty, and strategy.
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">What is Trump6?</h3>
        <p className="mb-4">
          Trump6 is a decentralized Solana-based token that combines speed, ultra-low transaction fees, and the
          viral energy of meme culture. This isn’t just a token you buy and forget – it’s a ticket into a global
          community of degens and crypto rebels who are hunting for the next 100x play. Unlike short-lived meme
          coins, Trump6 is built on solid branding, a GTA 6-inspired aesthetic, and unstoppable social media
          hype, making it a project designed to thrive, not fade.
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">The Vision of Trump6</h3>
        <p className="mb-4">
          The mission behind Trump6 is to become a digital street empire, a cryptocurrency fueled not only by
          price action but by culture and community power. Trump6 is about owning the digital streets, just like
          the iconic characters of GTA dominate their world. Every holder is part of a larger movement, driven
          by the values of power, strategy, and loyalty.
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Why Trump6?</h3>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>GTA 6 Energy: Bold, raw, and impossible to ignore.</li>
          <li>Community First: Trump6 grows stronger with every holder, every meme, and every viral push.</li>
          <li>Next-Gen Meme Coin: Built on Solana, leveraging the momentum of trending platforms like Pump.fun to go viral.</li>
          <li>Rewards for Diamond Hands: With unique competitions (like the 1 million Trump6 holder challenge), loyal holders are always rewarded.</li>
        </ul>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">The Goal</h3>
        <p className="mb-4">
          Trump6 aims to rise as the top meme coin on Solana, while evolving into a viral brand that captures
          attention far beyond the crypto scene. Through FOMO-driven marketing, strategic social media presence,
          and targeted listings (CoinMarketCap, DexScreener, Raydium), Trump6 is on a clear path to dominate.
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">The Bottom Line</h3>
        <p>
          Trump6 is more than just a token – it’s a statement. By buying Trump6, you’re joining a cultural
          revolution, becoming part of a crew that thrives on hype, courage, and community strength. Trump6 is
          built for those who want to own the streets of Web3 and secure their spot in the next generation of
          crypto kings.
        </p>
      </section>

      <section className="px-4 md:px-20 py-8 md:py-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-center text-yellow-400">
          📊 TRUMP6 Live Chart (powered by DexScreener)
        </h2>
        <div className="w-full">
          <iframe
            src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
            style={{ width: '100%', height: '500px', border: '0' }}
            allowFullScreen
            frameBorder="0"
            title="DexScreener Chart"
          />
        </div>
      </section>

      <section className="px-4 md:px-20 py-8 md:py-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Roadmap</h2>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily: "inherit",
            color: "#ffffff",
            textShadow: "none",
            fontSize: "1.2rem"
          }}
        >
{`
🎮 TRUMP6 Roadmap 🚀

Phase 1: Loading the Game 💾🔥
- Launch TRUMP6 on Solana blockchain
- Activate Website & Socials (X 🐦, Telegram ✈️, Discord 🕹️)
- Build the Community & Launch Meme Campaigns
- DEX Listing (Dex Screener, Birdeye, etc.)
- Hype Push with Influencer Collabs & Twitter Raids

Phase 2: Entering Vice Mode 🌴🚗
- Trend on Crypto Twitter & Meme Pages
- Partner with GTA-themed/Narrative Projects & Influencers
- Drop the first GTA-Trump NFT Series
- Target Tier 2 & 3 CEX Listings
- Deeper Integrations with Solana Ecosystem Tools

Phase 3: Unlocking Real Utility 🔓💰
- Trump6 Mission Hub (Daily Meme Quests for $TR6 rewards)
- TRUMP6 Merch Store – Pay with $TR6
- Collaborations with Pop Culture Creators & Gaming Brands
- Launch AI Meme Generator
- Push Real-World Use Cases & IRL Events

Phase 4: The Final Heist – Global Takeover 🌍🕶️
- Listings on Major CEXs (Tier 1 Exchanges)
- TRUMP6 Metaverse Strip – Interactive GTA-style Hangout Zone
- Web3 Gaming Integrations & NFT Avatars
- AI-Driven GTA Lore Engine
- Long-term Community Growth & Meme Sustainability Plan

🚀 The Revolution Has Just Started
`}
        </pre>
      </section>
    </div>
  );
}

export default App;