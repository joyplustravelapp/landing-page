import { motion } from "framer-motion";
import { MapPin, Utensils, Signal, Split, MessageCircle } from "lucide-react";
import travelersImg from "@/assets/travelers-together.jpg";

const features = [
  { icon: MapPin, text: "Shows you other solo travelers there right now" },
  { icon: Utensils, text: "Recommends the best street food tour tonight" },
  { icon: Signal, text: "Gets you local data in 30 seconds" },
  { icon: Split, text: "Allows you to join city chats" },
  { icon: MessageCircle, text: "Provides travel tips from other travelers" },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border">
              <img
                src={travelersImg}
                alt="Solo travelers sharing a meal together at a street food market"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Subtle shadow overlay for integration */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-card/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">The Vision</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Imagine landing in Bangkok...
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              ...and opening <span className="text-foreground font-semibold">ONE app</span> that handles everything.
            </p>

            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-ocean flex items-center justify-center shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium pt-1.5">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
