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

          <h2 className="font-display text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing or using the Joy Plus application and website, you agree to be bound by these Terms and Conditions and our Privacy Policy.</p>

          <h2 className="font-display text-xl font-bold text-foreground">2. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials. You must be at least 18 years old to use our services.</p>

          <h2 className="font-display text-xl font-bold text-foreground">3. User Conduct</h2>
          <p>You agree to use Joy Plus responsibly, respect other travelers, and not engage in any unlawful or harmful activities through our platform.</p>

          <h2 className="font-display text-xl font-bold text-foreground">4. Limitation of Liability</h2>
          <p>Joy Plus provides travel information and connections as-is. We are not liable for any damages or losses arising from your use of our platform or interactions with other users.</p>

          <h2 className="font-display text-xl font-bold text-foreground">5. Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of Joy Plus after changes constitutes acceptance of the updated terms.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
