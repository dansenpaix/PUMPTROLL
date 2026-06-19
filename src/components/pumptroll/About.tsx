import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Pure meme energy",
    body: "No utility cosplay. PumpTroll is a meme, and that's the whole point. Vibes first, charts second.",
  },
  {
    icon: Zap,
    title: "Solana-fast",
    body: "Sub-second swaps, fractions of a cent in fees. Trolling has never moved this fast.",
  },
  {
    icon: ShieldCheck,
    title: "Locked & loaded",
    body: "Liquidity burned. Contract renounced. The only thing centralized here is the chaos.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              About PumpTroll
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              A meme with <span className="neon-text">teeth</span>.
            </h2>
            <p className="mt-5 text-foreground/70">
              Born from a Telegram raid, raised by the timeline, PumpTroll is what happens when a
              community refuses to take itself seriously, then accidentally builds something real.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.86_0.27_142/0.3)] to-[oklch(0.6_0.3_305/0.3)] text-primary">
                  <it.icon size={18} />
                </div>
                <div className="font-bold">{it.title}</div>
                <p className="mt-1 text-sm text-foreground/65">{it.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
