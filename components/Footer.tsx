import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Image src="/logo.svg" alt="Shift Bestie" width={110} height={36} />
            <p className="text-sm text-[#9A9AA8] max-w-xs">
              The friendly shift management app for hospitality and events teams.
            </p>
            <a
              href="mailto:hello@shiftbestie.co.uk"
              className="text-sm text-[#FF6B6B] font-600 hover:underline"
            >
              hello@shiftbestie.co.uk
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-700 uppercase tracking-widest text-[#9A9AA8] mb-1">Legal</p>
            <Link href="/privacy" className="text-sm text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-700 uppercase tracking-widest text-[#9A9AA8] mb-1">Company</p>
            <Link href="/pricing" className="text-sm text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
              Pricing
            </Link>
            <a href="mailto:hello@shiftbestie.co.uk" className="text-sm text-[#9A9AA8] hover:text-[#1A1A2E] transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-black/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs text-[#9A9AA8]">
            © {new Date().getFullYear()} Pulsar Labs Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[#9A9AA8]">
            Registered in England & Wales · Company No. 17211762 · 405A North End Road, London, SW6 1NS
          </p>
        </div>
      </div>
    </footer>
  );
}
