import { motion } from "framer-motion";
import { Apple, Play, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section id="download" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Solo traveler overlooking Bangkok at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-display font-semibold text-lg mb-4"
          >
            Solo travel, simplified.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
          >
            One app for
            <br />
            <span className="text-gradient-warm">every journey.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-10 font-body"
          >
            Meet fellow travelers, discover activities, stay connected, and travel safely — all from a single platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary-foreground text-foreground font-semibold text-base hover:scale-105 transition-transform shadow-elevated"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Download on the</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold text-base hover:scale-105 transition-transform shadow-elevated"
            >
              <Play className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-secondary-foreground/70 leading-none">Get it on</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
