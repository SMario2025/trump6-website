// App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import trumpImage from "./assets/trump6.png";

export default function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-purple-900 via-black to-fuchsia-900">
        <motion.img
          src={trumpImage}
          alt="Trump6 Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-20 md:w-24 rounded-full border-4 border-pink-500 shadow-xl mb-6"
        />

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          TRUMP6 COIN
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          The most wanted meme coin on Solana. Inspired by GTA6 – fueled by culture.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump" color="from-pink-500 to-fuchsia-700" icon="💸">
            Buy on Pump.fun
          </Button>
          <Button href="https://x.com/TRUMP62025" color="from-blue-600 to-indigo-700" icon="🐦">
            Twitter / X
          </Button>
          <Button href="https://t.me/TRUMP6Groupe" color="from-white to-gray-200" textColor="text-black" icon="✈️">
            Telegram
          </Button>
          <Button onClick={() => setShowChart(!showChart)} color="from-yellow-400 to-yellow-500" textColor="text-black" icon="📈">
            {showChart ? "Hide Chart" : "Show Chart"}
          </Button>
        </motion.div>
      </section>

      {/* ABOUT & SECTIONS */}
      <section className="py-20 px-6 max-w-5xl mx-auto space-y-16">
        <Section title="🔥 Mission" color="text-pink-400">
          Trump6 isn’t just a meme coin. It's a digital rebellion, powered by GTA energy and Solana speed. No VCs. No taxes. Just pure community and chaos.
        </Section>

        <Section title="📊 Tokenomics" color="text-yellow-400">
          <ul className="list-disc pl-5 space-y-2">
            <li>Total Supply: 1,000,000,000 $TR6</li>
            <li>0% Taxes – Fair Launch</li>
            <li>100% Community Owned</li>
            <li>Built on Solana Blockchain</li>
          </ul>
        </Section>

        <Section title="🧭 Roadmap" color="text-green-400">
          <ol className="list-decimal pl-5 space-y-2">
            <li>🚀 Launch, Website, Socials</li>
            <li>🔥 Meme Campaigns, Community Raids</li>
            <li>🎮 GTA-Trump NFT Series</li>
            <li>📈 Tier 2-3 CEX Listings, IRL Events</li>
          </ol>
        </Section>

        <Section title="👑 Team" color="text-cyan-400">
          <ul className="list-disc pl-5 space-y-2">
            <li>👨‍💼 Pascal M. – Project Lead</li>
            <li>📢 Stan R. – Community & Growth</li>
            <li>👩‍💻 Tamara M. – Blockchain Dev</li>
          </ul>
        </Section>

        <Section title="🛒 How to Buy" color="text-purple-400">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Install Phantom or Backpack Wallet</li>
            <li>Fund with SOL</li>
            <li>Go to <a href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">Pump.fun</a></li>
            <li>Buy $TR6 and join the movement</li>
          </ol>
        </Section>
      </section>

      {/* CHART SECTION */}
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

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-fuchsia-800 text-sm text-white/60">
        © 2025 Trump6 Coin. Vice City energy. Not financial advice.
      </footer>
    </div>
  );
}

function Button({ href, onClick, children, color, icon, textColor = "text-white" }) {
  const classes = `bg-gradient-to-r ${color} ${textColor} px-6 py-2 font-semibold rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl border border-white/20`;

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

function Section({ title, color, children }) {
  return (
    <div>
      <h2 className={`text-3xl font-bold mb-4 ${color}`}>{title}</h2>
      <div className="text-white leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
