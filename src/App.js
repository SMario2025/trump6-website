import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-purple-900 text-white font-sans flex flex-col items-center justify-center px-4 py-12">
      {/* Logo + Titel */}
      <img
        src={trumpImage}
        alt="Trump6 Coin Logo"
        className="w-20 md:w-24 lg:w-28 rounded-full shadow-xl mb-4"
      />

      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-2">
        Trump6 Coin
      </h1>
      <p className="text-sm md:text-lg text-center max-w-md mb-4">
        Crypto meets politics – The revolution begins.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-2 mb-8">
        <a
          href="https://t.me/TRUMP6Groupe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow transition"
        >
          Telegram
        </a>
        <a
          href="https://x.com/TRUMP62025"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-400 hover:bg-sky-500 text-white px-5 py-2 rounded-full font-semibold shadow transition"
        >
          Twitter
        </a>
      </div>

      {/* About Section */}
      <section className="max-w-xl text-center space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">About Trump6</h2>
          <p className="text-gray-300">
            Trump6 is more than just a token — it's a cultural movement born from
            the boldness of the digital age. No taxes. No VCs. 100 % community.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Tokenomics</h2>
          <ul className="text-gray-300 space-y-1">
            <li>• 1,000,000,000 Total Supply</li>
            <li>• 0% Taxes</li>
            <li>• 100% Community Driven</li>
            <li>• Deployed on Solana</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Roadmap</h2>
          <p className="text-gray-300 whitespace-pre-wrap text-sm">
{`Phase 1: Launch 💥
- Website, Community, DEX Listing

Phase 2: Expansion 🚀
- GTA Collabs, NFTs, X Listings

Phase 3: Utility 🔧
- Quests, Merch, Tools`}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-xs text-gray-400 mt-12 border-t border-gray-700 pt-4 w-full text-center">
        © 2025 Trump6 Coin — For entertainment only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;


