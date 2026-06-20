import React, { useEffect } from "react";

const LOGO_BASE = "/assets/logo";

const SERVICES_TAGLINE = [
  "BRAND DESIGN",
  "DIGITAL POSITIONING",
  "PAID ADS",
  "WEB BUILD",
  "VISUAL PRODUCTIONS",
];

export default function Hero() {
  
  // THE FIX: This triggers your CSS reveal animations on load so the screen isn't blank
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => el.classList.add('is-visible'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      data-testid="hero-section"
      aria-label="Hero — Stori and Co. introduction"
      className="relative bg-obsidian min-h-[100svh] overflow-hidden flex flex-col"
    >
      {/* Atmospheric Lighting */}
      <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-blueprint opacity-[0.15] pointer-events-none z-0" />
      <div
        aria-hidden
        className="absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[100vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(197,162,107,0.08) 0%, rgba(10,10,10,0) 60%)",
        }}
      />

      {/* Top meta bar */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-8 md:pt-12">
        <div className="flex items-center justify-between hairline-b pb-6">
          <div className="flex items-center gap-4">
            <span className="dot-pulse" />
            <span className="font-tracker">SYSTEM // ONLINE</span>
          </div>
          <span className="font-tracker hidden md:block text-ink-muted">EST. STUDIO-ENGINE / PUNE — IN</span>
          <span className="font-tracker">VER 01.0</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 md:px-10 py-20">
        
        {/* Restored Full-Size Logo with Soft Spotlight Highlight */}
        <div className="reveal mb-12 relative flex justify-center" style={{ transitionDelay: "120ms" }}>
          {/* Wider spotlight to accommodate the larger logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-gold opacity-10 blur-3xl rounded-[100%] pointer-events-none"></div>
          
          <picture className="relative z-10">
            <source
              type="image/webp"
              srcSet={`${LOGO_BASE}-480.webp 480w, ${LOGO_BASE}-760.webp 760w, ${LOGO_BASE}-1140.webp 1140w`}
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
            />
            <img
              src={`${LOGO_BASE}-760.png`}
              alt="Stori & Co luxury marketing agency logo"
              className="mx-auto w-[260px] sm:w-[320px] md:w-[380px] h-auto select-none drop-shadow-[0_0_15px_rgba(197,162,107,0.3)] transition-transform duration-700 hover:scale-[1.02]"
              draggable={false}
            />
          </picture>
        </div>

        {/* The Editorial Eyebrow */}
        <p className="reveal font-tracker text-gold mb-6 md:mb-10 flex items-center justify-center gap-4" data-testid="hero-eyebrow">
          <span className="w-6 h-[1px] bg-gold/40"></span>
          A STUDIO-ENGINE FOR LEGACY BRANDS
          <span className="w-6 h-[1px] bg-gold/40"></span>
        </p>

        {/* Macro-Typography */}
        <h1
          data-testid="hero-tagline"
          className="reveal font-serif-display text-stark text-5xl md:text-[6vw] lg:text-[7.5vw] leading-[0.95] max-w-[1400px] tracking-tight mb-8 md:mb-12"
          style={{ transitionDelay: "240ms" }}
        >
          Where <span className="text-gold italic">High-Art</span> Meets <br className="hidden md:block"/>
          <em className="not-italic text-silver">High-Performance.</em>
        </h1>

        {/* Subheadline (Corrected text color) */}
        <p
          data-testid="hero-subheadline"
          className="reveal max-w-[580px] font-mono-tech text-sm md:text-base leading-[1.8] text-ink-muted mb-16"
          style={{ transitionDelay: "360ms" }}
        >
          Luxury is no longer just an image; it is an operating system.
          We architect legacy brands for fashion, beauty, and lifestyle businesses.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row items-center gap-6" style={{ transitionDelay: "480ms" }}>
          <a href="#contact" data-testid="hero-cta-book" className="btn-gold">
            Book Consultation <span aria-hidden>↗</span>
          </a>
          <a href="#system" data-testid="hero-cta-explore" className="btn-ghost">
            Explore the System
          </a>
        </div>
      </div>

      {/* Services strip */}
      <div className="relative z-10 w-full hairline-t bg-obsidian/50 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto py-5 px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] md:text-xs font-mono-tech uppercase tracking-[0.3em] text-silver-line-strong">
            {SERVICES_TAGLINE.map((s, i) => (
              <span key={s} className="flex items-center gap-8">
                <span className="text-ink hover:text-gold transition-colors duration-300">{s}</span>
                {i < SERVICES_TAGLINE.length - 1 && (
                  <span className="text-gold/30">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-24 left-0 right-0 z-10 flex justify-center pointer-events-none hidden md:flex">
        <div className="flex flex-col items-center gap-3 opacity-50">
         
          <span className="block w-px h-12 bg-silver-line relative overflow-hidden">
            <span
              className="absolute left-0 top-0 w-px h-4 bg-gold"
              style={{ animation: "scrollCue 2s cubic-bezier(0.6, 0.05, 0.28, 0.91) infinite" }}
            />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollCue {
          0% { transform: translateY(-100%); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
