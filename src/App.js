import React, { useState } from "react";

function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      
      <section
        className="h-screen w-full bg-cover bg-center text-white flex flex-col justify-center items-center relative"
        style={{ backgroundImage: "url('/neon-city.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
      </section>

      
      {showChart && (
        <section className="bg-black py-12 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            $TRUMP6 Chart (DexScreener)
          </h2>
          <div className="w-full h-[600px] border-2 border-gray-700 rounded-xl overflow-hidden">
            <iframe
              src="https://dexscreener.com/solana/cmtfmtezkdec1hnmsgkfntqxsiazenj2vurvaytvzmee?embed=1"
              className="w-full h-full"
              allowFullScreen
              frameBorder="0"
              title="DexScreener Chart"
            />
          </div>
        </section>
      )}

      
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pink-500">
            Über Trump6
          </h2>
          <p className="text-xl md:text-xl text-white leading-loose">
            Trump6 ist mehr als ein Meme-Coin – es ist eine Bewegung. Inspiriert vom Vice City Vibe, bringt Trump6 die Crypto-Welt zurück
            zu Humor, Freiheit und Community Power. Keine Steuern. Keine Zentralisierung. Nur reiner Spaß mit einem Hauch Größenwahn.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎮", label: "GTA Meme-Vibes" },
              { icon: "🗽", label: "100% Community" },
              { icon: "🚫", label: "Kein Presale" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transform transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xl font-semibold tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      
      



<section className="bg-gray-950 text-white py-20 px-6 md:px-20 border-t border-gray-800">
  <div className="max-w-4xl mx-auto text-xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 text-center">
      🔥 Trump6 Manifest
    </h2>

    <p className="mb-6 text-white leading-loose">
      Trump6 isn’t just another meme coin on the Solana blockchain – it’s a movement, a digital rebellion, and a brand with attitude, inspired by the relentless energy and underground vibe of GTA 6. In a world where countless cryptocurrencies vanish into obscurity, Trump6 positions itself as a community-driven coin that represents power, loyalty, and strategy.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">What is Trump6?</h3>
    <p className="mb-6 text-white leading-loose">
      Trump6 is a decentralized Solana-based token that combines speed, ultra-low transaction fees, and the viral energy of meme culture. This isn’t just a token you buy and forget – it’s a ticket into a global community of degens and crypto rebels who are hunting for the next 100x play. Unlike short-lived meme coins, Trump6 is built on solid branding, a GTA 6-inspired aesthetic, and unstoppable social media hype, making it a project designed to thrive, not fade.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">The Vision of Trump6</h3>
    <p className="mb-6 text-white leading-loose">
      The mission behind Trump6 is to become a digital street empire, a cryptocurrency fueled not only by price action but by culture and community power. Trump6 is about owning the digital streets, just like the iconic characters of GTA dominate their world. Every holder is part of a larger movement, driven by the values of power, strategy, and loyalty.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">Why Trump6?</h3>
    <ul className="list-disc list-inside text-white mb-6 space-y-2">
      <li><strong>GTA 6 Energy:</strong> Bold, raw, and impossible to ignore.</li>
      <li><strong>Community First:</strong> Trump6 grows stronger with every holder, every meme, and every viral push.</li>
      <li><strong>Next-Gen Meme Coin:</strong> Built on Solana, leveraging the momentum of trending platforms like Pump.fun to go viral.</li>
      <li><strong>Rewards for Diamond Hands:</strong> With unique competitions (like the 1 million Trump6 holder challenge), loyal holders are always rewarded.</li>
    </ul>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">The Goal:</h3>
    <p className="mb-6 text-white leading-loose">
      Trump6 aims to rise as the top meme coin on Solana, while evolving into a viral brand that captures attention far beyond the crypto scene. Through FOMO-driven marketing, strategic social media presence, and targeted listings (CoinMarketCap, DexScreener, Raydium), Trump6 is on a clear path to dominate.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">The Bottom Line:</h3>
    <p className="text-white leading-loose">
      Trump6 is more than just a token – it’s a statement. By buying Trump6, you’re joining a cultural revolution, becoming part of a crew that thrives on hype, courage, and community strength. Trump6 is built for those who want to own the streets of Web3 and secure their spot in the next generation of crypto kings.
    </p>
  </div>
</section>

<section className="bg-black text-white py-20 px-6 md:px-20 border-t border-gray-800">
  <div className="max-w-4xl mx-auto text-xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 text-center">
      ⭐ What Makes Trump6 Special?
    </h2>

    <p className="mb-6 text-white leading-loose">
      In the crowded world of meme coins, countless projects come and go without leaving a mark. Trump6 stands out from the noise because it isn’t just another token—it’s a brand with character, story, and vision. Inspired by the raw energy and rebellious spirit of GTA 6, Trump6 introduces a new era of meme coins—bold, provocative, and unapologetically focused on success.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">1. GTA 6-Inspired Branding</h3>
    <p className="mb-6 text-white leading-loose">
      While most meme coins launch without a clear identity, Trump6 follows a consistent branding strategy. It channels the unique aesthetics and underground energy of GTA 6 to create a visual and emotional language that resonates. Every post, every meme, and every community action feels like part of a bigger, rebellious movement.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">2. Community-Driven Power</h3>
    <p className="mb-6 text-white leading-loose">
      The heart of Trump6 lies in its active and loyal community. Unlike coins that rely solely on short-term hype, Trump6 builds a strong foundation of dedicated holders. Through challenges, giveaways, and contests (like the “1 Million Trump6 Holder Reward”), the community is rewarded and constantly motivated to stay engaged. This strong bond ensures that Trump6 can sustain its momentum over time.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">3. FOMO Marketing and Social Media Push</h3>
    <p className="mb-6 text-white leading-loose">
      Trump6 understands how to create FOMO and virality. With aggressive X (Twitter) posts, viral TikTok clips, and GTA-style memes, the project constantly captures attention. The marketing approach is both strategic and bold, ensuring that traders can’t ignore Trump6 as it climbs the ranks of trending tokens.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">4. A Vision Beyond the Pump</h3>
    <p className="mb-6 text-white leading-loose">
      Trump6 is not your typical “pump and dump” meme coin. The goal is clear: to become the top meme coin on Solana while evolving into a cultural phenomenon. It’s not just about quick price spikes—it’s about building a recognizable brand with longevity and influence in the crypto world.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">5. Speed and Efficiency</h3>
    <p className="mb-6 text-white leading-loose">
      Built on the Solana blockchain, Trump6 benefits from ultra-fast and low-cost transactions, making it highly attractive for traders and investors who demand both speed and cost-effectiveness.
    </p>

    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">⸻</h3>
    <h3 className="text-2xl font-semibold tracking-wide text-pink-500 mb-2">The Bottom Line</h3>
    <p className="text-white leading-loose">
      Trump6 is special because it combines hype, branding, community power, and cutting-edge technology into one unique project. It stands for courage, loyalty, and the drive to dominate the “digital streets” of Web3.
    </p>
  </div>
</section>

      <section className="bg-black text-white py-20 px-6 md:px-20 text-center border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          🌐 Join the Trump6 Movement
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Werde Teil der Community und erlebe die Meme-Revolution!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://x.com/TRUMP62025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold tracking-wide shadow-lg hover:scale-105 transition flex items-center gap-2"
          >
            <span>🐦 Folge uns auf X</span>
          </a>
          <a
            href="https://t.me/TRUMP6Groupe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-full text-white font-semibold tracking-wide shadow-lg hover:scale-105 transition flex items-center gap-2"
          >
            <span>📢 Telegram-Gruppe</span>
          </a>
        </div>
      </section>

      
      <footer className="bg-black text-gray-500 py-10 text-center border-t border-gray-800">
        <p className="text-lg">Developed with ❤️ by</p>
        <p className="mt-2 text-xl font-semibold tracking-wide text-white">
          Pascal M · Stan R. · Tamara M.
        </p>
      </footer>
    </div>
  );
}

export default App;
