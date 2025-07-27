import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white font-sans">
      {/* Header */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
        <img
          src={trumpImage}
          alt="Trump6 Logo"
          className="w-24 md:w-28 rounded-full shadow-2xl border-4 border-pink-500 mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Trump6 Coin
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Crypto meets politics – The revolution begins.
        </p>

        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Twitter/X
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Trump6</h2>
        <p className="text-lg text-gray-300 mb-4 text-center">
          Trump6 is more than just a token — it’s a cultural movement born from
          the boldness of the digital age. Built on the speed and freedom of the
          Solana blockchain, Trump6 represents strength, humor, and rebellion in
          one coin.
        </p>
        <p className="text-lg text-gray-300 mb-4 text-center">
          No taxes. No VC control. 100% community.
        </p>
        <p className="text-lg text-gray-300 text-center">
          Whether you're here to hold, trade, meme, or lead, Trump6 gives you the
          power to own your place in crypto history. Join the revolution.
        </p>
      </section>

      {/* Tokenomics */}
      <section className="bg-black/30 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Tokenomics</h2>
          <ul className="text-lg space-y-2 text-gray-300 list-disc list-inside">
            <li>Total Supply: 1,000,000,000</li>
            <li>0% Taxes – fair and free</li>
            <li>100% Community Driven</li>
            <li>Deployed on Solana</li>
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { name: "Pascal M.", role: "Project Lead" },
            { name: "Stan R.", role: "Community & Growth" },
            { name: "Tamara M.", role: "Blockchain Developer" },
          ].map((member) => (
            <div key={member.name} className="bg-white/10 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-black/40 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Roadmap</h2>
          <pre className="whitespace-pre-wrap text-sm md:text-base text-gray-300">
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
          </pre>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-700">
        © 2025 Trump6 Coin. For entertainment only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;

