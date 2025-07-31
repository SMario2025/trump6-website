import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-gray-800 text-white font-sans">
      <header className="text-center px-6 py-12">
        <img
          src={trumpImage}
          alt="Trump6 Coin Logo"
          className="w-20 md:w-28 mx-auto rounded-xl shadow-2xl mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Trump6 Coin
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-200 max-w-2xl mx-auto">
          Crypto meets politics – The revolution begins.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md font-semibold transition transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-full shadow-md font-semibold hover:bg-gray-200 transition transform hover:scale-105"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-full shadow-md font-semibold hover:bg-gray-200 transition transform hover:scale-105"
          >
            Twitter/X
          </a>
          <a
            href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md font-semibold transition transform hover:scale-105"
          >
            Buy on Pump.fun
          </a>
        </div>
      </header>

      <main className="px-6 md:px-20 space-y-16 pb-20">
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">About Trump6</h2>
          <div className="space-y-6 text-gray-100">
            <p>
              Trump6 isn’t just another meme coin on the Solana blockchain – it’s a movement, a digital rebellion,
              and a brand with attitude, inspired by the relentless energy and underground vibe of GTA 6.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white">What is Trump6?</h3>
            <p>
              A Solana-based token that combines speed, ultra-low fees, and the viral energy of meme culture.
              It’s not a token you forget – it’s a ticket into a community of degens and crypto rebels.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white">The Vision of Trump6</h3>
            <p>
              A digital street empire powered by community and culture – inspired by the strategic dominance of GTA legends.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white">Why Trump6?</h3>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>GTA 6 Energy: Bold, raw, and impossible to ignore.</li>
              <li>Community First: Grows stronger with every holder, every meme, every raid.</li>
              <li>Next-Gen Meme Coin: Built on Solana. Viral through Pump.fun.</li>
              <li>Diamond Hand Rewards: Compete. Hold. Win.</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold text-white">The Goal</h3>
            <p>
              Trump6 aims to rise as the top meme coin on Solana and evolve into a cultural brand
              through CMC listings, social dominance, and FOMO marketing.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white">The Bottom Line</h3>
            <p>
              Trump6 is a cultural statement. Join a movement built for hype, courage, and community strength.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6">
            📊 TRUMP6 Live Chart
          </h2>
          <div className="w-full shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
              style={{ width: '100%', height: '500px', border: '0' }}
              allowFullScreen
              frameBorder="0"
              title="DexScreener Chart"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">📜 Roadmap</h2>
          <div className="bg-black/20 p-6 rounded-xl shadow-inner text-white font-mono text-base md:text-lg leading-relaxed whitespace-pre-wrap">
{`🎮 TRUMP6 Roadmap 🚀

Phase 1: Loading the Game 💾🔥
- Launch TRUMP6 on Solana blockchain
- Website & Socials live
- Meme Campaigns & Community building
- DEX Listings
- Influencer Collabs & Twitter Raids

Phase 2: Entering Vice Mode 🌴🚗
- Crypto Twitter Trends
- GTA-themed NFTs & Partnerships
- Tier 2–3 CEX Listings

Phase 3: Unlocking Real Utility 🔓💰
- Daily Meme Quests ($TR6)
- Merch Store + AI Meme Generator
- IRL Events & Gaming Integrations

Phase 4: Global Takeover 🌍🕶️
- Tier 1 CEX Listings
- Trump6 Metaverse Zone
- Web3 Gaming & NFT Avatars
- Long-Term Community Growth`}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-700 mt-20 text-sm text-gray-400">
        © 2025 Trump6 Coin. For entertainment purposes only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;





