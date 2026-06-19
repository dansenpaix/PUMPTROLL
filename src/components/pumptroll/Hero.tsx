import { motion } from "framer-motion";
import mascot from "@/assets/pumpty1.png";
import { Tilt } from "./Tilt";
import { CABanner } from "./CABanner";
import { Rocket, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary" />
              Live on Solana
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The troll <br />
              that <span className="neon-text">pumps</span> back.
            </h1>
            <p className="mt-5 max-w-xl text-base text-foreground/70 sm:text-lg">
              PumpTroll is the chaotic-good meme coin built for degens who like their charts green
              and their vibes electric. Powered by the community, fueled by memes.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                id="buy"
                href="https://dexscreener.com/"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[oklch(0.86_0.27_142)] to-[oklch(0.6_0.3_305)] px-6 py-3.5 text-sm font-bold text-background shadow-[var(--shadow-neon-green)] transition hover:scale-[1.03]"
              >
                <Rocket size={18} /> Buy $PUMP
              </a>
              <a
                href="https://dexscreener.com/"
                target="_blank"
                className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-foreground transition hover:bg-white/10"
              >
                <TrendingUp size={18} /> Chart
              </a>
            </div>

            <div className="mt-8">
              <CABanner />
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 mx-auto h-[80%] w-[80%] translate-y-6 rounded-full bg-gradient-to-br from-[oklch(0.86_0.27_142/0.35)] to-[oklch(0.6_0.3_305/0.35)] blur-3xl" />
            <Tilt max={14} className="mx-auto w-full max-w-md">
              <motion.img
                src={mascot}
                alt="PumpTroll mascot"
                width={1024}
                height={1024}
                className="animate-float-slow w-full select-none drop-shadow-[0_0_60px_oklch(0.6_0.3_305/0.6)]"
                draggable={false}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
