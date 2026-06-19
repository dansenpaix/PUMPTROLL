import { motion } from "framer-motion";
import { Heart, Repeat2, MessageCircle } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.81l-4.71-6.16L4.8 22H2l7.02-8.02L2 2h6.92l4.27 5.66L18.244 2Zm-1.19 18h1.83L7.05 4H5.12l11.934 16Z" />
  </svg>
);

const tweets = [
  {
    name: "Crypto Owl",
    handle: "@cryptoowl",
    time: "2h",
    text: "$PUMP holders eating GOOD tonight. Chart looks like a staircase to Valhalla. 🟢🟣",
    likes: "1.2K",
    rts: "284",
    replies: "94",
  },
  {
    name: "Degen Diary",
    handle: "@degendiary",
    time: "5h",
    text: "Community of PumpTroll might be the most unhinged on Solana right now. And I mean that as a compliment.",
    likes: "3.4K",
    rts: "612",
    replies: "210",
  },
  {
    name: "Neon Trader",
    handle: "@neontrader",
    time: "1d",
    text: "Bought $PUMP. Slept. Woke up. Still bullish. Some things just write themselves.",
    likes: "892",
    rts: "143",
    replies: "57",
  },
  {
    name: "Meme Mage",
    handle: "@mememage",
    time: "1d",
    text: "PumpTroll mascot is the best art a meme coin has had since 2021. Fight me.",
    likes: "2.1K",
    rts: "318",
    replies: "128",
  },
];

export function Tweets() {
  return (
    <section id="community" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            From the timeline
          </p>
          <h2 className="text-4xl font-black sm:text-5xl">
            What the <span className="neon-text">degens</span> are saying.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {tweets.map((t, i) => (
            <motion.article
              key={t.handle + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-strong rounded-2xl p-5 transition hover:border-primary/30"
            >
              <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.86_0.27_142)] to-[oklch(0.6_0.3_305)] text-background font-black">
                  {t.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-bold">{t.name}</div>
                  <div className="truncate text-sm text-foreground/55">
                    {t.handle} · {t.time}
                  </div>
                </div>
                <span className="shrink-0 text-foreground/70">
                  <XIcon />
                </span>
              </header>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">{t.text}</p>
              <footer className="mt-4 flex items-center gap-6 text-sm text-foreground/55">
                <span className="flex items-center gap-1.5 hover:text-primary transition">
                  <MessageCircle size={15} /> {t.replies}
                </span>
                <span className="flex items-center gap-1.5 hover:text-primary transition">
                  <Repeat2 size={15} /> {t.rts}
                </span>
                <span className="flex items-center gap-1.5 hover:text-secondary transition">
                  <Heart size={15} /> {t.likes}
                </span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
