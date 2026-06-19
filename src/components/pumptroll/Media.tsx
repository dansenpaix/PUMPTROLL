import { Play, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tilt } from "./Tilt";

const videos = [
  { id: "zKVcJeS-acw", title: "Meme Comp: Full Swamp Mode", channel: "@Pump_Troll" },
  { id: "UL92qsx-y0A", title: "Just Wants The Candles To Breathe", channel: "@Pump_Troll" },
  { id: "Kryd402o3Pw", title: "Pump Troll Picks The World Cup Winner", channel: "@Pump_Troll" },
];

export function Media() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="media" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Media & Buzz
          </p>
          <h2 className="text-4xl font-black sm:text-5xl">
            The troll is <span className="neon-text">trending</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <motion.button
              key={v.id}
              onClick={() => setActive(v.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group text-left"
            >
              <Tilt max={10}>
                <div className="glass-strong overflow-hidden rounded-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.86_0.27_142)] to-[oklch(0.6_0.3_305)] text-background shadow-[var(--shadow-neon-green)] transition group-hover:scale-110">
                        <Play size={26} fill="currentColor" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {v.channel}
                    </div>
                    <div className="mt-1 font-bold leading-snug">{v.title}</div>
                  </div>
                </div>
              </Tilt>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="neon-border relative w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground transition hover:bg-background"
              >
                <X size={18} />
              </button>
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${active}?autoplay=1`}
                  title="Video player"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
