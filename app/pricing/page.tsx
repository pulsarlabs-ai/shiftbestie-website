import Link from "next/link";

const tiers = [
  {
    name: "Trial",
    price: "Free",
    period: "14 days",
    desc: "Try everything, no card needed.",
    highlight: false,
    features: [
      "Full Pro features",
      "Shift scheduling",
      "Cover requests",
      "Earnings tracking",
      "Push notifications",
      "Email support",
    ],
    cta: "Start free trial",
    ctaHref: "#",
  },
  {
    name: "Starter",
    price: "£19.99",
    period: "per month",
    desc: "Perfect for small venues and teams.",
    highlight: true,
    features: [
      "Up to 15 workers",
      "1 admin",
      "Up to 5 events per month",
      "Shift scheduling",
      "Cover requests",
      "Earnings tracking",
      "Push notifications",
      "Email support",
    ],
    cta: "Start free trial",
    ctaHref: "#",
  },
  {
    name: "Pro",
    price: "£49.99",
    period: "per month",
    desc: "For growing teams and multiple venues.",
    highlight: false,
    features: [
      "Unlimited workers",
      "Multiple admins",
      "Unlimited events",
      "Shift scheduling",
      "Cover requests",
      "Earnings tracking",
      "1-hour shift reminders (push)",
      "Push notifications",
      "Priority support + onboarding call",
    ],
    cta: "Start free trial",
    ctaHref: "#",
  },
];

const faqs = [
  {
    q: "Do I need a credit card to start the trial?",
    a: "No. The 14-day trial is completely free with no card required. You only enter payment details when you decide to upgrade.",
  },
  {
    q: "Can I switch plans?",
    a: "Yes — you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens when my trial ends?",
    a: "You'll be prompted to choose a plan immediately. Admins are taken to the plan selection screen and workers see a service paused notice until a plan is active. Your data is kept safe — reactivating restores full access instantly.",
  },
  {
    q: "Is there an annual discount?",
    a: "Annual billing is coming soon and will include 2 months free. We'll notify trial users when it launches.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — cancel from your account settings with no penalty. You keep access until the end of your billing period.",
  },
];

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">Pricing</p>
        <h1 className="text-5xl font-black text-[#1A1A2E] mb-4">
          Simple, honest pricing
        </h1>
        <p className="text-lg text-[#9A9AA8] max-w-md mx-auto">
          Start free for 14 days. No credit card needed. Cancel any time.
        </p>
      </div>

      {/* Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`card p-8 flex flex-col gap-5 relative ${
              tier.highlight
                ? "ring-2 ring-[#FF6B6B] scale-[1.03]"
                : ""
            }`}
          >
            {tier.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-700 px-4 py-1 rounded-full">
                Most popular
              </span>
            )}
            <div>
              <p className="text-sm font-700 text-[#9A9AA8] uppercase tracking-wider mb-1">
                {tier.name}
              </p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-[#1A1A2E]">{tier.price}</span>
                <span className="text-sm text-[#9A9AA8] mb-1">/{tier.period}</span>
              </div>
              <p className="text-sm text-[#9A9AA8] mt-1">{tier.desc}</p>
            </div>

            <ul className="flex flex-col gap-2 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#1A1A2E]">
                  <svg className="w-4 h-4 text-[#6BCB77] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={tier.ctaHref}
              className={tier.highlight ? "btn-primary text-center" : "btn-outline text-center"}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-[#1A1A2E] text-center mb-10">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="card p-6">
              <p className="font-700 text-[#1A1A2E] mb-2">{faq.q}</p>
              <p className="text-sm text-[#9A9AA8] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <p className="text-[#9A9AA8] mb-4">Still have questions?</p>
        <Link
          href="mailto:hello@shiftbestie.co.uk"
          className="btn-outline"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
