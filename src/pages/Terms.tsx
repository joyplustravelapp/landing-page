import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">Last updated: February 9, 2026</p>

          {/* 
            TO EDIT: Replace the placeholder sections below with your actual terms & conditions.
            Each <h2> is a section heading and each <p> is the section body.
            You can add, remove, or modify sections as needed.
          */}

          <h2 className="font-display text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>[Add your terms content here — describe the conditions users accept by using Joy Plus.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">2. User Accounts</h2>
          <p>[Describe account responsibilities, age requirements, and credential security.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">3. User Conduct</h2>
          <p>[Outline acceptable and prohibited behaviors on the platform.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">4. Intellectual Property</h2>
          <p>[Describe ownership of content, trademarks, and user-generated content rights.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">5. Limitation of Liability</h2>
          <p>[Explain limitations on your liability for damages arising from platform use.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">6. Termination</h2>
          <p>[Describe conditions under which accounts may be suspended or terminated.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">7. Governing Law</h2>
          <p>[Specify the jurisdiction and governing law for these terms.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">8. Changes to Terms</h2>
          <p>[Explain how users will be notified of changes to these terms.]</p>

          <h2 className="font-display text-xl font-bold text-foreground">9. Contact Us</h2>
          <p>If you have questions about these terms, please contact us at <a href="mailto:support@joyplustravelapp.com" className="text-primary hover:underline">support@joyplustravelapp.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
