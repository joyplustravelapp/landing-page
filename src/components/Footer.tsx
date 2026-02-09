import { Instagram, Twitter, Youtube, Facebook, Apple, Play } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-3">
              Wandr<span className="text-secondary">.</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-sm mb-6">
              The all-in-one platform for solo travelers. Connect, explore, and travel safely — wherever your journey takes you.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Company</h4>
            <div className="space-y-2.5">
              <a href="#why" className="block text-sm text-background/70 hover:text-background transition-colors">About</a>
              <a href="#blog" className="block text-sm text-background/70 hover:text-background transition-colors">Blog</a>
              <a href="#contact" className="block text-sm text-background/70 hover:text-background transition-colors">Contact</a>
            </div>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Download</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
                <Apple className="w-4 h-4" /> App Store
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
                <Play className="w-4 h-4" /> Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Wandr. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-background/40 text-xs hover:text-background/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/40 text-xs hover:text-background/70 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
