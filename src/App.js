import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section with Animation */}
      <header className="px-6 py-16 bg-gradient-to-b from-zinc-900 to-black text-center">
        <motion.img
          src={trumpImage}
          alt="Trump6 Logo"
          className="w-14 md:w-16 mx-auto mb-4 rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Trump6 Coin
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Crypto meets politics. The most wanted meme coin on Solana.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button
            onClick={() =>
              window.open(
                "https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump",
                "_blank"
              )
            }
            className="bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-green-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            💸 Buy on Pump.fun
          </button>

          <button
            onClick={() => window.open("https://x.com/TRUMP62025", "_blank")}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            🐦 Twitter / X
          </button>

          <button
            onClick={() => window.open("https://t.me/TRUMP6Groupe", "_blank")}
            className="bg-white text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            ✈️ Telegram
          </button>

          <button
            onClick={() => setShowChart(!showChart)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            📈 {showChart ? "Hide Chart" : "Show Chart"}
          </button>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="px-6 md:px-20 py-16 bg-black text-white">
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

      {/* Chart Section (Toggle) */}
      {showChart && (
        <section className="px-6 md:px-20 py-16 bg-zinc-900 text-white">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            📊 Trump6 Live Chart
          </h2>
          <div className="w-full max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden border border-zinc-700">
            <iframe
              src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
              style={{ width: "100%", height: "500px", border: "none" }}
              allowFullScreen
              title="Trump6 Chart"
            />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center py-8 bg-black border-t border-gray-700 text-sm text-gray-400">
        © 2025 Trump6 Coin. For entertainment purposes only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;
