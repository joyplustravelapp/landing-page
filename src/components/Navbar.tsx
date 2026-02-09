import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/joy-plus-logo.jpg";

const navLinks = [
  { label: "Why Us", href: "#why" },
  { label: "Vision", href: "#vision" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const APP_STORE_URL = "https://apps.apple.com/fr/app/joy-plus-find-travel-friends/id6746488482?l=en-GB";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    window.open(APP_STORE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Full-width solid background that covers any external content */}
      <div className={`mx-auto transition-all duration-500 bg-card/95 border-b border-border/50 backdrop-blur-xl ${
        scrolled ? "shadow-glow" : ""
      }`}>
      <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
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

        <button
          onClick={handleDownload}
          className="hidden md:flex items-center gap-2 btn-press px-5 py-2 rounded-xl bg-gradient-glow text-primary-foreground font-semibold text-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.96] transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          Download now!
        </button>

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
              <button
                onClick={() => {
                  setOpen(false);
                  handleDownload();
                }}
                className="btn-press w-full mt-3 px-5 py-3 rounded-xl bg-gradient-glow text-primary-foreground font-semibold text-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download now!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
