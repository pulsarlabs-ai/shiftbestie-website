import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  width?: number;
  className?: string;
}

export default function PhoneFrame({ children, width = 220, className = "" }: PhoneFrameProps) {
  const height = Math.round(width * 2.16); // iPhone aspect ratio ~9:19.5

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width,
        height,
        background: "linear-gradient(145deg, #2a2a3d, #111120)",
        borderRadius: width * 0.14,
        boxShadow: `
          0 40px 100px rgba(0,0,0,0.35),
          0 0 0 1px rgba(255,255,255,0.08),
          inset 0 0 0 1.5px rgba(255,255,255,0.05)
        `,
        padding: `${width * 0.045}px ${width * 0.038}px`,
      }}
    >
      {/* Side buttons */}
      <div
        className="absolute"
        style={{
          left: -3,
          top: "22%",
          width: 3,
          height: width * 0.11,
          background: "rgba(255,255,255,0.12)",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        className="absolute"
        style={{
          left: -3,
          top: "35%",
          width: 3,
          height: width * 0.14,
          background: "rgba(255,255,255,0.12)",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        className="absolute"
        style={{
          left: -3,
          top: "50%",
          width: 3,
          height: width * 0.14,
          background: "rgba(255,255,255,0.12)",
          borderRadius: "2px 0 0 2px",
        }}
      />
      {/* Power button */}
      <div
        className="absolute"
        style={{
          right: -3,
          top: "28%",
          width: 3,
          height: width * 0.18,
          background: "rgba(255,255,255,0.12)",
          borderRadius: "0 2px 2px 0",
        }}
      />

      {/* Screen */}
      <div
        className="relative overflow-hidden w-full h-full"
        style={{
          borderRadius: width * 0.108,
          background: "#000",
        }}
      >
        {/* Screen content */}
        <div className="w-full h-full">{children}</div>

        {/* Home indicator */}
        <div
          className="absolute"
          style={{
            bottom: width * 0.025,
            left: "50%",
            transform: "translateX(-50%)",
            width: width * 0.3,
            height: 4,
            background: "rgba(255,255,255,0.5)",
            borderRadius: 2,
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
}
