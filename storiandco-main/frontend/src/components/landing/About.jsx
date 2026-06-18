const PILLARS = [
  { k: "01", t: "Creative Direction", d: "High-end aesthetics, considered systems, editorial precision." },
  { k: "02", t: "Surgical Implementation", d: "Performance engineering, conversion architecture, measurable lift." },
  { k: "03", t: "Human Intelligence", d: "No blind automation. Strategy authored by people, scaled by code." },
];

export default function About() {
  return (
    <section
      id="system"
      data-testid="about-section"
      aria-labelledby="about-heading"
      className="relative bg-obsidian py-28 md:py-36"
    >
      {/* faint blueprint */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        {/* section header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <p className="font-tracker" data-testid="about-section-tag">
              // 002 — MANIFESTO
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              id="about-heading"
              data-reveal
              className="reveal font-wide-caps text-stark text-[13px] md:text-[15px]"
              data-testid="about-section-title"
            >
              The System / Who We Are
            </h2>
          </div>
        </div>

        {/* Manifesto copy */}
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div
            data-reveal
            className="reveal col-span-12 md:col-span-7"
          >
            <p className="font-serif-display text-stark text-3xl md:text-[44px] leading-[1.15]">
              Stori <span className="text-gold">&</span> Co. is a specialized
              studio-engine that combines high-end creative direction with
              surgical technical implementation.
            </p>

            <div className="mt-10 space-y-6 font-mono-tech text-[13px] md:text-[14px] leading-relaxed text-ink">
              <p>
                We build high-performance brand identities for fashion,
                lifestyle, and beauty startups. Through strategic creative
                direction and surgical technical implementation, we create
                conversion ecosystems where prestige meets precision—brands
                that feel premium and drive measurable revenue.
              </p>
              <p className="hairline-t pt-6">
                <span className="text-gold font-wide-caps text-[11px] mr-3">
                  Philosophy /
                </span>
                No shouting. No blind automation. Just strategic systems
                that scale businesses meaningfully.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div
            data-reveal
            className="reveal col-span-12 md:col-span-5"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="hairline corners p-6 md:p-8 relative">
              <span className="c-bl" /><span className="c-br" />
              <p className="font-tracker mb-6">OPERATING PILLARS</p>

              <ul className="space-y-6">
                {PILLARS.map((p) => (
                  <li
                    key={p.k}
                    className="grid grid-cols-[auto_1fr] gap-5 items-start"
                    data-testid={`pillar-${p.k}`}
                  >
                    <span className="font-mono-tech text-gold text-[11px] mt-1">
                      {p.k}
                    </span>
                    <div>
                      <p className="font-serif-display not-italic text-stark text-xl md:text-2xl leading-snug" style={{ fontStyle: "normal", fontWeight: 400 }}>
                        {p.t}
                      </p>
                      <p className="mt-2 font-mono-tech text-[12.5px] text-ink-muted leading-relaxed">
                        {p.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="mt-24 hairline-t hairline-b py-5 overflow-hidden">
          <div className="ticker-track gap-12">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 pr-12">
                {[
                  "FASHION",
                  "BEAUTY",
                  "LIFESTYLE",
                  "EDITORIAL",
                  "CONVERSION",
                  "HUMAN-CENTRIC",
                  "PERFORMANCE",
                  "ARCHITECTURE",
                ].map((w, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="font-wide-caps text-[12px] text-silver flex items-center gap-12"
                  >
                    {w}
                    <span className="text-gold">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
