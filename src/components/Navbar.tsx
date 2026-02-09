import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/joy-plus-logo.jpg";
import qrCode from "/qr-download.png";

const navLinks = [
  { label: "Why Us", href: "#why" },
  { label: "Vision", href: "#vision" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

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

        <div className="hidden md:block relative group">
          <div className="p-2 rounded-xl glass hover:shadow-glow transition-all duration-300 cursor-pointer">
            <img
              src={qrCode}
              alt="Download Joy Plus App"
              className="w-16 h-16 rounded-lg"
            />
          </div>
          <div className="absolute -bottom-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-card border border-border rounded-lg px-3 py-1.5 text-xs font-medium text-foreground whitespace-nowrap shadow-lg">
              Scan to download
            </div>
          </div>
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
              <div className="mt-3">
                <Link
                  to="/download"
                  onClick={() => setOpen(false)}
                  className="btn-press w-full px-5 py-3 rounded-xl bg-gradient-glow text-primary-foreground font-semibold text-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  Download App
                </Link>
                <div className="mt-3 p-3 rounded-xl glass flex items-center justify-center">
                  <img
                    src={qrCode}
                    alt="Download Joy Plus App"
                    className="w-32 h-32 rounded-lg"
                  />
                </div>
                <p className="text-center text-xs text-muted-foreground mt-2">
                  Scan QR code to download
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
