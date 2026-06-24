import { motion } from "framer-motion";
import { Heart, Repeat2, MessageCircle } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.81l-4.71-6.16L4.8 22H2l7.02-8.02L2 2h6.92l4.27 5.66L18.244 2Zm-1.19 18h1.83L7.05 4H5.12l11.934 16Z" />
  </svg>
);

const tweets = [
  {
    name: "Pump Troll",
    handle: "@Pump_Troll",
    time: "Jun 14",
    text: `Huge Shout-out to everyone who Showed up today ! 
The Swamp Saw you, The Swamp appreciates you. 
Rest up Friends 💚🧌 

#cryptolife #Solana`,
    likes: "15",
    rts: "1",
    replies: "6",
  },
  {
    name: "Pump Troll",
    handle: "@Pump_Troll",
    time: "Jun 11",
    text: `They're Stressing, selling at loss and getting frustrated . 
PumpTroll remains calm eating Popcorn, the Swamp saw it coming🧌. 
Stay Ahead, Stay unbothered 💚 

#CryptoAlpha #solan`,
    likes: "15",
    rts: "0",
    replies: "7",
  },
  {
    name: "Pump Troll",
    handle: "@Pump_Troll",
    time: "Jun 1",
    text: `🔥 PUMP TROLL COMPETITION IS LIVE 🔥

The swamp is open… and we’re giving away 1 SOL total to the best trolls in the community.

🏆 Winner 1: Most Engagement Points
🏆 Winner 2: Best Meme by TODDY

Make the swamp proud! 🧌🔥`,
    likes: "57",
    rts: "12",
    replies: "20",
  },
  {
    name: "Pump Troll",
    handle: "@Pump_Troll",
    time: "May 23",
    text: `Noise gets filtered.
Builders enter.
The swamp is building. 
Token launch soon 🧌🟢

#PumpTroll #PumpSquad`,
    likes: "13",
    rts: "1",
    replies: "4",
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
              <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed text-foreground/90">{t.text}</p>
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
