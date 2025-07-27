import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white font-sans">
      {/* HEADER */}
      <header className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 md:py-28">
        <img
          src={trumpImage}
          alt="Trump6 Logo"
          className="w-28 sm:w-32 md:w-36 rounded-full shadow-2xl border-4 border-pink-500 mb-6"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Trump6 Coin
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-xl">
          Crypto meets politics – The revolution begins.
        </p>

        <div className="flex flex-wrap gap-3 mt-6 justify-center">
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition"
          >
            Twitter/X
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">About Trump6</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-4 text-center">
          Trump6 is more than just a token — it’s a cultural movement born from
          the boldness of the digital age.
        </p>
        <p className="text-base sm:text-lg text-gray-300 mb-4 text-center">
          Built on the speed and freedom of the Solana blockchain, Trump6
          represents strength, humor, and rebellion.
        </p>
        <p className="text-base sm:text-lg text-gray-300 text-center">
          No taxes. No VC control. 100% community.
        </p>
      </section>

      {/* TOKENOMICS */}
      <section className="bg-black/30 py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Tokenomics</h2>
          <ul className="text-sm sm:text-base text-gray-300 space-y-2 list-disc list-inside">
            <li>Total Supply: 1,000,000,000</li>
            <li>0% Taxes – fair and free</li>
            <li>100% Community Driven</li>
            <li>Deployed on Solana</li>
          </ul>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { name: "Pascal M.", role: "Project Lead" },
            { name: "Stan R.", role: "Community & Growth" },
            { name: "Tamara M.", role: "Blockchain Developer" },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white/10 p-5 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-300 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-black/40 py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Roadmap</h2>
          <div className="bg-white/10 p-4 rounded-lg text-sm sm:text-base text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
            {`
Phase 1: 🚀 Launch
- Token launch on Solana
- Website & social media setup
- Community building & meme campaigns
- DEX listings & influencer collabs

Phase 2: 🔥 Growth
- Trend on Twitter & Meme Sites
- Partner with GTA/NFT communities
- NFT Series Release
- Tier 2-3 CEX listings

Phase 3: 🎯 Utility
- Meme Quests for $TR6 rewards
- Merch store
- AI Meme Generator
- Gaming & Web3 tools

Phase 4: 🌎 Expansion
- Major exchange listings
- Metaverse hangout zones
- Web3 game integrations
- Long-term meme culture plans
            `}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs sm:text-sm text-gray-400 py-6 border-t border-gray-700 mt-6">
        © 2025 Trump6 Coin. For entertainment only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;

