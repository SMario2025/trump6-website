// App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import trumpImage from "./assets/trump6.png";

export default function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header className="text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block border-4 border-pink-600 rounded-full p-1 shadow-2xl"
        >
          <img
            src={trumpImage}
            alt="Trump6 Logo"
            className="w-12 md:w-14 mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mt-6 tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          TRUMP6 COIN
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mt-4 max-w-xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Welcome to the GTA6-inspired meme coin revolution on Solana.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Button href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump" color="from-pink-500 to-fuchsia-700" icon="💸">
            Buy on Pump.fun
          </Button>
          <Button href="https://x.com/TRUMP62025" color="from-blue-600 to-indigo-700" icon="🐦">
            Twitter / X
          </Button>
          <Button href="https://t.me/TRUMP6Groupe" color="from-white to-gray-300" textColor="text-black" icon="✈️">
            Telegram
          </Button>
          <Button onClick={() => setShowChart(!showChart)} color="from-yellow-400 to-yellow-500" textColor="text-black" icon="📈">
            {showChart ? "Hide Chart" : "Show Chart"}
          </Button>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-white space-y-10">
        <h2 className="text-4xl font-bold text-pink-500">MISSION BRIEFING</h2>
        <p className="text-white">
          Trump6 isn’t just another meme coin. It’s a movement built on speed, culture and rebellion – born from the energy of GTA6 and the power of Solana.
        </p>
        <h3 className="text-2xl font-semibold text-white">WHY TRUMP6?</h3>
        <ul className="list-disc pl-6 space-y-2 text-white">
          <li>⚡ Built on Solana – fast, cheap, unstoppable</li>
          <li>🎯 100% Community Owned</li>
          <li>🔥 Meme-powered growth via Twitter raids</li>
          <li>🎮 GTA-style branding and energy</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white">TOKENOMICS</h3>
        <ul className="list-disc pl-6 space-y-2 text-white">
          <li>Total Supply: 1,000,000,000 $TR6</li>
          <li>0% Taxes – fair launch</li>
          <li>100% Community Owned</li>
          <li>Deployed on Solana</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white">ROADMAP</h3>
        <ol className="list-decimal pl-6 space-y-2 text-white">
          <li>🚀 Launch on Solana + Website + Socials</li>
          <li>🎯 Meme Campaigns + Community Growth</li>
          <li>🎮 GTA-Themed NFT Series</li>
          <li>📈 CEX Listings & Real World Events</li>
        </ol>
        <h3 className="text-2xl font-semibold text-white">TEAM</h3>
        <ul className="list-disc pl-6 space-y-2 text-white">
          <li>👨‍💼 Pascal M. – Project Lead</li>
          <li>📢 Stan R. – Community & Growth</li>
          <li>👩‍💻 Tamara M. – Blockchain Dev</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white">HOW TO BUY</h3>
        <ol className="list-decimal pl-6 space-y-2 text-white">
          <li>Install Phantom Wallet or Backpack</li>
          <li>Fund wallet with SOL</li>
          <li>Go to <a className="text-pink-400 underline" href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump" target="_blank" rel="noopener noreferrer">Pump.fun</a></li>
          <li>Connect Wallet and buy $TR6</li>
        </ol>
      </section>

      {/* Chart Section */}
      {showChart && (
        <section className="px-6 md:px-20 py-16 bg-black text-white">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            📊 Trump6 Live Chart
          </h2>
          <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-fuchsia-500 shadow-lg">
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
      <footer className="text-center py-8 border-t border-fuchsia-800 text-sm text-white/80">
        © 2025 Trump6 Coin. Inspired by Vice City Vibes. Not financial advice.
      </footer>
    </div>
  );
}

function Button({ href, onClick, children, color, icon, textColor = "text-white" }) {
  const classes = `bg-gradient-to-r ${color} ${textColor} px-7 py-3 font-bold rounded-full shadow-lg transition transform hover:scale-110 hover:shadow-pink-500/50 border-2 border-white/20`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon} {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon} {children}
    </button>
  );
}
