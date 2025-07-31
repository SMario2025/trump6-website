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
          className="inline-block border-4 border-pink-600 rounded-2xl p-2 shadow-xl"
        >
          <img
            src={trumpImage}
            alt="Trump6 Logo"
            className="w-16 md:w-20 mx-auto rounded-lg"
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mt-6 tracking-wide text-white drop-shadow-[0_2px_10px_rgba(255,0,255,0.6)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          TRUMP6 COIN
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mt-4 max-w-xl mx-auto text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Welcome to the GTA6-inspired meme coin revolution on Solana.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
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
        <p>
          Trump6 isn’t just another meme coin. It’s a movement built on speed, culture and rebellion – born from the energy of GTA6 and the power of Solana.
        </p>
        <h3 className="text-2xl font-semibold">WHY TRUMP6?</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>⚡ Built on Solana – fast, cheap, unstoppable</li>
          <li>🎯 100% Community Owned</li>
          <li>🔥 Meme-powered growth via Twitter raids</li>
          <li>🎮 GTA-style branding and energy</li>
        </ul>
      </section>

      {/* Chart Section */}
      {showChart && (
        <section className="px-6 md:px-20 py-16 bg-black">
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
      <footer className="text-center py-8 border-t border-fuchsia-800 text-sm text-white/60">
        © 2025 Trump6 Coin. Inspired by Vice City Vibes. Not financial advice.
      </footer>
    </div>
  );
}

// Reusable button
function Button({ href, onClick, children, color, icon, textColor = "text-white" }) {
  const classes = `bg-gradient-to-r ${color} ${textColor} px-6 py-3 font-bold rounded-full shadow-md transition transform hover:scale-105 hover:shadow-xl`;

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
