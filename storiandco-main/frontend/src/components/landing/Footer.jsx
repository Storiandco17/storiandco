import { Instagram } from "lucide-react";

const INSTAGRAM_URL =
  "https://www.instagram.com/storiandco?igsh=dDJueXZ3dHhyeHJr";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-obsidian hairline-t pt-16 pb-10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Status bar */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono-tech text-[10.5px] uppercase tracking-[0.28em] text-ink-muted mb-12">
          <span className="flex items-center gap-2">
            <span className="dot-pulse" />
            <span className="text-gold">SYSTEM STATUS: ONLINE</span>
          </span>
          <span>//</span>
          <span>DATA-DRIVEN</span>
          <span>//</span>
          <span>HUMAN-CENTRIC</span>
          <span>//</span>
          <span>PUNE, INDIA</span>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <p className="font-serif-display text-stark text-5xl md:text-6xl leading-[1.05]">
              Stori <span className="text-gold">&</span> Co.
            </p>
            <p className="mt-5 font-mono-tech text-[12px] text-ink max-w-[420px]">
              A studio-engine for legacy brands.
              Where high-art meets high-performance.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="font-tracker mb-4">NAVIGATE</p>
            <ul className="space-y-2 font-mono-tech text-[12px]">
              {[
                { id: "system", label: "The System" },
                { id: "process", label: "Process" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" },
              ].map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-ink hover:text-gold transition-colors"
                    data-testid={`footer-link-${l.id}`}
                  >
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="font-tracker mb-4">SIGNALS</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-3 font-mono-tech text-[12px] text-ink hover:text-gold transition-colors"
            >
              <Instagram size={16} strokeWidth={1.2} />
              @storiandco
            </a>
            <p className="mt-6 font-mono-tech text-[11.5px] text-ink-muted">
              hello<span className="text-gold">@</span>storiandco.in
            </p>
          </div>
        </div>

        <div className="mt-16 hairline-t pt-6 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-[10.5px] tracking-[0.24em] uppercase text-ink-muted">
          <span>© {new Date().getFullYear()} Stori & Co. — All rights reserved.</span>
          <span>Built as an operating system.</span>
        </div>
      </div>
    </footer>
  );
}
