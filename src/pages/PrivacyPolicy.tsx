import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last Updated: May 26, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <p>
            This Privacy Policy explains how JoyPlus OÜ ("Joy+," "we," "us," or "our"), a company registered in Estonia under registry code 17205999, with its registered office at Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5, 10117, collects, uses, stores, and protects your personal data when you use the Joy+ mobile application, website (<a href="https://joyplustravelapp.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">joyplustravelapp.com</a>), and any related services (collectively, the "Services").
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Data Controller</h2>
            <p>JoyPlus OÜ is the data controller responsible for your personal data. For questions or requests regarding this Privacy Policy, contact our Data Protection Officer at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Data You Provide</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Account Information:</strong> Name, email address, password, profile photo, and other details you provide during registration.</li>
              <li><strong className="text-foreground">Booking Information:</strong> Travel preferences, booking details, payment information, and transaction history.</li>
              <li><strong className="text-foreground">Communications:</strong> Messages, reviews, support inquiries, and feedback you submit through the Services.</li>
              <li><strong className="text-foreground">Profile Data:</strong> Travel interests, destinations, bio, and other optional information you share on your profile.</li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Data Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Device Information:</strong> Device type, operating system, unique device identifiers, app version, and mobile network information.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Pages visited, links clicked, time spent on the Services, search queries, and interactions with content.</li>
              <li><strong className="text-foreground">Location Information:</strong> Approximate location based on IP address or, with your consent, precise location via GPS for features like traveler matching or safety check-ins.</li>
              <li><strong className="text-foreground">Cookies and Tracking Technologies:</strong> We use cookies, pixels, and similar technologies (e.g., Google Analytics, Apple's App Analytics) to collect data about your interactions with the Services.</li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Data from Third Parties</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Third-Party Providers:</strong> Booking confirmations, cancellation details, or service-related information from tour operators, hostel providers, or eSIM vendors.</li>
              <li><strong className="text-foreground">Social Media or Authentication Services:</strong> If you log in via third-party services (e.g., Sign in with Google, Sign in with Apple), we may receive your name, email, or profile information.</li>
              <li><strong className="text-foreground">Partners:</strong> Information from marketing or analytics partners to enhance our Services or deliver targeted ads.</li>
            </ul>

            <p className="mt-3">We do not collect special categories of personal data (e.g., health, religion, or political opinions) unless voluntarily provided for specific purposes (e.g., accessibility requests during bookings).</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Purposes and Legal Bases for Processing</h2>
            <p className="mb-3">We process your personal data for specific purposes, each supported by a legal basis under GDPR:</p>

            <div className="space-y-3">
              <div>
                <h3 className="font-display font-semibold text-foreground">To Provide and Operate the Services</h3>
                <p>Create and manage your account, facilitate bookings, process payments, enable traveler matching, provide messaging features, and deliver safety tools. <span className="text-xs text-muted-foreground italic">Legal Basis: Performance of a contract (Article 6(1)(b) GDPR).</span></p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">To Communicate with You</h3>
                <p>Send booking confirmations, service updates, refund notifications, or responses to support inquiries. <span className="text-xs text-muted-foreground italic">Legal Basis: Performance of a contract or legitimate interests (Article 6(1)(b)/(f) GDPR).</span></p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">To Personalize Your Experience</h3>
                <p>Recommend travel services, match you with travelers, and tailor content or ads. <span className="text-xs text-muted-foreground italic">Legal Basis: Consent (Article 6(1)(a) GDPR) or legitimate interests (Article 6(1)(f) GDPR).</span></p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">To Improve and Analyze the Services</h3>
                <p>Use analytics tools to monitor performance, identify bugs, understand user behavior, and optimize the app's functionality. <span className="text-xs text-muted-foreground italic">Legal Basis: Legitimate interests (Article 6(1)(f) GDPR).</span></p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">To Ensure Safety and Security</h3>
                <p>Verify identities, detect and prevent fraud, monitor for inappropriate content, and provide safety features. <span className="text-xs text-muted-foreground italic">Legal Basis: Legitimate interests or legal obligations (Article 6(1)(c)/(f) GDPR).</span></p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">To Market Our Services</h3>
                <p>Send promotional emails, newsletters, or offers about travel deals or new features. <span className="text-xs text-muted-foreground italic">Legal Basis: Consent (Article 6(1)(a) GDPR) or legitimate interests (Article 6(1)(f) GDPR).</span></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Data Sharing and Disclosure</h2>
            <p className="mb-3">We share your personal data only when necessary:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Third-Party Providers:</strong> To fulfill bookings, we share relevant data (e.g., name, contact details, booking preferences) with tour operators, hostel providers, eSIM vendors, or partners.</li>
              <li><strong className="text-foreground">Service Providers:</strong> Payment processors (e.g., Stripe, Google Pay, Apple Pay), analytics providers (e.g., Google Analytics), cloud storage providers, and communication tools.</li>
              <li><strong className="text-foreground">Other Users:</strong> If you use social features (e.g., traveler matching, messaging), certain data may be visible to other users based on your privacy settings.</li>
              <li><strong className="text-foreground">Legal and Regulatory Authorities:</strong> We may disclose data to comply with legal obligations, such as court orders, tax authorities, or law enforcement requests.</li>
              <li><strong className="text-foreground">Business Transfers:</strong> In a merger, acquisition, or asset sale, your data may be transferred to a successor entity.</li>
            </ul>
            <p className="mt-3">We do not sell your personal data. International data transfers use GDPR-approved mechanisms such as Standard Contractual Clauses (SCCs) or adequacy decisions.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Data Retention</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Account and Booking Data:</strong> Retained for the duration of your account or booking, plus up to 7 years for Estonian tax and accounting laws or dispute resolution.</li>
              <li><strong className="text-foreground">Support Communications:</strong> Retained for up to 3 years to document inquiries.</li>
              <li><strong className="text-foreground">Analytics Data:</strong> Retained in aggregated or anonymized form for up to 26 months.</li>
              <li><strong className="text-foreground">Marketing Data:</strong> Retained until you withdraw consent or opt out.</li>
            </ul>
            <p className="mt-3">If you delete your account, we erase your data within 30 days, except for legally required data.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Data Security</h2>
            <p>We implement technical and organizational measures to protect your data, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Encryption of data in transit (e.g., SSL/TLS) and at rest where feasible.</li>
              <li>Secure authentication for account access.</li>
              <li>Regular security assessments and system updates.</li>
              <li>Access controls for authorized personnel only.</li>
              <li>Data processing agreements (DPAs) with third-party processors.</li>
            </ul>
            <p className="mt-3">In case of a data breach, we will notify you and the Estonian Data Protection Inspectorate within 72 hours, per GDPR Article 33.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Your Data Protection Rights</h2>
            <p className="mb-3">Under GDPR, you have the following rights:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Right of Access:</strong> Request a copy of your personal data and processing details.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> Correct inaccurate data, updateable in the app or via support.</li>
              <li><strong className="text-foreground">Right to Erasure ("Right to Be Forgotten"):</strong> Request data deletion, subject to exceptions (e.g., legal retention).</li>
              <li><strong className="text-foreground">Right to Restriction:</strong> Limit processing in certain cases.</li>
              <li><strong className="text-foreground">Right to Data Portability:</strong> Receive or transfer your data in a machine-readable format.</li>
              <li><strong className="text-foreground">Right to Object:</strong> Object to processing based on legitimate interests (e.g., analytics, marketing).</li>
              <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Withdraw consent for marketing or location data via app settings or by contacting us.</li>
              <li><strong className="text-foreground">Right to Lodge a Complaint:</strong> File a complaint with the Estonian Data Protection Inspectorate (<a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a>) or your local EU authority.</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a>. We respond within one month, per GDPR Article 12.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Cookies and Tracking Technologies</h2>
            <p>We use cookies, pixels, and similar technologies to enhance functionality, analyze usage, and deliver personalized content. Our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> details the types, purposes, and management options for these technologies. You can adjust cookie settings via the app or website, and we obtain consent for non-essential cookies per the EU e-Privacy Directive.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Children's Privacy</h2>
            <p>The Services are not intended for users under 18 or the age of majority in their jurisdiction. We do not knowingly collect children's data. If we detect such data, we delete it promptly. Contact us at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a> if you believe a child has provided data.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">10. International Users</h2>
            <p>Joy+ operates primarily in the EU, with data practices compliant with GDPR. If you access the Services from outside the EU, your data is processed in Estonia and may be transferred to other jurisdictions. International transfers use GDPR-approved mechanisms (e.g., SCCs, adequacy decisions). By using the Services, you consent to these transfers.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy to reflect changes in practices, laws, or platform requirements. Updates will be posted on the app and website with a revised "Last Updated" date. Material changes will be notified via email or in-app notifications. Continued use of the Services after updates constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">12. Contact Information</h2>
            <p className="mb-2">For questions, requests, or complaints about this Privacy Policy or data practices, contact our Data Protection Officer:</p>
            <div className="glass rounded-xl p-5 space-y-1.5 text-sm">
              <p className="font-semibold text-foreground">JoyPlus OÜ</p>
              <p>Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5, 10117, Estonia</p>
              <p>Email: <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a></p>
              <p>Website: <a href="https://joyplustravelapp.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">joyplustravelapp.com</a></p>
            </div>
            <p className="mt-3 text-sm">You may also reach the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon) at <a href="mailto:info@aki.ee" className="text-primary hover:underline">info@aki.ee</a> or <a href="https://www.aki.ee" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aki.ee</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
