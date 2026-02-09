import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/joy-plus-logo.jpg";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.svg";

const navLinks = [
  { label: "Why Us", href: "#why" },
  { label: "Vision", href: "#vision" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const APP_STORE_URL = "https://apps.apple.com/fr/app/joy-plus-find-travel-friends/id6746488482?l=en-GB";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.joyplus.travel&pcampaignid=web_share";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled ? "glass shadow-glow" : "glass-subtle"
      }`}
    >
      <div className="flex items-center justify-between h-14 px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Joy Plus" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            Joy Plus
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-press h-9 hover:shadow-glow transition-all duration-300 rounded-lg overflow-hidden">
            <img src={appStoreBadge} alt="Download on the App Store" className="h-full" />
          </a>
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="btn-press h-9 hover:shadow-glow transition-all duration-300 rounded-lg overflow-hidden">
            <img src={googlePlayBadge} alt="Get it on Google Play" className="h-full" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-1">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden px-5 pb-5"
          >
            <div className="pt-2 border-t border-border/50">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-3">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-press h-11 flex-1 flex justify-center hover:shadow-glow transition-all duration-300 rounded-lg overflow-hidden">
                  <img src={appStoreBadge} alt="Download on the App Store" className="h-full" />
                </a>
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="btn-press h-11 flex-1 flex justify-center hover:shadow-glow transition-all duration-300 rounded-lg overflow-hidden">
                  <img src={googlePlayBadge} alt="Get it on Google Play" className="h-full" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
