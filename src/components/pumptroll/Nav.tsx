import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#media", label: "Media" },
  { href: "#community", label: "Community" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.86_0.27_142)] to-[oklch(0.6_0.3_305)] text-background font-black shadow-[var(--shadow-neon-green)]">
              P
            </span>
            <span className="text-lg font-black tracking-tight">
              PUMP<span className="neon-text">TROLL</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/5 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://dexscreener.com/"
              target="_blank"
              className="ml-2 rounded-xl bg-gradient-to-r from-[oklch(0.86_0.27_142)] to-[oklch(0.6_0.3_305)] px-4 py-2 text-sm font-bold text-background shadow-[0_0_24px_oklch(0.86_0.27_142/0.5)] transition hover:scale-[1.03]"
            >
              Buy $PUMP
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-white/5 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://dexscreener.com/"
                target="_blank"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-gradient-to-r from-[oklch(0.86_0.27_142)] to-[oklch(0.6_0.3_305)] px-4 py-3 text-center text-sm font-bold text-background"
              >
                Buy $PUMP
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
