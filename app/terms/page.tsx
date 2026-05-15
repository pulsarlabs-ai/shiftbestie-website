export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-black text-[#1A1A2E] mb-2">Terms of Service</h1>
      <p className="text-sm text-[#9A9AA8] mb-10">Last updated: 13 May 2026</p>

      <div className="flex flex-col gap-8 text-[#1A1A2E]">

        <section>
          <h2 className="text-xl font-bold mb-2">1. About these Terms</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            These Terms of Service govern your use of Shift Bestie — the mobile application and website at shiftbestie.co.uk —
            operated by <strong>Pulsar Labs Ltd</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company incorporated in England and Wales
            (Companies House number 17211762), registered at 405A North End Road, London, SW6 1NS.
            By creating an account you agree to these Terms. If you do not agree, do not use Shift Bestie.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">2. Eligibility</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            Shift Bestie is intended for users aged 18 and over. By signing up you confirm you are at least 18 years old.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">3. Subscriptions & billing</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            We offer three tiers: a 14-day free <strong>Trial</strong>, <strong>Starter</strong> at £19.99/month,
            and <strong>Pro</strong> at £49.99/month. All prices are in GBP and exclusive of VAT where applicable.
            Subscriptions renew automatically unless cancelled before the renewal date.
            Billing is handled by Stripe. We do not store your card details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">4. Cancellation & refunds</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            You may cancel your subscription at any time from account settings. Access continues until the end of
            the current billing period. We do not provide refunds for partial billing periods except where required
            by applicable UK consumer law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">5. Acceptable use</h2>
          <p className="text-[#9A9AA8] leading-relaxed">You agree not to:</p>
          <ul className="list-disc pl-5 text-[#9A9AA8] leading-relaxed flex flex-col gap-1 mt-2">
            <li>Use Shift Bestie for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to other accounts or our infrastructure</li>
            <li>Upload content that is defamatory, discriminatory, or harmful</li>
            <li>Reverse engineer or copy any part of the app or its code</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">6. Intellectual property</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            All intellectual property in Shift Bestie — including code, design, trademarks, and content —
            belongs to Pulsar Labs Ltd. We grant you a limited, non-exclusive, non-transferable licence
            to use the app for its intended purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">7. Limitation of liability</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            To the fullest extent permitted by law, Pulsar Labs Ltd is not liable for any indirect, incidental,
            or consequential loss arising from your use of Shift Bestie. Our total liability to you shall not
            exceed the amount you paid us in the 12 months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">8. Availability</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            We aim to provide a reliable service but do not guarantee uninterrupted availability. We may perform
            maintenance or updates that temporarily affect access and will try to notify users in advance where possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">9. Changes to these Terms</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            We may update these Terms from time to time. We will notify you of material changes via the app or email
            at least 14 days before they take effect. Continued use after that date constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">10. Governing law</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the
            exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">11. Contact</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            Questions about these Terms?{" "}
            <a href="mailto:hello@shiftbestie.co.uk" className="text-[#FF6B6B] hover:underline">
              hello@shiftbestie.co.uk
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
