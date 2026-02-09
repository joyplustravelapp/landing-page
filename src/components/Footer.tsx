import { Instagram, Twitter, Youtube, Facebook, Apple, Play } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/joy-plus-logo.jpg";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
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
                Joy<span className="text-primary">+</span>
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
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:shadow-glow hover:text-primary transition-all duration-300 text-muted-foreground"
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
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                <Apple className="w-4 h-4" /> App Store
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                <Play className="w-4 h-4" /> Google Play
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
