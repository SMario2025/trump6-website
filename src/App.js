import React from "react";
import "./App.css";
import trumpImage from "./assets/trump6.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-gray-300 font-inter antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img
            src={trumpImage}
            alt="Trump6 Coin Logo"
            className="w-14 md:w-20 rounded-lg shadow-lg"
          />
          <ul className="hidden md:flex space-x-10 font-semibold text-gray-300">
            <li>
              <a href="#about" className="hover:text-pink-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="hover:text-pink-500 transition">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-pink-500 transition">
                Team
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-pink-500 transition">
                Roadmap
              </a>
            </li>
          </ul>
          <button
            onClick={() => window.open("https://x.com/TRUMP62025", "_blank")}
            className="hidden md:inline-block bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-2 rounded-full font-bold shadow-lg"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 max-w-3xl mx-auto">
        <img
          src={trumpImage}
          alt="Trump6 Coin Logo"
          className="w-28 md:w-40 rounded-2xl shadow-xl mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Trump6 Coin
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-xl mx-auto mb-6 drop-shadow">
          Crypto meets politics – The revolution begins.
        </p>
        <button
          onClick={() => window.open("https://x.com/TRUMP62025", "_blank")}
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold shadow-lg transition"
        >
          Get Started
        </button>
        <div className="flex gap-6 mt-8">
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-shadow shadow"
          >
            Telegram
          </a>
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-shadow shadow"
          >
            Twitter/X
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-6 md:px-0 py-12 border-t border-gray-700"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Trump6
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-5 text-center max-w-3xl mx-auto">
          Trump6 – A Meme Coin With a Mission
        </h3>
        <p className="text-lg mb-5 max-w-3xl mx-auto leading-relaxed">
          Trump6 is more than just a token — it’s a cultural movement born from
          the boldness of the digital age. Built on the speed and freedom of the
          Solana blockchain, Trump6 represents strength, humor, and rebellion
          in one coin.
        </p>
        <p className="text-lg mb-5 max-w-3xl mx-auto leading-relaxed">
          No taxes. No VC control. 100% community.
        </p>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you're here to hold, trade, meme, or lead, Trump6 gives you
          the power to own your place in crypto history. Join the revolution.
          Make memes great again.
        </p>
      </section>

      {/* TOKENOMICS */}
      <section
        id="tokenomics"
        className="max-w-4xl mx-auto px-6 md:px-0 py-12 border-t border-gray-700 bg-black/30 rounded-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Tokenomics
        </h2>
        <ul className="text-lg space-y-3 list-disc list-inside max-w-xl mx-auto leading-relaxed">
          <li>Total Supply: 1,000,000,000</li>
          <li>0% Taxes – fair and free</li>
          <li>100% Community Driven</li>
          <li>Deployed on Solana</li>
        </ul>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="max-w-5xl mx-auto px-6 md:px-0 py-12 border-t border-gray-700"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { name: "Pascal M.", role: "Project Lead" },
            { name: "Stan R.", role: "Community & Growth" },
            { name: "Tamara M.", role: "Blockchain Developer" },
          ].map(({ name, role }) => (
            <div
              key={name}
              className="bg-white/10 p-8 rounded-xl shadow-lg hover:scale-[1.05] transition-transform"
            >
              <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-pink-500 select-none">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-xl font-semibold mb-1">{name}</h3>
              <p className="text-gray-300">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section
        id="roadmap"
        className="max-w-4xl mx-auto px-6 md:px-0 py-12 border-t border-gray-700"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Roadmap
        </h2>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily: "inherit",
            color: "#d1d5db",
            textShadow: "1px 1px 2px black",
            maxWidth: "700px",
            margin: "0 auto",
          }}
          className="text-lg leading-relaxed"
        >
          {`
🎮 TRUMP6 Roadmap 🚀

Phase 1: Loading the Game 💾🔥
- Launch TRUMP6 on Solana blockchain
- Activate Website & Socials (X 🐦, Telegram ✈️, Discord 🕹️)
- Build the Community & Launch Meme Campaigns
- DEX Listing (Dex Screener, Birdeye, etc.)
- Hype Push with Influencer Collabs & Twitter Raids

Phase 2: Entering Vice Mode 🌴🚗
- Trend on Crypto Twitter & Meme Pages
- Partner with GTA-themed/Narrative Projects & Influencers
- Drop the first GTA-Trump NFT Series
- Target Tier 2 & 3 CEX Listings
- Deeper Integrations with Solana Ecosystem Tools

Phase 3: Unlocking Real Utility 🔓💰
- Trump6 Mission Hub (Daily Meme Quests for $TR6 rewards)
- TRUMP6 Merch Store – Pay with $TR6
- Collaborations with Pop Culture Creators & Gaming Brands
- Launch AI Meme Generator
- Push Real-World Use Cases & IRL Events

Phase 4: The Final Heist – Global Takeover 🌍🕶️
- Listings on Major CEXs (Tier 1 Exchanges)
- TRUMP6 Metaverse Strip – Interactive GTA-style Hangout Zone
- Web3 Gaming Integrations & NFT Avatars
- AI-Driven GTA Lore Engine
- Long-term Community Growth & Meme Sustainability Plan

🚀 The Revolution Has Just Started
          `}
        </pre>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-700 text-center py-6 text-sm text-gray-500 select-none">
        © 2025 Trump6 Coin. For entertainment purposes only. Not financial advice.
      </footer>
    </div>
  );
}

export default App;

