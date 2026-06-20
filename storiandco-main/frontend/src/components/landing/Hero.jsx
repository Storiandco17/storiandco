const LOGO_BASE = "/assets/logo";

const SERVICES_TAGLINE = [
  "BRAND DESIGN",
  "DIGITAL POSITIONING",
  "PAID ADS",
  "WEB BUILD",
  "VISUAL PRODUCTIONS",
];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      aria-label="Hero — Stori and Co. introduction"
      className="relative bg-obsidian min-h-[100svh] overflow-hidden flex flex-col"
    >
      {/* 1. Atmospheric Lighting: Environmental vignette replacing the hard circle */}
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

      {/* Main content - Massive negative space scaling */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 md:px-10 py-20">
        
        {/* 2. Elevated Crest: Scaled down but luminosity increased via drop-shadow */}
        <div data-reveal className="reveal mb-8" style={{ transitionDelay: "120ms" }}>
          <picture>
            <source type="image/webp" srcSet={`${LOGO_BASE}-480.webp`} />
            <img
              src={`${LOGO_BASE}-480.png`}
              alt="Stori & Co crest"
              width={120}
              height={80}
              className="mx-auto w-[80px] md:w-[100px] h-auto select-none transition-all duration-700 drop-shadow-[0_0_12px_rgba(197,162,107,0.4)] hover:drop-shadow-[0_0_24px_rgba(197,162,107,0.8)] cursor-default"
              draggable={false}
            />
          </picture>
        </div>

        {/* 3. The Editorial Eyebrow: Minimalist framing replacing the tech-bro slash */}
        <p data-reveal className="reveal font-tracker text-gold mb-6 md:mb-10 flex items-center justify-center gap-4" data-testid="hero-eyebrow">
          <span className="w-6 h-[1px] bg-gold/40"></span>
          A STUDIO-ENGINE FOR LEGACY BRANDS
          <span className="w-6 h-[1px] bg-gold/40"></span>
        </p>

        {/* 4. Macro-Typography: Viewport width sizing to physically command screen real estate */}
        <h1
          data-reveal
          data-testid="hero-tagline"
          className="reveal font-serif-display text-stark text-5xl md:text-[6vw] lg:text-[7.5vw] leading-[0.95] max-w-[1400px] tracking-tight mb-8 md:mb-12"
          style={{ transitionDelay: "240ms" }}
        >
          Where <span className="text-gold italic">High-Art</span> Meets <br className="hidden md:block"/>
          <em className="not-italic text-silver">High-Performance.</em>
        </h1>

        {/* 5. Token Correction: Utilizing your custom ink-muted variable */}
        <p
          data-reveal
          data-testid="hero-subheadline"
          className="reveal max-w-[580px] font-mono-tech text-sm md:text-base leading-[1.8] text-ink-muted mb-16"
          style={{ transitionDelay: "360ms" }}
        >
          Luxury is no longer just an image; it is an operating system.
          We architect legacy brands for fashion, beauty, and lifestyle businesses.
        </p>

        {/* CTAs */}
        <div data-reveal className="reveal flex flex-col sm:flex-row items-center gap-6" style={{ transitionDelay: "480ms" }}>
          <a href="#contact" data-testid="hero-cta-book" className="btn-gold">
            Book Consultation <span aria-hidden>↗</span>
          </a>
          <a href="#system" data-testid="hero-cta-explore" className="btn-ghost">
            Explore the System
          </a>
        </div>
      </div>

      {/* Services strip - Structural framing pulled out of the center stack */}
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
          <span className="font-tracker text-[9px] text-ink-muted">SCROLL</span>
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
