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
      className="relative bg-grain min-h-[100svh] overflow-hidden"
    >
      {/* blueprint grid layer */}
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />

      {/* gold radial glow behind logo */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(197,162,107,0.18) 0%, rgba(197,162,107,0.06) 35%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Top meta bar */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 pt-[110px]">
        <div className="flex items-center justify-between hairline-b pb-4">
          <div className="flex items-center gap-3">
            <span className="dot-pulse" />
            <span className="font-tracker">SYSTEM // ONLINE</span>
          </div>
          <span className="font-tracker hidden sm:block">EST. STUDIO-ENGINE / PUNE — IN</span>
          
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 pt-[60px] md:pt-[80px] pb-[120px] flex flex-col items-center text-center">
        <p
          data-reveal
          className="reveal font-tracker mb-8"
          data-testid="hero-eyebrow"
        >
          // 001 — A STUDIO-ENGINE FOR LEGACY BRANDS
        </p>

        <div
          data-reveal
          className="reveal mb-10"
          style={{ transitionDelay: "120ms" }}
        >
          <picture>
            <source
              type="image/webp"
              srcSet={`${LOGO_BASE}-480.webp 480w, ${LOGO_BASE}-760.webp 760w, ${LOGO_BASE}-1140.webp 1140w`}
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
            />
            <img
              src={`${LOGO_BASE}-760.png`}
              srcSet={`${LOGO_BASE}-480.png 480w, ${LOGO_BASE}-760.png 760w, ${LOGO_BASE}-1140.png 1140w`}
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
              alt="Stori & Co luxury marketing agency logo with monogram"
              width={760}
              height={507}
              decoding="async"
              fetchPriority="high"
              data-testid="hero-logo"
              className="mx-auto w-[260px] sm:w-[320px] md:w-[380px] h-auto select-none"
              draggable={false}
            />
          </picture>
        </div>

        <h1
          data-reveal
          data-testid="hero-tagline"
          className="reveal font-serif-display text-stark text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-[920px]"
          style={{ transitionDelay: "240ms" }}
        >
          Where <span className="text-gold">High-Art</span> Meets{" "}
          <em className="not-italic">High-Performance.</em>
        </h1>

        <p
          data-reveal
          data-testid="hero-subheadline"
          className="reveal mt-8 max-w-[640px] font-mono-tech text-[13px] md:text-[14px] leading-relaxed text-ink"
          style={{ transitionDelay: "360ms" }}
        >
          Luxury is no longer just an image; it is an operating system.
          We architect legacy brands for fashion, beauty and lifestyle
          businesses.
        </p>

        {/* Services strip */}
        <div
          data-reveal
          className="reveal mt-12 w-full max-w-[920px]"
          style={{ transitionDelay: "480ms" }}
        >
          <div className="hairline-t hairline-b py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10.5px] md:text-[11px] font-mono-tech uppercase tracking-[0.28em] text-silver">
              {SERVICES_TAGLINE.map((s, i) => (
                <span key={s} className="flex items-center gap-6">
                  <span>{s}</span>
                  {i < SERVICES_TAGLINE.length - 1 && (
                    <span className="text-gold">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          data-reveal
          className="reveal mt-12 flex flex-col sm:flex-row items-center gap-4"
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="#contact"
            data-testid="hero-cta-book"
            className="btn-gold"
          >
            Book Consultation
            <span aria-hidden>↗</span>
          </a>
          <a
            href="#system"
            data-testid="hero-cta-explore"
            className="btn-ghost"
          >
            Explore the System
          </a>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2">
      
          <span className="block w-px h-10 bg-silver-dim relative overflow-hidden">
            <span
              className="absolute left-0 top-0 w-px h-4 bg-gold"
              style={{ animation: "scrollCue 2.2s ease-in-out infinite" }}
            />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollCue {
          0% { transform: translateY(-100%); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(160%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
