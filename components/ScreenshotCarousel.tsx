"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import PhoneFrame from "./PhoneFrame";

const screenshots = [
  {
    src: "/screenshots/ShiftBestie-Worker1.png",
    title: "Your next shift, front and centre",
    desc: "Workers open the app and instantly see their next shift — time, location, and a full view of what's coming up. No digging required.",
  },
  {
    src: "/screenshots/ShiftBestie-Worker3.png",
    title: "Know exactly what you've earned",
    desc: "Sophie's earnings tab tracks total hours worked, amount already paid, and any amount still due — all updated automatically after every shift.",
  },
  {
    src: "/screenshots/ShiftBestie-Admin1.png",
    title: "Everything your team needs, one screen",
    desc: "Admins see upcoming shifts, active events, total worker count, and event stats the moment they log in. Full control at a glance.",
  },
  {
    src: "/screenshots/ShiftBestie-Admin5.png",
    title: "Payroll done in seconds",
    desc: "The payroll tab shows each worker's completed hours and total pay. Mark shifts as paid with one tap — no spreadsheet needed.",
  },
  {
    src: "/screenshots/ShiftBestie-Worker2.png",
    title: "The full schedule, always in sync",
    desc: "Workers see their complete upcoming shift list in real time. The moment an admin makes a change, it shows up here.",
  },
  {
    src: "/screenshots/ShiftBestie-Admin2.png",
    title: "Events, fully managed",
    desc: "The Bank Holiday Weekend event shows all linked shifts, assigned workers, and event details — everything tied together in one place.",
  },
  {
    src: "/screenshots/ShiftBestie-Admin3.png",
    title: "Cover requests, handled cleanly",
    desc: "When a worker needs cover, admins see the request and can reassign the shift directly or open it up to available team members.",
  },
  {
    src: "/screenshots/ShiftBestie-Admin4.png",
    title: "Your whole team, one tab",
    desc: "The Workers tab gives admins a full roster view — see every team member, their role, and drill into individual profiles and earnings.",
  },
];

const AUTO_ADVANCE = 8000;
const FADE_MS = 380;
const TOUCH_PAUSE_MS = 6000;

export default function ScreenshotCarousel() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const transitioning = useRef(false);
  const touchResumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouch = () => {
    setPaused(true);
    if (touchResumeTimer.current) clearTimeout(touchResumeTimer.current);
    touchResumeTimer.current = setTimeout(() => setPaused(false), TOUCH_PAUSE_MS);
  };

  const goTo = useCallback((index: number, dir: "next" | "prev" = "next") => {
    void dir;
    if (transitioning.current || index === active) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      setDisplayed(index);
      setVisible(true);
      transitioning.current = false;
    }, FADE_MS);
    setActive(index);
  }, [active]);

  const prev = useCallback(() => {
    goTo((active - 1 + screenshots.length) % screenshots.length, "prev");
  }, [active, goTo]);

  const advance = useCallback(() => {
    goTo((active + 1) % screenshots.length, "next");
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, AUTO_ADVANCE);
    return () => clearInterval(t);
  }, [advance, paused]);

  const s = screenshots[displayed];

  return (
    <div
      className="flex flex-col items-center gap-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouch}
    >
      {/* Phone + arrows */}
      <div className="flex items-center gap-6 md:gap-12">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#9A9AA8] hover:text-[#FF6B6B] hover:shadow-lg transition-all shrink-0"
          aria-label="Previous screenshot"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Phone frame */}
        <div
          style={{
            transform: visible ? "scale(1)" : "scale(0.97)",
            transition: `transform ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
          }}
        >
          <PhoneFrame width={240}>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
                willChange: "opacity",
              }}
            >
              <Image
                src={s.src}
                alt={s.title}
                width={240}
                height={518}
                className="w-full h-full object-cover"
                priority={displayed === 0}
              />
            </div>
          </PhoneFrame>
        </div>

        {/* Next */}
        <button
          onClick={advance}
          className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#9A9AA8] hover:text-[#FF6B6B] hover:shadow-lg transition-all shrink-0"
          aria-label="Next screenshot"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Caption */}
      <div
        className="text-center max-w-sm"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(8px)",
          transition: `opacity ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1), transform ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
        }}
      >
        <p className="font-bold text-[#1A1A2E] text-lg mb-1">{s.title}</p>
        <p className="text-sm text-[#9A9AA8] leading-relaxed">{s.desc}</p>
      </div>

      {/* Pill dots */}
      <div className="flex gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > active ? "next" : "prev")}
            aria-label={`Go to screenshot ${i + 1}`}
          >
            <span
              className="block rounded-full"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                background: i === active
                  ? "linear-gradient(90deg, #FF6B6B, #FF8C42)"
                  : "#E5E5E5",
                transition: "width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s ease",
              }}
            />
          </button>
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="hidden md:flex gap-2 flex-wrap justify-center max-w-xl">
        {screenshots.map((sc, i) => (
          <button
            key={sc.src}
            onClick={() => goTo(i, i > active ? "next" : "prev")}
            className="rounded-xl overflow-hidden"
            style={{
              transform: i === active ? "scale(1.08)" : "scale(1)",
              opacity: i === active ? 1 : 0.45,
              outline: i === active ? "2px solid #FF6B6B" : "none",
              outlineOffset: 2,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            <Image
              src={sc.src}
              alt={sc.title}
              width={52}
              height={112}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
