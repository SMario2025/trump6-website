// App.js – Complete Redesign
import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-fuchsia-900 to-purple-800 p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src={trumpImage} alt="Trump6 Logo" className="w-10 h-10 rounded-full border border-white" />
          <span className="font-bold text-lg">TRUMP6</span>
        </div>
        <a
          href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          💸 Buy Now
        </a>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-black via-purple-950 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">The Meme Revolution</h1>
        <p className="text-lg md:text-2xl max-w-xl text-white/80">
          TRUMP6 is here to dominate Solana with memes, momentum and movement.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
          >
            🐦 Twitter
          </a>
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
          >
            ✈️ Telegram
          </a>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto grid gap-20">
        <div>
          <h2 className="text-3xl font-bold text-pink-400 mb-3">🚀 What is TRUMP6?</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            TRUMP6 isn’t just another token — it's a cultural war cry. Built on Solana, it's blazing fast and meme-powered. No taxes. No BS. Just pure community-fueled fire.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-300 mb-3">📊 Tokenomics</h2>
          <ul className="list-disc list-inside text-lg text-white space-y-1">
            <li>Total Supply: 1,000,000,000</li>
            <li>0% Tax</li>
            <li>100% Fair Launch</li>
            <li>Powered by Solana</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-300 mb-3">🛣 Roadmap</h2>
          <ol className="list-decimal list-inside text-lg text-white space-y-1">
            <li>Launch & Community Formation</li>
            <li>Memes, Raids & Virality</li>
            <li>Listings on DEXes + Aggregators</li>
            <li>IRL + Digital Activations</li>
            <li>Surprise Utility Drops</li>
          </ol>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-cyan-300 mb-6">👥 Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="font-bold text-xl">Pascal M.</h3>
              <p className="text-sm">Founder</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="font-bold text-xl">Stan R.</h3>
              <p className="text-sm">Community</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="font-bold text-xl">Tamara M.</h3>
              <p className="text-sm">Blockchain Dev</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">📈 Live Chart</h2>
          <div className="w-full rounded-xl overflow-hidden border border-fuchsia-500 shadow-lg">
            <iframe
              src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
              style={{ width: "100%", height: "500px", border: "none" }}
              allowFullScreen
              title="Trump6 Chart"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-white/60 border-t border-fuchsia-800">
        © 2025 TRUMP6 – For the culture, not financial advice.
      </footer>
    </div>
  );
}