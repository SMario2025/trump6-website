import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div
      className="min-h-screen font-sans bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white text-lg md:text-xl"
    >
      <header className="flex flex-col items-center justify-center text-center p-6 md:p-10">
        <img
          src={trumpImage}
          alt="Trump6 Coin Logo"
          className="w-10 md:w-16 rounded-2xl shadow-xl mb-4 md:mb-6"
        />
        <h1 className="text-3xl md:text-6xl font-bold tracking-wide">
          Trump6 Coin
        </h1>
        <p className="text-base md:text-2xl mt-2 md:mt-4 max-w-xl mx-auto">
          Crypto meets politics – The revolution begins.
        </p>

        <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 flex-wrap justify-center">
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md transition-all text-sm md:text-base font-semibold"
          >
            Get Started
          </a>
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition-all text-sm md:text-base font-semibold"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition-all text-sm md:text-base font-semibold"
          >
            Twitter/X
          </a>
          <a
            href="https://pump.fun/coin/5T2kRTnXGGdfsjsY7zNMrhoVvXKWVFt8MRMVZDk7pump"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition-all text-sm md:text-base font-semibold"
          >
            Buy on Pump.fun
          </a>
        </div>
      </header>

      {/* --- ab hier bleibt dein Code exakt gleich --- */}

      <section className="px-4 md:px-20 py-8 md:py-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">About Trump6</h2>
        <p className="mb-4">
          Trump6 isn’t just another meme coin on the Solana blockchain – it’s a movement, a digital rebellion,
          and a brand with attitude, inspired by the relentless energy and underground vibe of GTA 6. In a world
          where countless cryptocurrencies vanish into obscurity, Trump6 positions itself as a community-driven
          coin that represents power, loyalty, and strategy.
        </p>
        {/* ... restlicher Inhalt bleibt unverändert ... */}
      </section>

      {/* DexScreener & Roadmap bleiben wie du sie hast */}

    </div>
  );
}

export default App;




