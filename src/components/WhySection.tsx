import { motion } from "framer-motion";
import { Users, Compass, Wifi, Shield } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    title: "People",
    description: "Finding buddies, making plans, staying in touch",
    gradient: "from-primary to-accent",
  },
  {
    icon: Compass,
    title: "Activities",
    description: "Discovering things to do, reading reviews, booking",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    description: "Data abroad, safe WiFi, staying reachable",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Insurance, emergency contacts, local tips",
    gradient: "from-primary to-secondary",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const WhySection = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Every trip requires planning
          </h2>
          <p className="text-muted-foreground text-lg">
            We decided to create the <span className="text-foreground font-semibold">ultimate all in one travel app</span>
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={item}
              className="group relative rounded-2xl glass p-6 hover:shadow-glow transition-all duration-500 cursor-default"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                <point.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="relative font-display text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
