import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last Updated: May 26, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <p>
            This Cookie Policy explains how JoyPlus OÜ ("Joy+," "we," "us," or "our") uses cookies, pixels, and similar tracking technologies when you access or use the Joy+ mobile application, website (<a href="https://joyplustravelapp.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">joyplustravelapp.com</a>), and related services (collectively, the "Services"). This policy should be read in conjunction with our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website or use an app. They help remember your preferences, improve your experience, and provide us with usage information. "Similar technologies" include pixels, local storage, and SDKs used in mobile apps.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Types of Cookies We Use</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Essential Cookies</h3>
                <p>These are necessary for the Services to function properly. They enable core features like secure logins, payment processing (e.g., via Google Pay or Apple Pay), and bookings. Essential Cookies cannot be disabled without affecting the Services. <span className="text-xs italic">Legal Basis: Legitimate interests (GDPR Article 6(1)(f)).</span></p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Functional Cookies</h3>
                <p>These save your preferences and settings, such as language or profile visibility, to provide a seamless experience. We obtain consent for Functional Cookies through a consent banner or in-app settings. <span className="text-xs italic">Legal Basis: Consent (GDPR Article 6(1)(a)).</span></p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Analytics Cookies</h3>
                <p>These Cookies, including tools like Google Analytics and Apple's App Analytics, collect aggregated or anonymized data about how you use the Services—pages visited, time spent, or feature interactions. They help us identify bugs, optimize performance, and understand user trends. <span className="text-xs italic">Legal Basis: Consent (GDPR Article 6(1)(a)).</span></p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Advertising Cookies</h3>
                <p>These Cookies track your interactions with ads or content to deliver personalized offers, such as exclusive travel deals or perks. They may also measure ad performance. Advertising Cookies are subject to strict consent requirements. For iOS users, we request consent via Apple's ATT prompt for cross-app tracking. <span className="text-xs italic">Legal Basis: Consent (GDPR Article 6(1)(a)).</span></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Purposes of Cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">To Operate the Services:</strong> Essential Cookies enable secure logins, payment processing, and bookings.</li>
              <li><strong className="text-foreground">To Enhance User Experience:</strong> Functional Cookies save your preferences and settings for a seamless experience.</li>
              <li><strong className="text-foreground">To Analyze and Improve Performance:</strong> Analytics Cookies provide insights into user behavior, helping us fix issues and optimize features.</li>
              <li><strong className="text-foreground">To Deliver Personalized Content and Ads:</strong> Advertising Cookies enable relevant offers and measure ad effectiveness.</li>
              <li><strong className="text-foreground">To Ensure Security:</strong> Essential Cookies support security features, such as detecting fraudulent logins.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Third Parties and Cookie Sharing</h2>
            <p className="mb-3">Some Cookies are set by third parties to provide services on our behalf, in compliance with GDPR Article 28:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Analytics Providers:</strong> Google Analytics and Apple's App Analytics to collect usage data, processed under data processing agreements (DPAs).</li>
              <li><strong className="text-foreground">Advertising Partners:</strong> Pixels or similar technologies from advertising partners to deliver targeted ads or measure campaign performance.</li>
              <li><strong className="text-foreground">Payment and Service Providers:</strong> Essential Cookies from payment processors (e.g., Stripe, Google Pay, Apple Pay) to facilitate secure transactions.</li>
              <li><strong className="text-foreground">Cloud and Infrastructure Providers:</strong> Cookies used by cloud providers to support data storage or app functionality.</li>
            </ul>
            <p className="mt-3">We do not sell your data or share it with third parties for their own purposes. Any data shared via Cookies is subject to GDPR-approved safeguards, such as Standard Contractual Clauses (SCCs).</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Your Choices and Consent</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Consent for Non-Essential Cookies</h3>
            <p>When you first access the Services, we display a consent banner (on the website) or in-app prompt (on the app) to obtain your consent for Functional, Analytics, and Advertising Cookies. You can accept, reject, or customize your preferences.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Withdrawing Consent</h3>
            <p>You can withdraw consent for non-essential Cookies at any time by adjusting your settings in the app or on our website. Withdrawing consent does not affect the lawfulness of prior data processing.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Disabling Cookies</h3>
            <p className="mb-2">You can disable Cookies through your device or browser settings. For example:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <p className="mt-2">Note that disabling Essential Cookies may prevent the Services from functioning properly.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Do Not Track Signals</h3>
            <p>Our Services do not currently respond to "Do Not Track" browser signals, but you can manage Cookies via our consent tools or device settings.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Platform-Specific Controls</h3>
            <p>iOS users can use Apple's ATT framework to limit tracking. Android users can manage app permissions via device settings.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Data Retention for Cookies</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Essential Cookies:</strong> Stored for the duration of your session or until you log out.</li>
              <li><strong className="text-foreground">Functional Cookies:</strong> Retained until you change your preferences or delete your account, typically up to 1 year.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> Retained for up to 26 months in aggregated or anonymized form.</li>
              <li><strong className="text-foreground">Advertising Cookies:</strong> Stored until you withdraw consent or for up to 13 months.</li>
            </ul>
            <p className="mt-3">When Cookies are no longer needed, they are deleted or anonymized. If you delete your account, associated Cookie data is removed within 30 days, except where required for legal purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Data Security</h2>
            <p>We protect Cookie data with technical and organizational measures, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Encryption of data in transit (e.g., SSL/TLS).</li>
              <li>Secure storage of Cookie data.</li>
              <li>Regular security assessments.</li>
              <li>DPAs with third-party providers.</li>
            </ul>
            <p className="mt-3">If a data breach involving Cookie data occurs, we will notify you and the Estonian Data Protection Inspectorate within 72 hours, per GDPR Article 33.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Your Data Protection Rights</h2>
            <p className="mb-3">Under GDPR, you have rights related to Cookie data:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Right of Access:</strong> Request details about Cookies and related data we collect.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> Correct inaccurate data linked to Cookies.</li>
              <li><strong className="text-foreground">Right to Erasure:</strong> Request deletion of Cookie data, subject to legal retention requirements.</li>
              <li><strong className="text-foreground">Right to Object:</strong> Object to Cookie-based processing, manageable via consent settings.</li>
              <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Revoke consent for non-essential Cookies via app or website settings.</li>
              <li><strong className="text-foreground">Right to Lodge a Complaint:</strong> Contact the Estonian Data Protection Inspectorate (<a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a>) or your local EU authority.</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a>. We respond within one month, per GDPR Article 12.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">9. International Data Transfers</h2>
            <p>Cookie data may be transferred to non-EU countries (e.g., for Google Analytics processing), subject to GDPR-approved mechanisms like Standard Contractual Clauses or adequacy decisions.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Changes to This Cookie Policy</h2>
            <p>We may update this Cookie Policy to reflect changes in our practices, laws, or platform requirements. Updates will be posted on the app and website with a revised "Last Updated" date. Material changes will be notified via email or in-app notifications. Continued use of the Services after updates constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Contact Information</h2>
            <p className="mb-2">For questions or complaints about this Cookie Policy, contact our Data Protection Officer:</p>
            <div className="glass rounded-xl p-5 space-y-1.5 text-sm">
              <p className="font-semibold text-foreground">JoyPlus OÜ</p>
              <p>Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5, 10117, Estonia</p>
              <p>Email: <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a></p>
              <p>Website: <a href="https://joyplustravelapp.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">joyplustravelapp.com</a></p>
            </div>
            <p className="mt-3 text-sm">You may also reach the Estonian Data Protection Inspectorate at <a href="mailto:info@aki.ee" className="text-primary hover:underline">info@aki.ee</a> or <a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
