const X = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.81l-4.71-6.16L4.8 22H2l7.02-8.02L2 2h6.92l4.27 5.66L18.244 2Zm-1.19 18h1.83L7.05 4H5.12l11.934 16Z" />
  </svg>
);
const Telegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
);
const Youtube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);
const Dex = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
    <path d="M3 17l5-5 4 4 8-9" />
    <path d="M14 7h6v6" />
  </svg>
);

const socials = [
  { label: "X", href: "https://x.com/Pump_Troll", Icon: X },
  { label: "Telegram", href: "https://t.me/Pump_Troll", Icon: Telegram },
  { label: "YouTube", href: "https://www.youtube.com/@Pump_Troll/", Icon: Youtube },
  { label: "Dexscreener", href: "https://dexscreener.com/", Icon: Dex },
];

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-2xl font-black tracking-tight">
              PUMP<span className="neon-text">TROLL</span>
            </div>
            <p className="mt-2 max-w-md text-sm text-foreground/55">
              Not financial advice. Definitely meme advice. DYOR or get rugged by your own
              optimism.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-foreground/70 transition hover:border-primary/50 hover:text-primary hover:shadow-[0_0_24px_oklch(0.86_0.27_142/0.45)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-foreground/40 sm:flex-row">
          <span>© {new Date().getFullYear()} PumpTroll. Trolled with love.</span>
          <span>Built for the chain. Powered by chaos.</span>
        </div>
      </div>
    </footer>
  );
}
