import { motion } from "framer-motion";
import { MapPin, Utensils, Signal, Split, Phone } from "lucide-react";
import travelersImg from "@/assets/travelers-together.jpg";

const features = [
  { icon: MapPin, text: "Shows you other solo travelers there right now" },
  { icon: Utensils, text: "Recommends the best street food tour tonight" },
  { icon: Signal, text: "Gets you local data in 30 seconds" },
  { icon: Split, text: "Splits the tuk-tuk cost with your new travel buddy" },
  { icon: Phone, text: "Has emergency contacts if anything goes wrong" },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={travelersImg}
                alt="Solo travelers sharing a meal together at a street food market"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-warm animate-float opacity-80" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">The Vision</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Imagine landing in Bangkok...
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              ...and opening <span className="text-foreground font-semibold">ONE app</span> that handles everything.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-background/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
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
