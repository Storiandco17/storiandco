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
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />

      <div
        aria-hidden
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(197,162,107,0.12) 0%, rgba(197,162,107,0.03) 50%, transparent 80%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 pt-[110px]">
        <div className="flex items-center justify-between hairline-b pb-4">
          <div className="flex items-center gap-3">
            <span className="dot-pulse" />
            <span className="font-tracker">SYSTEM // ONLINE</span>
          </div>
          <span className="font-tracker hidden sm:block">EST. STUDIO-ENGINE / PUNE — IN</span>
          <span className="font-tracker">VER 01.0</span>
        </div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 pt-[60px] md:pt-[80px] pb-[120px] flex flex-col items-center text-center">
        <p className="reveal font-tracker mb-8">
          // 001 — A STUDIO-ENGINE FOR LEGACY BRANDS
        </p>

        <div className="reveal mb-12" style={{ transitionDelay: "120ms" }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${LOGO_BASE}-480.webp 480w, ${LOGO_BASE}-760.webp 760w, ${LOGO_BASE}-1140.webp 1140w`}
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
            />
            <img
              src={`${LOGO_BASE}-760.png`}
              alt="Stori & Co luxury marketing agency logo"
              className="mx-auto w-[260px] sm:w-[320px] md:w-[380px] h-auto select-none"
            />
          </picture>
        </div>

        <h1
          className="reveal font-serif-display text-stark text-3xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-[920px] mb-10 w-full px-4 text-center"
          style={{ transitionDelay: "240ms" }}
        >
          Where <span className="text-gold">High-Art</span> Meets{" "}
          <em className="not-italic">High-Performance.</em>
        </h1>

        <p
          className="reveal max-w-[640px] font-mono-tech text-[15px] leading-relaxed text-slate-400 tracking-wide px-4"
          style={{ transitionDelay: "360ms" }}
        >
          Luxury is no longer just an image; it is an operating system.
          We architect legacy brands for fashion, beauty and lifestyle
          businesses.
        </p>

        <div className="reveal mt-16 w-full max-w-[920px]" style={{ transitionDelay: "480ms" }}>
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

        <div className="reveal mt-12 flex flex-col sm:flex-row items-center gap-4" style={{ transitionDelay: "600ms" }}>
          <a href="#contact" className="btn-gold">Book Consultation ↗</a>
          <a href="#system" className="btn-ghost">Explore the System</a>
        </div>
      </div>
    </section>
  );
}
