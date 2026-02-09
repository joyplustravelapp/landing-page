import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.png";

const APP_STORE_URL = "https://apps.apple.com/fr/app/joy-plus-find-travel-friends/id6746488482?l=en-GB";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.joyplus.travel&pcampaignid=web_share";

const Hero = () => {
  return (
    <section id="download" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Solo traveler overlooking a tropical city at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
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
            Meet fellow travelers, discover activities, stay connected, and travel safely. All in one app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 rounded-xl"
            >
              <img src={appStoreBadge} alt="Download on the App Store" className="h-[52px] w-auto" />
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 rounded-xl"
            >
              <img src={googlePlayBadge} alt="Get it on Google Play" className="h-[52px] w-auto" />
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
