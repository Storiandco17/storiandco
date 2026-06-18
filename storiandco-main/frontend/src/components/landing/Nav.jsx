import { useEffect, useState } from "react";

const LINKS = [
  { id: "system", label: "The System" },
  { id: "process", label: "Process" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(10,10,10,0.7)] hairline-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="font-tracker text-[10px]">[ S/C ]</span>
          <span className="font-serif-display text-[18px] tracking-wide text-silver group-hover:text-gold transition-colors">
            Stori <span className="text-gold">&</span> Co.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-testid={`nav-link-${l.id}`}
              className="font-mono-tech text-[11px] uppercase tracking-[0.32em] text-ink hover:text-gold transition-colors duration-300 py-3 inline-flex items-center min-h-[44px]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-cta-consult"
          aria-label="Book a consultation"
          className="hidden md:inline-flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.32em] text-gold hover:text-stark transition-colors border-b-[0.5px] border-gold pb-1 min-h-[44px]"
        >
          Book Consultation
          <span aria-hidden>→</span>
        </a>

        {/* Mobile: simple CTA arrow */}
        <a
          href="#contact"
          data-testid="nav-cta-consult-mobile"
          className="md:hidden font-mono-tech text-[10px] uppercase tracking-[0.28em] text-gold"
        >
          Consult →
        </a>
      </div>
    </header>
  );
}
