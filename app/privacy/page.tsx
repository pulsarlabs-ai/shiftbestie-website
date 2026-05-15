export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-black text-[#1A1A2E] mb-2">Privacy Policy</h1>
      <p className="text-sm text-[#9A9AA8] mb-10">Last updated: 13 May 2026</p>

      <div className="prose prose-slate max-w-none flex flex-col gap-8 text-[#1A1A2E]">

        <section>
          <h2 className="text-xl font-bold mb-2">1. Who we are</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            Shift Bestie is operated by <strong>Pulsar Labs Ltd</strong>, a company incorporated in England and Wales
            (Companies House number 17211762), with its registered address at 405A North End Road, London, SW6 1NS.
            We are the data controller for personal data processed through the Shift Bestie app and website.
            Contact us at <a href="mailto:hello@shiftbestie.co.uk" className="text-[#FF6B6B] hover:underline">hello@shiftbestie.co.uk</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">2. Data we collect</h2>
          <ul className="list-disc pl-5 text-[#9A9AA8] leading-relaxed flex flex-col gap-1">
            <li><strong>Account data:</strong> name, email address, phone number (optional), role (admin or worker)</li>
            <li><strong>Employment data:</strong> hourly rate, hours worked, shift history, payment records</li>
            <li><strong>Usage data:</strong> shift assignments, cover requests, event attendance</li>
            <li><strong>Device data:</strong> push notification token (FCM) when notifications are enabled</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">3. Lawful basis</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            We process your data on the basis of <strong>contract performance</strong> — the data is necessary to
            provide the Shift Bestie service you have signed up for. Financial records are retained for
            <strong> 7 years</strong> to comply with UK tax and accounting law (HMRC requirement).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">4. How we use your data</h2>
          <ul className="list-disc pl-5 text-[#9A9AA8] leading-relaxed flex flex-col gap-1">
            <li>Providing shift scheduling, cover request, and payroll features</li>
            <li>Sending push notifications about shifts and schedule changes</li>
            <li>Allowing admins to manage and view their team roster</li>
            <li>Responding to support requests sent to hello@shiftbestie.co.uk</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">5. Data processors</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            We use the following third-party processors. Each operates under a Data Processing Agreement with Pulsar Labs Ltd:
          </p>
          <ul className="list-disc pl-5 text-[#9A9AA8] leading-relaxed flex flex-col gap-1 mt-2">
            <li><strong>Google Firebase</strong> (Authentication, Firestore, Cloud Messaging) — data stored in europe-west2 (London)</li>
            <li><strong>Apple Inc.</strong> — iOS app distribution and push notification delivery</li>
            <li><strong>Stripe Inc.</strong> — subscription billing (when applicable)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">6. Data retention</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            Account and profile data is retained while your account is active and deleted within 30 days of account
            deletion. Financial records (payment records, shift earnings) are retained for 7 years from the transaction
            date as required by HMRC. Push notification tokens are removed when you delete your account or revoke
            notification permissions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">7. Your rights</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            Under UK GDPR you have the right to: access your data, correct inaccurate data, request erasure
            (subject to legal retention obligations), restrict or object to processing, and data portability.
            To exercise any right, email <a href="mailto:hello@shiftbestie.co.uk" className="text-[#FF6B6B] hover:underline">hello@shiftbestie.co.uk</a>.
            You can delete your account at any time from within the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">8. Complaints</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            If you believe we have handled your data unlawfully, you have the right to complain to the
            Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" className="text-[#FF6B6B] hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">9. Changes to this policy</h2>
          <p className="text-[#9A9AA8] leading-relaxed">
            We may update this policy from time to time. Material changes will be notified via the app or by email.
            Continued use of Shift Bestie after changes constitutes acceptance of the updated policy.
          </p>
        </section>

      </div>
    </div>
  );
}
