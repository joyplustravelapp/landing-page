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
          
          {/* 
            TO EDIT: Replace the placeholder sections below with your actual privacy policy content.
            Each <h2> is a section heading and each <p> is the section body.
            You can add, remove, or modify sections as needed.
          */}

          <h2 className="font-display text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>[Add your privacy policy content here — describe what personal information you collect from users, including data collected automatically and data users provide directly.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>[Add details about how you use the collected information — service delivery, personalization, communication, analytics, etc.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">3. Data Sharing & Third Parties</h2>
          <p>[Describe if and when you share data with third parties, including service providers, legal obligations, etc.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">4. Data Security</h2>
          <p>[Explain the security measures you implement to protect user data.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">5. Your Rights</h2>
          <p>[Describe user rights regarding their data — access, correction, deletion, portability, etc.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">6. Cookies & Tracking</h2>
          <p>[Explain your use of cookies, analytics tools, and tracking technologies.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">7. Children's Privacy</h2>
          <p>[State your policy regarding children's data and age requirements.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">8. Changes to This Policy</h2>
          <p>[Explain how you will notify users of policy changes.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">9. Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
