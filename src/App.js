// App.js – Completely New Page Structure
import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* TOP BANNER */}
      <section className="relative bg-gradient-to-br from-purple-900 via-black to-fuchsia-800 text-center py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <img src={trumpImage} alt="Trump6 Logo" className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-white" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">TRUMP6</h1>
          <p className="text-xl text-white/90 max-w-xl mx-auto">
            Fast. Fearless. Community-Fueled. Built on Solana for true believers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump" text="Buy Now 💸" />
            <Button href="https://x.com/TRUMP62025" text="Twitter 🐦" />
            <Button href="https://t.me/TRUMP6Groupe" text="Telegram ✈️" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-20 max-w-6xl mx-auto text-center">
        <Feature title="0% TAX" description="No BS. Every dollar you invest is yours. Fair launch. No whales." />
        <Feature title="SOLANA SPEED" description="Powered by one of the fastest blockchains. Blazing transactions." />
        <Feature title="COMMUNITY FIRST" description="Built for the people, by the people. You hold the power." />
      </section>

      {/* STORY */}
      <section className="bg-zinc-900 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4">The Mission</h2>
          <p className="text-lg leading-relaxed text-white/90">
            Trump6 isn’t just another coin. It's a movement. Fueled by culture and rebellion, Trump6 redefines what it means to invest in a meme coin. Forget traditional finance – this is your digital territory.
          </p>
        </div>
      </section>

      {/* CHART */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-6">Live Price</h2>
        <div className="rounded-xl overflow-hidden border border-yellow-500 shadow-lg">
          <iframe
            src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
            style={{ width: "100%", height: "500px", border: "none" }}
            allowFullScreen
            title="Trump6 Chart"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-white/60 bg-black border-t border-white/10">
        © 2025 TRUMP6 – A Movement. Not financial advice.
      </footer>
    </div>
  );
}

function Button({ href, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
    >
      {text}
    </a>
  );
}

function Feature({ title, description }) {
  return (
    <div className="bg-white/10 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/80 text-base leading-relaxed">{description}</p>
    </div>
  );
}
