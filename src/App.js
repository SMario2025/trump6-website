import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-gray-100 font-sans">
      <header className="flex flex-col items-center justify-center text-center px-4 py-12">
        <img
          src={trumpImage}
          alt="Trump6 Coin Logo"
          className="w-24 md:w-32 lg:w-40 rounded-xl shadow-lg mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-2">
          Trump6 Coin
        </h1>
        <p className="text-md md:text-xl text-gray-300 max-w-md">
          Crypto meets politics – The revolution begins.
        </p>
        <button
          onClick={() => window.open("https://x.com/TRUMP62025", "_blank")}
          className="mt-6 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md transition"
        >
          Get Started
        </button>

        <div className="flex gap-4 mt-4">
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-white text-black px-4 py-1.5 rounded-full font-semibold hover:bg-gray-200"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-white text-black px-4 py-1.5 rounded-full font-semibold hover:bg-gray-200"
          >
            Twitter/X
          </a>
        </div>
      </header>

      <main className="px-4 md:px-16 space-y-16">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Trump6</h2>
          <p className="text-gray-300 text-md md:text-lg mb-2">
            Trump6 is more than just a token — it’s a cultural movement born from
            the boldness of the digital age.
          </p>
          <p className="text-gray-300 text-md md:text-lg mb-2">
            Built on the speed and freedom of the Solana blockchain, Trump6 represents
            strength, humor, and rebellion in one coin.
          </p>
          <p className="text-gray-300 text-md md:text-lg">
            No taxes. No VC control. 100% community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tokenomics</h2>
          <ul className="list-disc list-inside text-gray-300 text-md md:text-lg">
            <li>Total Supply: 1,000,000,000</li>
            <li>0% Taxes – fair and free</li>
            <li>100% Community Driven</li>
            <li>Deployed on Solana</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Team</h2>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {[
              { name: "Pascal M.", role: "Project Lead" },
              { name: "Stan R.", role: "Community & Growth" },
              { name: "Tamara M.", role: "Blockchain Developer" },
            ].map((member, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Roadmap</h2>
          <div className="whitespace-pre-wrap text-sm md:text-md bg-black/20 p-4 rounded-xl">
            {`
🎮 TRUMP6 Roadmap 🚀

Phase 1: Launch 💥
- Website, Community, Meme Push
- Listing on DEX & Tracking Sites

Phase 2: Expansion 🌴
- GTA Collabs, NFTs, CEX Listings

Phase 3: Utility 🧠
- Meme Quests, Merch Store, AI Tools

Phase 4: Takeover 🌍
- Metaverse, Major Listings, Global Push
            `}
          </div>
        </section>
      </main>

      <footer className="text-center text-xs text-gray-400 py-6 mt-10 border-t border-gray-700">
        © 2025 Trump6 Coin. For entertainment only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;

