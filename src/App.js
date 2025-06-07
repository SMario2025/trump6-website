import React from "react";
import trumpImage from "./assets/trump6.png";
import neonCity from "./assets/neon-city.webp";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${neonCity})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "white",
      }}
      className="font-sans"
    >
      <header className="flex flex-col items-center justify-center text-center p-10">
        <img
          src={trumpImage}
          alt="Trump6"
          className="max-w-xs rounded-2xl shadow-xl mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Trump6 Coin
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-pink-400">
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
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-pink-400">
          Trump6 – Own the Streets, Own the Future
        </h3>
        <p className="text-lg text-gray-300 mb-4">
          Welcome to Trump6, the next-gen crypto coin that channels the raw
          energy and unstoppable hustle of GTA6’s underground empire. This
          isn’t just a coin — it’s your ticket to becoming a digital kingpin in
          a world where power, strategy, and loyalty rule.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          We’re building an exclusive community of 500 strong before we launch
          — because real power comes from unity. Join us early, stake your
          claim, and be part of a movement that’s about more than just profits;
          it’s about dominating the game.
        </p>
        <p className="text-lg text-gray-300">
          Ready to roll with the big players? Secure your spot in the Trump6
          crew and help us rewrite the rules of crypto. The streets are
          waiting — will you answer the call?
        </p>
      </section>

      <section className="bg-black/30 px-6 md:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Tokenomics</h2>
        <ul className="text-lg text-gray-300 space-y-2 list-disc list-inside">
          <li>Total Supply: 6,000,000,000</li>
          <li>0% Taxes – fair and free</li>
          <li>100% Community Driven</li>
          <li>Deployed on Solana</li>
        </ul>
      </section>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-white">Kevin R.</h3>
            <p className="text-gray-300">Founder & Visionary</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-white">Jessica L.</h3>
            <p className="text-gray-300">Marketing & Community</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-white">Daniel M.</h3>
            <p className="text-gray-300">Smart Contract Dev</p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-black/50 px-6 md:px-20 py-10 mt-10 rounded-xl mx-6 md:mx-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-pink-400">
          🎮 TRUMP6 Roadmap 🚀
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          TRUMP6 isn’t just another meme coin. It’s a wild ride through meme
          culture, pop narrative, and crypto chaos—straight outta Vice City!
          Inspired by the energy of GTA6, TRUMP6 blends hype, humor, and utility
          to take over the blockchain streets. 🏎️💥
        </p>

        <div className="space-y-8 text-gray-300">
          <div>
            <h3 className="text-xl font-bold mb-2">Phase 1: Loading the Game 💾🔥</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🎯 Launch TRUMP6 on Solana blockchain</li>
              <li>🌐 Activate Website & Socials (X 🐦, Telegram ✈️, Discord 🕹️)</li>
              <li>👾 Build the Community & Launch Meme Campaigns (GTA x Trump crossover memes)</li>
              <li>📊 DEX Listing (Dex Screener, Birdeye, etc.)</li>
              <li>📣 Hype Push with Influencer Collabs & Twitter Raids</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Phase 2: Entering Vice Mode 🌴🚗</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>📈 Trend on Crypto Twitter & Meme Pages</li>
              <li>🤝 Partner with GTA-themed/Narrative Projects & Influencers</li>
              <li>🎨 Drop the first GTA-Trump NFT Series (Rare Characters, Missions, Skins)</li>
              <li>🏦 Target Tier 2 & 3 CEX Listings</li>
              <li>🔗 Deeper Integrations with Solana Ecosystem Tools</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Phase 3: Unlocking Real Utility 🔓💰</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🕵️ Trump6 Mission Hub (Daily Meme Quests for $TR6 rewards)</li>
              <li>🛍️ TRUMP6 Merch Store – Pay with $TR6 (Vice City meets MAGA vibes)</li>
              <li>🏪 Collaborations with Pop Culture Creators & Gaming Brands</li>
              <li>🤖 Launch AI Meme Generator (GTA/Trump AI-generated scenes)</li>
              <li>📡 Push Real-World Use Cases & IRL Events</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Phase 4: The Final Heist – Global Takeover 🌍🕶️</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🏛️ Listings on Major CEXs (Tier 1 Exchanges)</li>
              <li>🌐 TRUMP6 Metaverse Strip – Interactive GTA-style Hangout Zone</li>
              <li>⚡ Web3 Gaming Integrations & NFT Avatars</li>
              <li>🧠 AI-Driven GTA Lore Engine (Auto-meme narratives)</li>
              <li>🌱 Long-term Community Growth & Meme Sustainability Plan</li>
            </ul>
          </div>
        </div>

        <p className="text-lg text-pink-400 mt-8 font-semibold">
          🚀 The Revolution Has Just Started
        </p>
        <p className="text-gray-300">
          TRUMP6 is not just a coin—it’s a narrative-powered movement. It’s time
          to meme like a maniac, build like a boss, and ride through Web3 with
          full throttle. 🏁
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10 py-6 border-t border-gray-700">
        <p>© 2025 Trump6 Coin. For entertainment purposes only. Not financial advice.</p>
      </footer>
    </div>
  );
}

export default App;
