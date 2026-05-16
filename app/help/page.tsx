import Link from "next/link";
import { ReactNode } from "react";

const b = (text: string) => <strong className="font-700 text-[#1A1A2E]">{text}</strong>;

const sections: { title: string; faqs: { q: string; a: ReactNode }[] }[] = [
  {
    title: "Getting started",
    faqs: [
      {
        q: "How do I set up my organisation?",
        a: <>Download the app and tap {b("'Register your organisation'")}. Enter your organisation name and your details, then hit {b("'Get Started'")}. Your 14-day free trial begins immediately — no credit card needed.</>,
      },
      {
        q: "How do my workers join?",
        a: <>Once you&apos;re set up, go to the Workers tab and tap {b("'Invite workers'")}. You&apos;ll see your unique invite code. Share it directly from the app — via your email client or the native share sheet — and workers enter it when they tap {b("'Join your team'")} on the sign-up screen.</>,
      },
      {
        q: "Where do workers find the invite code?",
        a: <>Your invite code is shown on the Invite Workers screen inside the app. Workers enter it on the {b("'Join your team'")} screen when they create their account. You can regenerate the code at any time if needed.</>,
      },
      {
        q: "Can I use Shift Bestie on Android?",
        a: "Yes — Shift Bestie is available on both iOS (App Store) and Android (Google Play). All features work across both platforms.",
      },
    ],
  },
  {
    title: "Shifts & scheduling",
    faqs: [
      {
        q: "How do I create a shift?",
        a: <>As an admin, tap the {b("'+'")} button on the Shifts tab. Add a title, date, start and end time, and location, then assign it to one or more workers. Workers receive a push notification when a shift is assigned to them.</>,
      },
      {
        q: "Can workers accept or decline shifts?",
        a: "Yes. When a shift is assigned, workers can accept or decline it from their home screen. Admins can see the acceptance status of each shift in the shift detail view.",
      },
      {
        q: "How do cover requests work?",
        a: "Workers can request cover for a shift they can't make. The request goes to the admin, who can approve or decline it. If approved, the shift is reassigned. Workers cannot swap shifts directly with each other — all cover changes go through the admin.",
      },
      {
        q: "What happens when a shift is completed?",
        a: "Admins can mark a shift as completed from the shift detail screen. Once completed, the shift appears in the Payroll tab ready for payout.",
      },
    ],
  },
  {
    title: "Payroll & earnings",
    faqs: [
      {
        q: "How does payroll work?",
        a: "When a shift is marked as completed, it appears in the Payroll tab. Admins can review completed shifts and mark them as paid with one tap. Workers can see their earnings history in the Earnings tab — including pending and paid amounts.",
      },
      {
        q: "Does Shift Bestie handle bank transfers?",
        a: "Not directly — payroll in Shift Bestie is a tracking and confirmation tool. You pay workers through your normal method (bank transfer, cash, etc.) and mark the shift as paid in the app to keep records in sync.",
      },
      {
        q: "Can workers see what they've earned?",
        a: "Yes. Workers have an Earnings tab showing a breakdown of completed shifts, amounts owed, and payment history. Earnings are calculated automatically from the hourly rate and shift duration set by the admin.",
      },
      {
        q: "Where do I set a worker's hourly rate?",
        a: "Hourly rates are set per worker in the Workers tab. Tap on a worker's name to open their profile and set or update their rate. Earnings for completed shifts are calculated automatically using each worker's assigned rate.",
      },
    ],
  },
  {
    title: "Account & team management",
    faqs: [
      {
        q: "How do I reset my password?",
        a: <>On the login screen, tap {b("'Forgot password?'")} below the password field. Enter your email address and we&apos;ll send you a reset link. Check your spam folder if it doesn&apos;t arrive within a few minutes.</>,
      },
      {
        q: "Can I have more than one admin?",
        a: "Yes, on the Pro plan. Admins can promote workers to admin from the Workers tab. On the Starter plan, only one admin is supported.",
      },
      {
        q: "How do I remove a worker from my organisation?",
        a: "Go to the Workers tab, tap the worker's name, and use the menu (⋯) to remove them. You'll be asked to confirm with your password. Removed workers lose access to the organisation and are unassigned from any upcoming shifts.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. Go to Settings and scroll to the bottom to find the account deletion option. Deleting your account permanently removes your data in line with our Privacy Policy. Organisation admins should note that deleting their account will affect the entire organisation.",
      },
    ],
  },
  {
    title: "Notifications",
    faqs: [
      {
        q: "Why am I not receiving push notifications?",
        a: "Make sure notifications are enabled for Shift Bestie in your device settings (Settings → Notifications → Shift Bestie). If you've just installed the app, you may need to relaunch it once for notifications to activate.",
      },
      {
        q: "What notifications does Shift Bestie send?",
        a: "Workers receive notifications when a shift is assigned, when a cover request is approved or declined, and (on Pro) a reminder 1 hour before a shift starts. Admins receive notifications when a worker requests cover.",
      },
    ],
  },
];

export default function Help() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">Help centre</p>
        <h1 className="text-5xl font-black text-[#1A1A2E] mb-4">
          How can we help?
        </h1>
        <p className="text-lg text-[#9A9AA8] max-w-md mx-auto">
          Answers to the most common questions about using Shift Bestie.
        </p>
      </div>

      {/* FAQ sections */}
      <div className="flex flex-col gap-14">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-black text-[#1A1A2E] mb-5">
              {section.title}
            </h2>
            <div className="flex flex-col gap-4">
              {section.faqs.map((faq) => (
                <div key={faq.q} className="card p-6">
                  <p className="font-700 text-[#1A1A2E] mb-2">{faq.q}</p>
                  <p className="text-sm text-[#9A9AA8] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <p className="text-[#9A9AA8] mb-2">Still need help?</p>
        <p className="text-sm text-[#9A9AA8] mb-6">
          We&apos;re a small team — we reply to every email.
        </p>
        <Link href="mailto:hello@shiftbestie.co.uk" className="btn-primary">
          Email us
        </Link>
      </div>
    </div>
  );
}
