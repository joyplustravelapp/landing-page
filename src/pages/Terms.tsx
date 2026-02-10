import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <SEO
        title="Terms & Conditions"
        description="Review Joy Plus's terms and conditions. Understand the rules and guidelines for using our travel companion platform."
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground text-sm mb-10">Last Updated: May 26, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <p>
            Welcome to Joy+ (the "App"), operated by JoyPlus OÜ, a company registered in Estonia under registry code 17205999, with its registered office at Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5, 10117. These Terms and Conditions ("Terms") govern your access to and use of the Joy+ mobile application, website (<a href="https://joyplustravelapp.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">joyplustravelapp.com</a>), and any related services (collectively, the "Services"). By downloading, accessing, or using the Services, you agree to be bound by these Terms, which form a legally binding agreement between you ("User," "you," or "your") and JoyPlus OÜ ("Joy+," "we," "us," or "our").
          </p>
          <p>
            Joy+ is a platform that connects travelers with third-party providers offering tours, excursions, accommodations (e.g., hostels), eSIM cards, and related travel services. We also facilitate social features, such as matching travelers, enabling real-time communication, and providing safety tools. These Terms apply to all Users, including travelers, registered account holders, and guests browsing the Services.
          </p>
          <p>
            If you do not agree with these Terms, you must not access or use the Services. We recommend reading these Terms carefully, as they include important information about your rights, obligations, and the limitations of our liability.
          </p>

          {/* 1. Scope of Services */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Scope of Services</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">1.1 Platform Overview</h3>
            <p className="mb-2">Joy+ is an intermediary platform that enables Users to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Discover and book tours, excursions, accommodations, and eSIM cards offered by third-party providers.</li>
              <li>Connect with other travelers for social travel experiences, including matching based on destination, interests, or travel plans.</li>
              <li>Communicate in real-time with other Users by city, hostel, or shared interests.</li>
              <li>Build a traveler profile, write reviews, and manage privacy settings.</li>
              <li>Access safety features, such as check-in tools and plan-sharing capabilities.</li>
              <li>Benefit from exclusive perks, deals, and discounts on travel-related services.</li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">1.2 Intermediary Role</h3>
            <p>Joy+ acts solely as an intermediary between Users and third-party providers. We do not own, operate, or control the tours, excursions, accommodations, or eSIM cards offered through the Services. All bookings are subject to the terms, conditions, and policies of the respective third-party providers. Joy+ is not responsible for the performance, quality, or availability of third-party services.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">1.3 Eligibility</h3>
            <p className="mb-2">To use the Services, you must:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Be at least 18 years of age or the age of majority in your jurisdiction.</li>
              <li>Have the legal capacity to enter into binding agreements.</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction.</li>
            </ul>
          </section>

          {/* 2. User Accounts */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">2. User Accounts</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">2.1 Account Creation</h3>
            <p>To access certain features of the Services (e.g., booking, messaging, or profile creation), you must create a Joy+ account by providing accurate, complete, and up-to-date information, including your name, email address, and other required details. You agree to maintain the accuracy of your account information and to notify us promptly of any changes.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">2.2 Account Security</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials (e.g., username and password). You agree to notify us immediately at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a> if you suspect unauthorized access to or use of your account. Joy+ is not liable for any loss or damage arising from your failure to safeguard your account.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">2.3 Account Suspension or Termination</h3>
            <p>We reserve the right to suspend or terminate your account at our sole discretion, with or without notice, if you violate these Terms, engage in fraudulent or unlawful activity, or for any other reason deemed necessary to protect the integrity of the Services or other Users.</p>
          </section>

          {/* 3. Bookings and Transactions */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Bookings and Transactions</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">3.1 Booking Process</h3>
            <p>When you book a tour, excursion, accommodation, eSIM card, or other service through Joy+, you enter into a direct contractual relationship with the third-party provider offering that service. Joy+ facilitates the booking process but is not a party to the agreement between you and the provider. Before confirming a booking, you will be shown the provider's terms, including pricing, cancellation policies, and refund policies, which you must accept.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">3.2 Pricing and Payments</h3>
            <p>All prices displayed on the Services are set by third-party providers and may include taxes, fees, or other charges as indicated. Joy+ may charge a service fee for facilitating bookings, which will be clearly disclosed at the time of booking. Payments are processed through secure third-party payment processors. You agree to provide accurate payment information and authorize us (or our payment processors) to charge the total amount for your booking.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">3.3 Currency and Taxes</h3>
            <p>Prices may be displayed in multiple currencies for convenience. The final transaction currency will be confirmed at checkout. You are responsible for any applicable taxes, duties, or fees imposed by your jurisdiction or the provider's jurisdiction.</p>
          </section>

          {/* 4. Refund and Cancellation Policy */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Refund and Cancellation Policy</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">4.1 Third-Party Provider Policies</h3>
            <p>All bookings made through Joy+ are subject to the cancellation and refund policies of the respective third-party provider. These policies are displayed to you before confirming a booking and may vary depending on the provider, service, or booking conditions. Joy+ does not determine or guarantee refund amounts or eligibility on behalf of third-party providers.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">4.2 Provider-Initiated Cancellations</h3>
            <p>If a third-party provider cancels your booking for any reason (e.g., weather, operational issues, low attendance), you are entitled to a full refund or platform credit, as determined by the provider's terms. Joy+ will assist in facilitating the resolution with the provider on your behalf but is not responsible for the provider's decision or actions.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">4.3 User-Initiated Cancellations</h3>
            <p>If you cancel a booked service or fail to attend (e.g., no-show), any refund will be subject to the provider's stated cancellation policy. Joy+ will not issue refunds for late cancellations or no-shows unless expressly authorized by the provider.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">4.4 Dispute Resolution</h3>
            <p>In the event of a disagreement or issue regarding a booking, Joy+ will act as an intermediary to facilitate communication between you and the provider. We will strive to resolve matters fairly and efficiently, but the final decision regarding refunds or cancellations rests with the third-party provider.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">4.5 Refund Process</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Refund requests must be submitted to Joy+ via <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a> within 48 hours of the scheduled service date.</li>
              <li>Our support team will respond to all refund inquiries within 72 hours.</li>
              <li>Approved refunds are typically processed within 5–10 business days, depending on the provider's policies and payment processing timelines.</li>
              <li>Refunds will be issued to the original payment method unless otherwise agreed.</li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">4.6 Platform Credits</h3>
            <p>In some cases, providers may offer platform credits instead of monetary refunds. Platform credits are non-transferable, valid for a limited period (as specified), and can only be used for bookings on the Joy+ platform.</p>
          </section>

          {/* 5. User Conduct */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">5. User Conduct and Responsibilities</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">5.1 Acceptable Use</h3>
            <p className="mb-2">You agree to use the Services in a lawful, respectful, and responsible manner. Prohibited activities include, but are not limited to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Engaging in fraudulent, deceptive, or misleading behavior.</li>
              <li>Posting or sharing content that is offensive, defamatory, discriminatory, or violates the rights of others.</li>
              <li>Attempting to interfere with the security, functionality, or integrity of the Services (e.g., hacking, introducing malware).</li>
              <li>Using the Services for commercial purposes without our prior written consent.</li>
              <li>Harassing, threatening, or harming other Users or third-party providers.</li>
            </ul>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">5.2 User-Generated Content</h3>
            <p>You may create and share content through the Services, such as reviews, profiles, or messages. You retain ownership of your content but grant Joy+ a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, and display your content in connection with operating and promoting the Services. You represent that your content does not infringe on the rights of others or violate applicable laws.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">5.3 Compliance with Local Laws</h3>
            <p>You are responsible for ensuring that your use of the Services, including bookings and interactions with other Users, complies with all applicable laws, regulations, and customs in your jurisdiction and the jurisdiction where services are provided.</p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Intellectual Property</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">6.1 Ownership</h3>
            <p>The Services, including all content, trademarks, logos, designs, and software, are owned by JoyPlus OÜ or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or reproduce any part of the Services without our prior written consent.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">6.2 Limited License</h3>
            <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial purposes, subject to these Terms.</p>
          </section>

          {/* 7. Privacy */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Privacy and Data Protection</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">7.1 Privacy Policy</h3>
            <p>Your use of the Services is subject to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which governs how we collect, use, and protect your personal data. By using the Services, you consent to our data practices as described in the Privacy Policy.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">7.2 GDPR Compliance</h3>
            <p>As a company registered in Estonia and operating across the European Union, Joy+ complies with the General Data Protection Regulation (EU) 2016/679 ("GDPR"). We process personal data lawfully, transparently, and in accordance with your rights under GDPR.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">7.3 Cookies</h3>
            <p>The Services use cookies and similar technologies to enhance functionality and analyze usage. Our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> provides details on how we use these technologies and your choices regarding them.</p>
          </section>

          {/* 8. Liability */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Liability and Disclaimers</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">8.1 As-Is Basis</h3>
            <p>The Services are provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Services will be uninterrupted, error-free, or secure.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">8.2 Third-Party Services</h3>
            <p>Joy+ is not responsible for the acts, omissions, or performance of third-party providers. We do not guarantee the availability, quality, safety, or legality of any tours, excursions, accommodations, eSIM cards, or other services booked through the platform.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">8.3 Limitation of Liability</h3>
            <p>To the maximum extent permitted by law, JoyPlus OÜ, its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, consequential, or punitive damages arising from or related to your use of the Services. Our total liability for any claim shall not exceed the amount you paid to us for the specific service giving rise to the claim.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">8.4 Indemnification</h3>
            <p>You agree to indemnify and hold JoyPlus OÜ harmless from any claims, losses, damages, or expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.</p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Termination</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">9.1 Termination by You</h3>
            <p>You may stop using the Services at any time and delete your account by contacting us at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a>. Deleting your account does not affect any pending bookings or obligations to third-party providers.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">9.2 Termination by Joy+</h3>
            <p>We may terminate or suspend your access to the Services at any time, with or without notice, for any reason, including violation of these Terms or applicable law.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">9.3 Effect of Termination</h3>
            <p>Upon termination, your right to access the Services will cease, but any provisions of these Terms that by their nature should survive (e.g., liability, indemnification, governing law) will remain in effect.</p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Governing Law and Dispute Resolution</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">10.1 Governing Law</h3>
            <p>These Terms and your use of the Services are governed by the laws of Estonia, without regard to its conflict of law principles. Certain provisions may also be subject to EU regulations, including consumer protection laws and GDPR.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">10.2 Dispute Resolution</h3>
            <p>Any disputes arising from these Terms or the Services shall be resolved through good-faith negotiations. If a resolution cannot be reached, disputes shall be submitted to the exclusive jurisdiction of the courts of Tallinn, Estonia, unless otherwise required by applicable EU consumer protection laws.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">10.3 Consumer Rights</h3>
            <p>If you are a consumer residing in the EU, you may have additional rights under EU consumer protection laws, including the right to withdraw from certain transactions within 14 days (subject to exceptions for travel services). For more information, contact us or consult the European Consumer Centre in your country.</p>
          </section>

          {/* 11. Miscellaneous */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Miscellaneous</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">11.1 Entire Agreement</h3>
            <p>These Terms, together with our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>, constitute the entire agreement between you and JoyPlus OÜ regarding the Services.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">11.2 Amendments</h3>
            <p>We may update these Terms at any time by posting the revised version on the App or website. Changes will take effect immediately upon posting, and your continued use of the Services constitutes acceptance of the updated Terms.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">11.3 Severability</h3>
            <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">11.4 Assignment</h3>
            <p>You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign these Terms to an affiliate or successor in the event of a merger, acquisition, or sale of assets.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">11.5 Force Majeure</h3>
            <p>Joy+ shall not be liable for any failure to perform our obligations due to events beyond our reasonable control, including natural disasters, pandemics, or governmental actions.</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">11.6 Contact Information</h3>
            <p className="mb-2">For questions, support, or complaints, please contact us at:</p>
            <div className="glass rounded-xl p-5 space-y-1.5 text-sm">
              <p className="font-semibold text-foreground">JoyPlus OÜ</p>
              <p>Email: <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a></p>
              <p>Website: <a href="https://joyplustravelapp.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">joyplustravelapp.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
