// App.js – NEU START
import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white font-sans">
      {/* HERO */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <img
          src={trumpImage}
          alt="Trump6 Logo"
          className="w-16 md:w-24 rounded-full shadow-2xl border-4 border-pink-500 mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4">
          TRUMP6 COIN
        </h1>
        <p className="text-2xl md:text-3xl text-white max-w-xl">
          The most wanted meme coin on Solana. Own the streets. Lead the movement.
        </p>
        <div className="flex gap-4 flex-wrap justify-center mt-8">
          <a
            href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-600 to-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            💸 Buy on Pump.fun
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            🐦 Twitter/X
          </a>
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            ✈️ Telegram
          </a>
        </div>
      </header>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4">🚀 About Trump6</h2>
        <p className="text-white text-xl leading-relaxed">
          Trump6 is not just a coin – it's a symbol of power, rebellion and loyalty. Born from the chaotic energy of GTA6 and built on the lightning-fast Solana blockchain, Trump6 empowers degens to rise. No taxes. No VCs. Just a community ready to flip the game.
        </p>
      </section>

      {/* TOKENOMICS */}
      <section className="bg-black/30 px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">📊 Tokenomics</h2>
        <ul className="list-disc list-inside text-white text-lg space-y-2">
          <li>Total Supply: 1,000,000,000</li>
          <li>0% Taxes – fair & free</li>
          <li>100% Community Owned</li>
          <li>Built on Solana</li>
        </ul>
      </section>

      {/* ROADMAP */}
      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">🗺 Roadmap</h2>
        <ol className="list-decimal list-inside text-white text-lg space-y-2">
          <li>Launch TRUMP6 on Solana + socials live</li>
          <li>Build community & meme takeover</li>
          <li>Influencer partnerships & NFT preview</li>
          <li>DEX + CEX listings (Tier 2–3)</li>
          <li>Utility Hub + Merch Drop + IRL Events</li>
        </ol>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">👥 Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-white">Pascal M.</h3>
            <p>Founder</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-white">Stan R.</h3>
            <p>Community</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-white">Tamara M.</h3>
            <p>Blockchain Dev</p>
          </div>
        </div>
      </section>

      {/* CHART */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          📈 Live Chart
        </h2>
        <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-fuchsia-600 shadow-lg">
          <iframe
            src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
            style={{ width: "100%", height: "500px", border: "none" }}
            allowFullScreen
            title="Trump6 Chart"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-fuchsia-800 text-sm text-white/60">
        © 2025 Trump6 Coin. Powered by memes. Not financial advice.
      </footer>
    </div>
  );
}
