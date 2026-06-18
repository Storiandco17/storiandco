const STEPS = [
  {
    k: "01",
    label: "Discovery",
    title: "Decode the brand",
    desc:
      "We map your brand's current state — positioning, audience, funnel, creative — then surface the gaps between perception and performance.",
    deliverables: ["BRAND AUDIT", "AUDIENCE MAP", "GAP ANALYSIS"],
  },
  {
    k: "02",
    label: "Architecture",
    title: "Design the system",
    desc:
      "We architect the operating system — visual language, content frameworks, paid engine, conversion logic — engineered as one coherent machine.",
    deliverables: ["IDENTITY SPEC", "CONTENT OS", "FUNNEL DESIGN"],
  },
  {
    k: "03",
    label: "Build",
    title: "Ship with precision",
    desc:
      "Surgical implementation across web, ads, social and content. Every asset is briefed, produced and shipped against a measurable hypothesis.",
    deliverables: ["WEB BUILD", "CREATIVE PROD.", "CAMPAIGN LIVE"],
  },
  {
    k: "04",
    label: "Scale",
    title: "Optimise & compound",
    desc:
      "We test, learn and compound — feeding performance data back into the creative engine. The system gets sharper with every cycle.",
    deliverables: ["CRO LOOPS", "CREATIVE TESTING", "MONTHLY READOUT"],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      aria-labelledby="process-heading"
      className="relative bg-obsidian py-28 md:py-36 hairline-t"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <p className="font-tracker">// 002.5 — METHOD</p>
          </div>
          <div className="col-span-12 md:col-span-9 flex items-end justify-between flex-wrap gap-6">
            <h2
              id="process-heading"
              data-reveal
              className="reveal font-serif-display text-stark text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-[760px]"
              data-testid="process-title"
            >
              The <span className="text-gold">Build</span> — four phases.
              one operating cadence.
            </h2>
            <span className="font-wide-caps text-[11px] text-ink-muted">
              CYCLE 01 — 04
            </span>
          </div>
        </div>

        {/* Steps */}
        <ol className="hairline-t">
          {STEPS.map((s, i) => (
            <li
              key={s.k}
              data-reveal
              data-testid={`process-step-${s.k}`}
              className="reveal group hairline-b py-10 md:py-14 grid grid-cols-12 gap-6 md:gap-10 items-start gold-glow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Index */}
              <div className="col-span-3 md:col-span-2">
                <p className="font-mono-tech text-gold text-[12px] tracking-[0.28em]">
                  /{s.k}
                </p>
                <p className="mt-2 font-wide-caps text-[10.5px] text-ink-muted">
                  {s.label}
                </p>
              </div>

              {/* Title + desc */}
              <div className="col-span-9 md:col-span-6">
                <h3 className="font-serif-display not-italic text-stark text-3xl md:text-4xl leading-[1.1] group-hover:text-gold transition-colors duration-500" style={{ fontStyle: "normal", fontWeight: 400 }}>
                  {s.title}
                </h3>
                <p className="mt-4 font-mono-tech text-[13.5px] leading-relaxed text-ink max-w-[52ch]">
                  {s.desc}
                </p>
              </div>

              {/* Deliverables */}
              <div className="col-span-12 md:col-span-4 md:pl-6 md:hairline" style={{ borderLeft: "0.5px solid var(--silver-line)" }}>
                <p className="font-tracker mb-4">DELIVERABLES</p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="font-mono-tech text-[12px] text-ink flex items-center gap-3"
                    >
                      <span className="text-gold">▸</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
