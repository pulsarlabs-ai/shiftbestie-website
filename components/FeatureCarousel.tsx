"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const features = [
  {
    icon: "📅",
    title: "Shift scheduling",
    desc: "Create and assign shifts in seconds. Workers see their upcoming schedule the moment it's published — no more copy-pasting rosters into group chats.",
    color: "#FF6B6B",
  },
  {
    icon: "🔄",
    title: "Cover requests",
    desc: "Workers request cover with a reason. Admins reassign or open the shift to the whole team — no WhatsApp chaos, no missed messages.",
    color: "#FF8C42",
  },
  {
    icon: "💷",
    title: "Earnings tracking",
    desc: "Every shift is logged automatically. Workers see exactly what they've earned; admins run payroll from one screen with one tap.",
    color: "#6BCB77",
  },
  {
    icon: "🎉",
    title: "Events management",
    desc: "Group shifts under events — festivals, weddings, pop-ups. See the full team roster per event at a glance.",
    color: "#FF6B6B",
  },
  {
    icon: "🔔",
    title: "Push notifications",
    desc: "Instant alerts for new shifts, cover requests, and schedule changes. Your team stays informed without having to open the app.",
    color: "#FF8C42",
  },
  {
    icon: "🏢",
    title: "Multi-team support",
    desc: "Managing multiple venues or brands? Each organisation is fully isolated with its own roster, shifts, and admin access.",
    color: "#6BCB77",
  },
];

const INTERVAL = 3500;
const FADE_MS = 320;

export default function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0); // what's actually rendered
  const [visible, setVisible] = useState(true);  // drives opacity + transform
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const transitioning = useRef(false);

  const goTo = useCallback((index: number) => {
    if (transitioning.current || index === active) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      setDisplayed(index);
      setVisible(true);
      transitioning.current = false;
    }, FADE_MS);
    setActive(index);
    setProgress(0);
  }, [active]);

  const next = useCallback(() => {
    goTo((active + 1) % features.length);
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const tick = 50;
    const steps = INTERVAL / tick;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setProgress((step / steps) * 100);
      if (step >= steps) {
        next();
        step = 0;
      }
    }, tick);

    return () => clearInterval(interval);
  }, [active, paused, next]);

  const f = features[displayed];

  return (
    <div
      className="max-w-4xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main display card */}
      <div className="card p-10 md:p-14 text-center mb-8 h-[300px] flex flex-col items-center justify-center overflow-hidden">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(14px)",
            transition: `opacity ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1), transform ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
          }}
        >
          <span className="text-6xl mb-5 block">{f.icon}</span>
          <h3 className="text-2xl md:text-3xl font-black text-[#1A1A2E] mb-4">{f.title}</h3>
          <p className="text-[#9A9AA8] text-lg max-w-lg leading-relaxed">{f.desc}</p>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-3">
        {features.map((feat, i) => (
          <button
            key={feat.title}
            onClick={() => goTo(i)}
            className="relative flex items-center justify-center focus:outline-none"
            aria-label={feat.title}
          >
            {i === active ? (
              <span className="relative block w-8 h-2 rounded-full bg-black/10 overflow-hidden">
                <span
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #FF6B6B, #FF8C42)",
                    transition: "width 50ms linear",
                  }}
                />
              </span>
            ) : (
              <span
                className="block w-2 h-2 rounded-full"
                style={{
                  background: i < active ? "#FF8C42" : "#E5E5E5",
                  transition: "background 0.3s ease",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Feature pill grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
        {features.map((feat, i) => (
          <button
            key={feat.title}
            onClick={() => goTo(i)}
            className={`text-left px-4 py-3 rounded-xl text-sm font-600 transition-all duration-200 ${
              i === active
                ? "bg-white shadow-md text-[#1A1A2E]"
                : "text-[#9A9AA8] hover:text-[#1A1A2E] hover:bg-white/60"
            }`}
          >
            <span className="mr-2">{feat.icon}</span>
            {feat.title}
          </button>
        ))}
      </div>
    </div>
  );
}
