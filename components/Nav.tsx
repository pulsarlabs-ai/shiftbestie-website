"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Shift Bestie" width={120} height={40} priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-600 text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-600 text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
            Pricing
          </Link>
          <Link href="/help" className="text-sm font-600 text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
            Help
          </Link>
          <Link href="mailto:hello@shiftbestie.co.uk" className="text-sm font-600 text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
            Contact
          </Link>
          <a href="#download" className="btn-primary !py-2 !px-5 !text-sm">
            Download free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#9A9AA8]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/#features" className="text-sm font-600 text-[#9A9AA8]" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/pricing" className="text-sm font-600 text-[#9A9AA8]" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/help" className="text-sm font-600 text-[#9A9AA8]" onClick={() => setOpen(false)}>Help</Link>
          <Link href="mailto:hello@shiftbestie.co.uk" className="text-sm font-600 text-[#9A9AA8]">Contact</Link>
          <a href="#download" className="btn-primary !py-2 !px-5 !text-sm text-center" onClick={() => setOpen(false)}>
            Download free
          </a>
        </div>
      )}
    </nav>
  );
}
