import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">Last updated: February 9, 2026</p>
          
          <h2 className="font-display text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, and travel preferences when you create an account or contact us. We also collect usage data including app interactions, device information, and location data (with your permission).</p>

          <h2 className="font-display text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>We use your information to provide and improve our services, connect you with other travelers, personalize your experience, and ensure the safety features work properly. We never sell your personal data to third parties.</p>

          <h2 className="font-display text-xl font-bold text-foreground">3. Data Security</h2>
          <p>We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information.</p>

          <h2 className="font-display text-xl font-bold text-foreground">4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data at any time. You can also opt out of certain data collection practices through your account settings.</p>

          <h2 className="font-display text-xl font-bold text-foreground">5. Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at privacy@wandr.app.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
