import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const BACKEND_URL = process.env.constBACKEND_URL = "https://storiandco-backend.onrender.com";
const API = `${BACKEND_URL}/api`;

const REVENUE_OPTIONS = [
  "Starting Out",
  "$0 — $50K",
  "$50K — $250K",
  "$250K — $1M",
  "$1M+",
];

const SERVICE_OPTIONS = [
  "Branding",
  "Paid Ads",
  "Content Strategy",
  "Social Media",
  "Website Build",
];

const initialForm = {
  name: "",
  brand: "",
  email: "",
  revenue_goal: "",
  services: [],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const toggleService = (s) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.brand || !form.email || !form.revenue_goal) {
      toast.error("Required fields missing", {
        description: "Please complete name, brand, email and revenue goal.",
      });
      return;
    }
    try {
      setSubmitting(true);
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      setForm(initialForm);
      toast.success("System initialized", {
        description: "Your onboarding request has been received. We will respond within 48 hours.",
      });
    } catch (err) {
      console.error(err);
      toast.error("Transmission failed", {
        description: err?.response?.data?.detail || "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      aria-labelledby="contact-heading"
      className="relative bg-obsidian py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <p className="font-tracker">// 004 — INITIALIZE</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              id="contact-heading"
              data-reveal
              className="reveal font-wide-caps text-stark text-[13px] md:text-[15px]"
              data-testid="contact-section-title"
            >
              Initialize System / Let's Build
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="col-span-12 lg:col-span-5">
            <h3
              data-reveal
              className="reveal font-serif-display text-stark text-4xl md:text-5xl leading-[1.1] max-w-[460px]"
              data-testid="contact-headline"
            >
              Ready to build your{" "}
              <span className="text-gold">brand operating system?</span>
            </h3>

            <p className="mt-8 font-mono-tech text-[13.5px] leading-relaxed text-ink max-w-[440px]">
              Whether you're launching a new brand or scaling an existing
              one, we architect the infrastructure for sustainable growth.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-4 font-mono-tech text-[12px] text-ink">
                <span className="text-gold mt-1">▸</span>
                <span>
                  48-hour response time on all qualified onboarding requests.
                </span>
              </div>
              <div className="flex items-start gap-4 font-mono-tech text-[12px] text-ink">
                <span className="text-gold mt-1">▸</span>
                <span>
                  Discovery call → systems audit → architecture proposal.
                </span>
              </div>
              <div className="flex items-start gap-4 font-mono-tech text-[12px] text-ink">
                <span className="text-gold mt-1">▸</span>
                <span>Boutique by design. Limited engagements per quarter.</span>
              </div>
            </div>

            <div className="mt-14 hairline corners p-6 relative">
              <span className="c-bl" /><span className="c-br" />
              <p className="font-tracker mb-3">DIRECT SIGNAL</p>
              <p className="font-serif-display text-stark text-2xl">
                hello<span className="text-gold">@</span>storiandco.in
              </p>
              <p className="mt-2 font-mono-tech text-[11.5px] text-ink-muted">
                Pune, India — Serving brands across the Indian market.
              </p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="col-span-12 lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="hairline p-6 md:p-10 corners relative"
              noValidate
            >
              <span className="c-bl" /><span className="c-br" />

              <div className="flex items-center justify-between mb-8 hairline-b pb-4">
                <span className="font-tracker">FORM // ONBOARDING</span>
                <span className="font-tracker">{submitted ? "STATUS: RECEIVED" : "STATUS: AWAITING INPUT"}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <label className="field-label" htmlFor="f-name">Name</label>
                  <input
                    id="f-name"
                    data-testid="form-input-name"
                    type="text"
                    className="field-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="f-brand">Brand / Company</label>
                  <input
                    id="f-brand"
                    data-testid="form-input-brand"
                    type="text"
                    className="field-input"
                    placeholder="Brand or company name"
                    value={form.brand}
                    onChange={(e) => update("brand", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    data-testid="form-input-email"
                    type="email"
                    className="field-input"
                    placeholder="you@brand.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="field-label">Revenue Goal</label>
                  <Select
                    value={form.revenue_goal}
                    onValueChange={(v) => update("revenue_goal", v)}
                  >
                    <SelectTrigger
                      data-testid="form-select-revenue"
                      className="w-full bg-transparent border-0 border-b-[0.5px] border-[rgba(229,229,229,0.32)] rounded-none px-0 h-auto py-3 font-mono-tech text-[14px] text-stark hover:border-gold focus:ring-0 focus:border-gold data-[placeholder]:text-[rgba(255,255,255,0.28)]"
                    >
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent
                      className="bg-[#0A0A0A] border-[0.5px] border-[rgba(229,229,229,0.32)] rounded-none"
                    >
                      {REVENUE_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt}
                          value={opt}
                          data-testid={`form-revenue-option-${opt}`}
                          className="font-mono-tech text-[13px] text-ink focus:bg-[rgba(197,162,107,0.12)] focus:text-gold cursor-pointer"
                        >
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-10">
                <label className="field-label">Services Needed</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mt-2">
                  {SERVICE_OPTIONS.map((s) => {
                    const checked = form.services.includes(s);
                    return (
                      <label
                        key={s}
                        data-testid={`form-service-${s}`}
                        className={`flex items-center gap-3 cursor-pointer group select-none`}
                      >
                        <Checkbox
                          checked={checked}
                          onCheckedChange={() => toggleService(s)}
                          className="rounded-none border-[0.5px] border-[rgba(229,229,229,0.32)] data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-[#0A0A0A] h-4 w-4"
                        />
                        <span
                          className={`font-mono-tech text-[12px] tracking-[0.16em] uppercase transition-colors ${
                            checked ? "text-gold" : "text-ink group-hover:text-stark"
                          }`}
                        >
                          {s}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10">
                <label className="field-label" htmlFor="f-msg">Message</label>
                <textarea
                  id="f-msg"
                  data-testid="form-input-message"
                  rows={4}
                  className="field-input resize-none"
                  placeholder="Tell us about your brand and ambition…"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hairline-t pt-6">
                <p className="font-mono-tech text-[10.5px] text-ink-muted tracking-[0.18em] max-w-[300px]">
                  By submitting, you agree to be contacted by Stori & Co. regarding your inquiry.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="form-submit"
                  className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Transmitting…" : "Request Onboarding"}
                  <span aria-hidden>↗</span>
                </button>
              </div>

              {submitted && (
                <div
                  data-testid="form-success"
                  className="mt-8 hairline p-5 border-gold/60"
                  style={{ borderColor: "rgba(197,162,107,0.5)" }}
                >
                  <p className="font-tracker text-gold mb-1">// SIGNAL RECEIVED</p>
                  <p className="font-mono-tech text-[13px] text-ink">
                    Your onboarding request has been recorded. A member of the studio will respond within 48 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
