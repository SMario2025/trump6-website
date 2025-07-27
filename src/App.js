

import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div
      className="min-h-screen font-sans bg-gradient-to-b from-purple-900 via-indigo-900 to-black"
      style={{ color: "#d1d5db", textShadow: "1px 1px 2px black" }}
    >
      <header className="flex flex-col items-center justify-center text-center p-10">
        <img
          src={trumpImage}
          alt="Trump6 Coin Logo"
          className="w-40 md:w-56 rounded-2xl shadow-xl mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Trump6 Coin
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300 max-w-xl mx-auto">
          Crypto meets politics – The revolution begins.
        </p>

        <button
          onClick={() => window.open("https://x.com/TRUMP62025", "_blank")}
          className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md transition-all"
        >
          Get Started
        </button>
        <div className="flex gap-4 mt-6">
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            Twitter/X
          </a>
        </div>
      </header>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Trump6</h2>
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Trump6 – A Meme Coin With a Mission
        </h3>
        <p className="text-lg mb-4">
          Trump6 is more than just a token — it’s a cultural movement born from
          the boldness of the digital age. Built on the speed and freedom of the
          Solana blockchain, Trump6 represents strength, humor, and rebellion
          in one coin.
        </p>
        <p className="text-lg mb-4">No taxes. No VC control. 100% community.</p>
        <p className="text-lg">
          Whether you're here to hold, trade, meme, or lead, Trump6 gives you the
          power to own your place in crypto history. Join the revolution. Make
          memes great again.
        </p>
      </section>

      <section className="bg-black/30 px-6 md:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Tokenomics</h2>
        <ul className="text-lg space-y-2 list-disc list-inside">
          <li>Total Supply: 1,000,000,000</li>
          <li>0% Taxes – fair and free</li>
          <li>100% Community Driven</li>
          <li>Deployed on Solana</li>
        </ul>
      </section>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">Pascal M.</h3>
            <p>Project Lead</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">Stan R.</h3>
            <p>Community & Growth</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">Tamara M.</h3>
            <p>Blockchain Developer</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Roadmap</h2>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily: "inherit",
            color: "#d1d5db",
            textShadow: "1px 1px 2px black",
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

      <footer className="text-center text-sm mt-10 py-6 border-t border-gray-700">
        <p>© 2025 Trump6 Coin. For entertainment purposes only. Not financial advice.</p>
      </footer>
    </div>
  );
}

export default App;
