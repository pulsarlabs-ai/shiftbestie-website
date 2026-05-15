"use client";

export default function WaitlistForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-xl border border-black/10 bg-white text-[#1A1A2E] placeholder-[#9A9AA8] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/30"
      />
      <button type="submit" className="btn-primary !rounded-xl whitespace-nowrap">
        Notify me
      </button>
    </form>
  );
}
