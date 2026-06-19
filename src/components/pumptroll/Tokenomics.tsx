import { Tilt } from "./Tilt";
import { Coins, Flame, Lock, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Coins, label: "Total Supply", value: "1,000,000,000", sub: "Fixed forever" },
  { icon: Flame, label: "LP Burned", value: "100%", sub: "Rug-proof" },
  { icon: Lock, label: "Tax", value: "0 / 0", sub: "No buy / sell tax" },
  { icon: Users, label: "Holders", value: "12,480+", sub: "And growing" },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            The numbers
          </p>
          <h2 className="text-4xl font-black sm:text-5xl">
            Built <span className="neon-text">fair</span>. Built loud.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
            >
              <Tilt max={8}>
                <div className="glass-strong group h-full rounded-2xl p-6 transition hover:border-primary/40">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.86_0.27_142/0.25)] to-[oklch(0.6_0.3_305/0.25)] text-primary">
                    <s.icon size={20} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                    {s.label}
                  </div>
                  <div className="mt-1 text-2xl font-black tracking-tight">{s.value}</div>
                  <div className="mt-1 text-sm text-foreground/60">{s.sub}</div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
