import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <header className="px-6 py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
        <img
          src={trumpImage}
          alt="Trump6 Logo"
          className="w-16 md:w-20 mx-auto mb-6 rounded-xl shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Trump6 Coin
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto">
          Crypto meets politics. The most wanted meme coin on Solana.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={() =>
              window.open(
                "https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump",
                "_blank"
              )
            }
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-green-500/50"
          >
            💸 Buy on Pump.fun
          </button>

          <button
            onClick={() => window.open("https://x.com/TRUMP62025", "_blank")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-blue-500/50"
          >
            🐦 Twitter / X
          </button>

          <button
            onClick={() => window.open("https://t.me/TRUMP6Groupe", "_blank")}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-white/50"
          >
            ✈️ Telegram
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="px-6 md:px-20 py-16 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Trump6</h2>

          <p>
            Trump6 isn’t just another meme coin on the Solana blockchain – it’s a movement, a digital rebellion,
            and a brand with attitude, inspired by the relentless energy and underground vibe of GTA 6.
          </p>

          <h3 className="text-2xl font-semibold">What is Trump6?</h3>
          <p>
            A decentralized Solana-based token with speed, low fees, and meme momentum.
            A coin you don’t just hold – you live it. Trump6 is fueled by hype, community and chaos.
          </p>

          <h3 className="text-2xl font-semibold">Why Trump6?</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>⚡ GTA 6 energy – bold and impossible to ignore.</li>
            <li>👥 Community-first: every holder is family.</li>
            <li>🔥 Pump.fun-powered virality.</li>
            <li>💎 Rewards for loyal diamond hands.</li>
          </ul>

          <h3 className="text-2xl font-semibold">The Goal</h3>
          <p>
            Become Solana’s top meme coin, dominate crypto Twitter, and build a movement that outlasts hype.
            This is Trump6. You’re either in or in the way.
          </p>
        </div>
      </section>

      {/* Chart Section */}
      <section className="px-6 md:px-20 py-16 bg-black">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          📈 Live Chart
        </h2>
        <div className="w-full max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden border border-zinc-700">
          <iframe
            src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
            style={{ width: "100%", height: "500px", border: "none" }}
            allowFullScreen
            title="Trump6 DexScreener Chart"
          />
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="px-6 md:px-20 py-16 bg-zinc-900 text-white">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          🗺️ Trump6 Roadmap
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Phase 1: Loading the Game 💾",
              items: [
                "Launch on Solana",
                "Website & Socials live",
                "Meme Campaigns",
                "DEX Listings",
                "Influencer Collabs",
              ],
            },
            {
              title: "Phase 2: Vice Mode 🌴",
              items: [
                "GTA-themed NFT Drop",
                "Crypto Twitter Hype",
                "Tier 2–3 CEX Listings",
                "Pop Culture Collabs",
              ],
            },
            {
              title: "Phase 3: Real Utility 🔓",
              items: [
                "Mission Hub (Daily Quests)",
                "Merch Store",
                "AI Meme Generator",
                "IRL Events",
              ],
            },
            {
              title: "Phase 4: Global Takeover 🌍",
              items: [
                "Tier 1 CEX Listings",
                "Trump6 Metaverse Strip",
                "Web3 Gaming Integrations",
                "GTA Lore Engine (AI)",
              ],
            },
          ].map((phase, index) => (
            <div
              key={index}
              className="bg-black/40 p-6 rounded-xl shadow-inner space-y-2"
            >
              <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
              <ul className="list-disc list-inside text-sm">
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-black border-t border-gray-700 text-sm text-gray-400">
        © 2025 Trump6 Coin. For entertainment purposes only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;
