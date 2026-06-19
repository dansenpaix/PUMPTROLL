import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CA = "7xPuMpTr0LLxxxx7xPuMpTr0LLxxxx7xPuMpTr0LLxx";

export function CABanner() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      toast.success("Contract address copied", {
        description: "Ready to paste into your wallet.",
      });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy. Try again.");
    }
  };

  return (
    <div className="neon-border animate-pulse-glow w-full rounded-2xl p-[1px]">
      <button
        onClick={copy}
        className="group flex w-full items-center gap-3 rounded-2xl bg-[oklch(0.13_0.02_270/0.85)] px-4 py-3 text-left transition sm:px-5"
      >
        <span className="hidden text-xs font-bold uppercase tracking-widest text-primary sm:inline">
          CA
        </span>
        <span className="grid grid-cols-[minmax(0,1fr)_auto] flex-1 items-center gap-3 min-w-0">
          <code className="truncate font-mono text-xs text-foreground/90 sm:text-sm">{CA}</code>
          <span className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.86_0.27_142)] to-[oklch(0.6_0.3_305)] px-3 py-1.5 text-xs font-bold text-background sm:text-sm">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </span>
        </span>
      </button>
    </div>
  );
}
