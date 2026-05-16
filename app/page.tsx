import Image from "next/image";
import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import FeatureCarousel from "@/components/FeatureCarousel";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import WaitlistForm from "@/components/WaitlistForm";
import ScrollReveal from "@/components/ScrollReveal";

const heroScreenshots = [
  { src: "/screenshots/admin-home-raw.png", alt: "Admin dashboard" },
  { src: "/screenshots/worker-home-raw.png", alt: "Worker home" },
  { src: "/screenshots/admin-payroll-raw.png", alt: "Payroll view" },
];


export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Animated glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: 600,
              height: 600,
              top: -120,
              right: -80,
              background: "rgba(255,107,107,0.22)",
              filter: "blur(90px)",
              animation: "blob-drift 9s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: 420,
              height: 420,
              bottom: -60,
              right: "20%",
              background: "rgba(255,140,66,0.18)",
              filter: "blur(80px)",
              animation: "blob-drift 13s ease-in-out -5s infinite reverse",
            }}
          />
          <div
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: 300,
              height: 300,
              top: "25%",
              left: "2%",
              background: "rgba(107,203,119,0.14)",
              filter: "blur(70px)",
              animation: "blob-drift 17s ease-in-out -8s infinite",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 flex flex-col md:flex-row items-center gap-12">
          {/* Copy */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10">
            <p className="section-label">Now in early access</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-[#1A1A2E]">
              Your shifts,{" "}
              <span className="gradient-text">sorted.</span>
            </h1>
            <p className="text-lg text-[#9A9AA8] max-w-md mx-auto md:mx-0 leading-relaxed">
              The shift management app built for hospitality and events teams.
              Scheduling, cover requests, and payroll — all in one friendly place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#waitlist" className="btn-primary">
                Get early access
              </a>
              <Link href="/pricing" className="btn-outline">
                See pricing
              </Link>
            </div>
            <p className="text-xs text-[#9A9AA8]">
              14-day free trial · No credit card required
            </p>
          </div>

          {/* Phone trio + floating chips */}
          <div className="flex-1 relative flex justify-center items-end gap-3 md:gap-5 pb-6">
            {/* Left phone — Admin dashboard */}
            <div className="relative translate-y-8 hidden sm:block" style={{ zIndex: 20 }}>
              <PhoneFrame width={160}>
                <Image
                  src={heroScreenshots[0].src}
                  alt={heroScreenshots[0].alt}
                  width={160}
                  height={346}
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>
              <div
                className="absolute hidden md:flex items-center gap-2 bg-white rounded-full px-3 py-1.5 text-sm font-bold text-[#1A1A2E] whitespace-nowrap select-none"
                style={{
                  bottom: "28%",
                  right: "-90px",
                  boxShadow: "0 4px 20px rgba(255,107,107,0.15)",
                  animation: "chip-enter 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.9s both, chip-float 4s ease-in-out 1.45s infinite",
                }}
              >
                <span>📅</span><span>Shift assigned</span>
              </div>
            </div>

            {/* Centre phone — Worker home */}
            <div className="relative z-10">
              <PhoneFrame width={190}>
                <Image
                  src={heroScreenshots[1].src}
                  alt={heroScreenshots[1].alt}
                  width={190}
                  height={410}
                  className="w-full h-full object-cover"
                  priority
                />
              </PhoneFrame>
            </div>

            {/* Cover sorted chip — floats below centre phone, above all phones */}
            <div
              className="absolute hidden md:flex items-center gap-2 bg-white rounded-full px-3 py-1.5 text-sm font-bold text-[#1A1A2E] whitespace-nowrap select-none"
              style={{
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 30,
                boxShadow: "0 4px 20px rgba(255,107,107,0.15)",
                animation: "chip-enter 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.6s both, chip-float 4s ease-in-out 2.15s infinite",
              }}
            >
              <span>✅</span><span>Cover sorted</span>
            </div>

            {/* Right phone — Payroll */}
            <div className="relative translate-y-8 hidden sm:block" style={{ zIndex: 20 }}>
              <PhoneFrame width={160}>
                <Image
                  src={heroScreenshots[2].src}
                  alt={heroScreenshots[2].alt}
                  width={160}
                  height={346}
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>
              <div
                className="absolute hidden md:flex items-center gap-2 bg-white rounded-full px-3 py-1.5 text-sm font-bold text-[#1A1A2E] whitespace-nowrap select-none"
                style={{
                  top: "22%",
                  left: "-95px",
                  boxShadow: "0 4px 20px rgba(255,107,107,0.15)",
                  animation: "chip-enter 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.25s both, chip-float 4s ease-in-out 1.8s infinite",
                }}
              >
                <span>💷</span><span>£187.50 earned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem strip ────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl font-bold text-[#1A1A2E] leading-snug">
              Tired of scheduling over WhatsApp,{" "}
              <br className="hidden md:block" />
              tracking hours in a spreadsheet,{" "}
              <br className="hidden md:block" />
              and chasing cover on your day off?
            </p>
            <p className="mt-4 text-[#9A9AA8] text-lg">
              Shift Bestie fixes all of that.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Features carousel ────────────────────────────────────────────── */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal className="text-center mb-12">
          <p className="section-label mb-3">Everything you need</p>
          <h2 className="text-4xl font-black text-[#1A1A2E]">
            Built for the way you actually work
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <FeatureCarousel />
        </ScrollReveal>
      </section>

      {/* ── Screenshot carousel ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">See it in action</p>
            <h2 className="text-4xl font-black text-[#1A1A2E]">
              Simple for workers. Powerful for admins.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ScreenshotCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pricing teaser ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="gradient-bg rounded-3xl p-10 md:p-16 text-center text-white">
            <p className="text-sm font-700 uppercase tracking-widest opacity-80 mb-4">
              Pricing
            </p>
            <h2 className="text-4xl font-black mb-4">
              Start free. Upgrade when you&apos;re ready.
            </h2>
            <p className="text-lg opacity-80 max-w-md mx-auto mb-8">
              14-day free trial, no credit card needed. Plans from £19.99/month
              for small teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#waitlist"
                className="bg-white text-[#FF6B6B] font-bold py-3 px-8 rounded-2xl hover:opacity-90 transition-opacity"
              >
                Start free trial
              </a>
              <Link
                href="/pricing"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-2xl hover:bg-white hover:text-[#FF6B6B] transition-all"
              >
                View all plans
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Waitlist ─────────────────────────────────────────────────────── */}
      <section id="waitlist" className="max-w-2xl mx-auto px-6 py-16 text-center">
        <ScrollReveal>
          <p className="section-label mb-3">Early access</p>
          <h2 className="text-4xl font-black text-[#1A1A2E] mb-4">
            Be first through the door
          </h2>
          <p className="text-[#9A9AA8] mb-8 text-lg">
            Shift Bestie is launching soon on iOS. Drop your email and we&apos;ll
            reach out the moment it&apos;s live.
          </p>
          <WaitlistForm />
          <p className="text-xs text-[#9A9AA8] mt-4">
            No spam. Unsubscribe any time.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
