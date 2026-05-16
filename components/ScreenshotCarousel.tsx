"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/framed/worker-home.png",
    title: "Your next shift, front and centre",
    desc: "Workers open the app and instantly see their next shift — time, location, and everything coming up. No digging through group chats.",
  },
  {
    src: "/screenshots/framed/admin-home.png",
    title: "Full control at a glance",
    desc: "Admins see upcoming shifts, active events, total worker count, and cover requests the moment they log in.",
  },
  {
    src: "/screenshots/framed/admin-create-shift.png",
    title: "Build a shift in seconds",
    desc: "Set the title, date, time, location, and assigned workers in one screen. Your team gets notified the moment it's saved.",
  },
  {
    src: "/screenshots/framed/worker-shifts.png",
    title: "The full schedule, always in sync",
    desc: "Workers see their complete upcoming shift list in real time. The moment an admin makes a change, it shows up here.",
  },
  {
    src: "/screenshots/framed/worker-earnings.png",
    title: "Know exactly what you've earned",
    desc: "Workers see total hours, amount already paid, and any outstanding balance — updated automatically after every shift.",
  },
  {
    src: "/screenshots/framed/admin-payroll.png",
    title: "Payroll done in seconds",
    desc: "See each worker's completed hours and total pay at a glance. Mark shifts as paid with one tap — no spreadsheet needed.",
  },
  {
    src: "/screenshots/framed/admin-events.png",
    title: "Events, fully managed",
    desc: "Create multi-day events, link shifts, and keep your whole team briefed — dress code, badge pickup, security induction and more.",
  },
  {
    src: "/screenshots/framed/admin-cover-request.png",
    title: "Cover requests, handled cleanly",
    desc: "When a worker needs cover, admins see the request and can reassign the shift directly — no WhatsApp thread required.",
  },
  {
    src: "/screenshots/framed/admin-workers.png",
    title: "Your whole team, one tab",
    desc: "A full roster view with every team member, their role, and hourly rate. Promote workers to admin in one tap.",
  },
];

const AUTO_ADVANCE = 8000;
const EXIT_MS = 220;
const ENTER_MS = 380;
const TOUCH_PAUSE_MS = 6000;

type Phase = "idle" | "exit" | "enter";

export default function ScreenshotCarousel() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const transitioning = useRef(false);
  const touchResumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouch = () => {
    setPaused(true);
    if (touchResumeTimer.current) clearTimeout(touchResumeTimer.current);
    touchResumeTimer.current = setTimeout(() => setPaused(false), TOUCH_PAUSE_MS);
  };

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      if (transitioning.current || index === active) return;
      transitioning.current = true;
      setDirection(dir);
      setActive(index);
      setPhase("exit");

      setTimeout(() => {
        setDisplayed(index);
        setPhase("enter");
        // Double rAF ensures browser paints the enter frame before transitioning to idle
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase("idle");
            transitioning.current = false;
          });
        });
      }, EXIT_MS);
    },
    [active]
  );

  const prev = useCallback(
    () => goTo((active - 1 + screenshots.length) % screenshots.length, -1),
    [active, goTo]
  );

  const advance = useCallback(
    () => goTo((active + 1) % screenshots.length, 1),
    [active, goTo]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, AUTO_ADVANCE);
    return () => clearInterval(t);
  }, [advance, paused]);

  const s = screenshots[displayed];

  const imageStyle = (() => {
    const base = "all";
    if (phase === "exit")
      return {
        opacity: 0,
        transform: `translateX(${-direction * 28}px) scale(0.96)`,
        filter: "blur(6px)",
        transition: `opacity ${EXIT_MS}ms ease-in, transform ${EXIT_MS}ms ease-in, filter ${EXIT_MS}ms ease-in`,
      };
    if (phase === "enter")
      return {
        opacity: 0,
        transform: `translateX(${direction * 28}px) scale(0.96)`,
        filter: "blur(6px)",
        transition: "none",
      };
    // idle
    return {
      opacity: 1,
      transform: "translateX(0) scale(1)",
      filter: "blur(0px)",
      transition: `opacity ${ENTER_MS}ms cubic-bezier(0.34,1.1,0.64,1), transform ${ENTER_MS}ms cubic-bezier(0.34,1.1,0.64,1), filter ${ENTER_MS}ms ease-out`,
    };
  })();

  const captionStyle = (() => {
    if (phase === "exit")
      return {
        opacity: 0,
        transform: `translateY(${direction * 8}px)`,
        transition: `opacity ${EXIT_MS}ms ease-in, transform ${EXIT_MS}ms ease-in`,
      };
    if (phase === "enter")
      return {
        opacity: 0,
        transform: `translateY(${-direction * 8}px)`,
        transition: "none",
      };
    return {
      opacity: 1,
      transform: "translateY(0)",
      transition: `opacity ${ENTER_MS}ms cubic-bezier(0.34,1.1,0.64,1), transform ${ENTER_MS}ms cubic-bezier(0.34,1.1,0.64,1)`,
    };
  })();

  return (
    <div
      className="flex flex-col items-center gap-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouch}
    >
      {/* Screenshot + arrows */}
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

        {/* Framed screenshot */}
        <div style={{ width: 240, height: 518, borderRadius: 32, overflow: "hidden", ...imageStyle }}>
          <Image
            src={s.src}
            alt={s.title}
            width={240}
            height={518}
            className="w-full h-full object-cover"
            priority={displayed === 0}
          />
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
      <div className="text-center max-w-sm" style={captionStyle}>
        <p className="font-bold text-[#1A1A2E] text-lg mb-1">{s.title}</p>
        <p className="text-sm text-[#9A9AA8] leading-relaxed">{s.desc}</p>
      </div>

      {/* Pill dots */}
      <div className="flex gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > active ? 1 : -1)}
            aria-label={`Go to screenshot ${i + 1}`}
          >
            <span
              className="block rounded-full"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                background:
                  i === active
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
            onClick={() => goTo(i, i > active ? 1 : -1)}
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
