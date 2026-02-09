import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/joy-plus-logo.jpg";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.svg";

const APP_STORE_URL = "https://apps.apple.com/fr/app/joy-plus-find-travel-friends/id6746488482?l=en-GB";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.joyplus.travel&pcampaignid=web_share";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/joyplustravelapp/", label: "Instagram" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/Joyplus_travel",
    label: "X (Twitter)",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.88a8.18 8.18 0 0 0 4.76 1.52V6.94a4.84 4.84 0 0 1-1-.25z" />
      </svg>
    ),
    href: "https://www.tiktok.com/@joyplustravelapp",
    label: "TikTok",
  },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Joy Plus" className="w-10 h-10 rounded-xl object-cover" />
              <h3 className="font-display text-2xl font-bold text-foreground">
                Joy Plus
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              The all-in-one platform for backpackers & digital nomads. Connect, explore, and travel safely — wherever your journey takes you.
            </p>
            <div className="flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="btn-press w-10 h-10 rounded-xl glass flex items-center justify-center hover:shadow-glow hover:text-primary transition-all duration-300 text-muted-foreground"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
            <div className="space-y-2.5">
              <a href="#why" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">About</a>
              <a href="#blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Blog</a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Download</h4>
            <div className="space-y-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-press block h-10 w-32 hover:shadow-glow transition-all duration-300 rounded-lg overflow-hidden">
                <img src={appStoreBadge} alt="Download on the App Store" className="h-full" />
              </a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="btn-press block h-10 w-36 hover:shadow-glow transition-all duration-300 rounded-lg overflow-hidden">
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Joy Plus. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
