import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shift Bestie — Your shifts, sorted.",
  description: "The friendly shift management app for hospitality and events teams. Schedule shifts, track earnings, and manage cover requests — all in one place.",
  openGraph: {
    title: "Shift Bestie — Your shifts, sorted.",
    description: "The friendly shift management app for hospitality and events teams.",
    url: "https://shiftbestie.co.uk",
    siteName: "Shift Bestie",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen flex flex-col ${nunito.className}`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
