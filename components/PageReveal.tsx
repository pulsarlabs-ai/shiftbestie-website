"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "covering" | "fading" | "done";

export default function PageReveal() {
  const [phase, setPhase] = useState<Phase>("covering");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fading"), 350);
    const t2 = setTimeout(() => setPhase("done"), 850);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #FF6B6B, #FF8C42)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.5s ease-out",
        pointerEvents: "none",
      }}
    >
      <Image
        src="/app-icon.png"
        alt="Shift Bestie"
        width={80}
        height={80}
        style={{ borderRadius: 20, opacity: 0.95 }}
        priority
      />
    </div>
  );
}
