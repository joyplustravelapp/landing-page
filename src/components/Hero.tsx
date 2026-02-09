import { motion } from "framer-motion";
import { Apple, Play, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import logo from "@/assets/joy-plus-logo.jpg";

const Hero = () => {
  return (
    <section id="download" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with darker overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Solo traveler overlooking Bangkok at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-dark opacity-60" />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <img src={logo} alt="Joy Plus" className="w-16 h-16 rounded-2xl shadow-glow" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary font-display font-semibold text-base mb-4 tracking-wide"
          >
            For backpackers & digital nomads
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] mb-6"
          >
            One app for
            <br />
            <span className="text-gradient-glow">every journey.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 font-body leading-relaxed"
          >
            Meet fellow travelers, discover activities, stay connected, and travel safely — all from a single platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass hover:shadow-glow transition-all duration-500"
            >
              <Apple className="w-7 h-7 text-foreground" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Download on the</div>
                <div className="text-sm font-bold text-foreground leading-tight">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass hover:shadow-glow transition-all duration-500"
            >
              <Play className="w-7 h-7 text-foreground" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Get it on</div>
                <div className="text-sm font-bold text-foreground leading-tight">Google Play</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
