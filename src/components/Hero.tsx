import { motion } from "framer-motion";
import heroImg from "@/assets/hero-rim.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Premium supercar wheel rim with carbon fiber brake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-body text-sm tracking-[0.4em] text-primary mb-4 uppercase">
            Precision Engineered Performance
          </p>
          <h1 className="heading-xl text-foreground mb-6">
            Unleash<br />
            <span className="text-chrome">Raw Power</span>
          </h1>
          <p className="body-lg max-w-lg mb-10">
            CNC-machined, carbon fiber, and forged billet components for the world's most exclusive supercars.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="/catalog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 gradient-rosso text-primary-foreground font-display text-lg tracking-widest hover:shadow-[var(--shadow-rosso)] transition-shadow"
            >
              Shop Parts
            </motion.a>
            <motion.a
              href="/brands"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 border border-border text-foreground font-display text-lg tracking-widest hover:border-primary/50 transition-colors"
            >
              Our Brands
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
