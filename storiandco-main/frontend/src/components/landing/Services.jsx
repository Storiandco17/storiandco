import { Target, FileText, Share2, MonitorSmartphone } from "lucide-react";

const SERVICES = [
  {
    k: "01",
    name: "Paid Advertising",
    icon: Target,
    desc:
      "We create and manage performance-driven ad campaigns that help brands increase sales, generate leads, and scale profitably across platforms like Meta and Google.",
    stack: ["META ADS", "GOOGLE ADS", "PIXEL ARCH.", "CREATIVE TESTING"],
  },
  {
    k: "02",
    name: "Content Strategy",
    icon: FileText,
    desc:
      "We develop strategic content plans that help brands build authority, attract the right audience, and create consistent engagement across digital platforms.",
    stack: ["NARRATIVE", "EDITORIAL", "FUNNEL DESIGN", "POSITIONING"],
  },
  {
    k: "03",
    name: "Social Media Management",
    icon: Share2,
    desc:
      "We handle day-to-day social media management, including content planning, posting, audience engagement and growth strategies to maintain a strong online presence.",
    stack: ["INSTAGRAM", "FACEBOOK", "WHATSAPP", "PINTEREST"],
  },
  {
    k: "04",
    name: "Website Building",
    icon: MonitorSmartphone,
    desc:
      "Our approach goes beyond traditional website development. We craft tailored digital experiences, including custom platforms and Shopify ecosystems designed with both aesthetics and performance in mind, transforming your online presence into a powerful driver of growth. The systems simplify customer journeys, and turn attention into revenue.",
    stack: ["CUSTOM WEB", "MOBILE APP", "SHOPIFY"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      aria-labelledby="services-heading"
      className="relative bg-obsidian py-28 md:py-36"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <p className="font-tracker">// 003 — CAPABILITIES</p>
          </div>
          <div className="col-span-12 md:col-span-9 flex items-end justify-between flex-wrap gap-6">
            <h2
              id="services-heading"
              data-reveal
              className="reveal font-serif-display text-stark text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-[760px]"
              data-testid="services-title"
            >
              System <span className="text-gold">Capabilities</span> — four
              modules. one engine.
            </h2>
            <span className="font-wide-caps text-[11px] text-ink-muted">
              MODULES 01 — 04
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.5px] bg-[rgba(229,229,229,0.18)] hairline">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <article
                key={s.k}
                data-reveal
                data-testid={`service-card-${s.k}`}
                className="reveal group bg-obsidian p-8 md:p-10 relative gold-glow cursor-default"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono-tech text-[11px] text-gold tracking-[0.28em]">
                    /{s.k}
                  </span>
                  <Icon
                    size={22}
                    strokeWidth={1}
                    className="text-silver group-hover:text-gold transition-colors duration-500"
                    aria-hidden
                  />
                </div>

                <h3 className="font-wide-caps text-stark text-[15px] md:text-[17px] leading-snug mb-5 group-hover:text-gold transition-colors duration-500">
                  {s.name}
                </h3>

                <p className="font-mono-tech text-[13px] leading-relaxed text-ink max-w-[52ch]">
                  {s.desc}
                </p>

                <div className="hairline-t mt-10 pt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono-tech text-[10px] tracking-[0.24em] text-ink-muted"
                    >
                      ▸ {t}
                    </span>
                  ))}
                </div>

                {/* hover signature */}
                <span
                  className="absolute bottom-5 right-6 font-mono-tech text-[10px] tracking-[0.32em] text-ink-muted opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all duration-500"
                  aria-hidden
                >
                  MODULE ACTIVE
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
