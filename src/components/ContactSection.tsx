import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in touch
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Have a question, partnership idea, or just want to say hi? Drop us a message.
            </p>
          </motion.div>

          <motion.a
            href="mailto:support@joyplustravelapp.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="group flex items-center justify-center gap-4 rounded-2xl glass p-8 hover:shadow-glow transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-ocean flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">Email us at</p>
              <p className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                support@joyplustravelapp.com
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
