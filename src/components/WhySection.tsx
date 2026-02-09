import { motion } from "framer-motion";
import { Users, Compass, Wifi, Shield } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    title: "People",
    description: "Finding buddies, making plans, staying in touch",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Compass,
    title: "Activities",
    description: "Discovering things to do, reading reviews, booking",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    description: "Data abroad, safe WiFi, staying reachable",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Insurance, emergency contacts, local tips",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhySection = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Every solo trip requires managing...
          </h2>
          <p className="text-muted-foreground text-lg">
            That's <span className="text-foreground font-semibold">10+ apps minimum</span>. We asked: why isn't there ONE platform?
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={item}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-xl ${point.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <point.icon className={`w-6 h-6 ${point.color}`} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
