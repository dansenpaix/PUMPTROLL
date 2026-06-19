import { createFileRoute } from "@tanstack/react-router";
import { ParticleBg } from "@/components/pumptroll/ParticleBg";
import { Nav } from "@/components/pumptroll/Nav";
import { Hero } from "@/components/pumptroll/Hero";
import { About } from "@/components/pumptroll/About";
import { Tokenomics } from "@/components/pumptroll/Tokenomics";
import { Media } from "@/components/pumptroll/Media";
import { Tweets } from "@/components/pumptroll/Tweets";
import { Footer } from "@/components/pumptroll/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PumpTroll — The troll that pumps back" },
      {
        name: "description",
        content:
          "PumpTroll is the chaotic-good meme coin on Solana. Neon vibes, locked liquidity, and a community that trolls together pumps together.",
      },
      { property: "og:title", content: "PumpTroll — The troll that pumps back" },
      {
        property: "og:description",
        content: "Cyber-neon meme coin powered by community chaos.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBg />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Tokenomics />
          <Media />
          <Tweets />
        </main>
        <Footer />
      </div>
    </div>
  );
}
