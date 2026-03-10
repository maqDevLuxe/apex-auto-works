import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 847, suffix: "+", label: "Max Horsepower Gains", unit: "HP" },
  { value: 1200, suffix: "", label: "Peak Torque Delivered", unit: "NM" },
  { value: 2.6, suffix: "s", label: "0-60 MPH Time", unit: "" },
  { value: 218, suffix: "", label: "Top Speed Reached", unit: "MPH" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Number(current.toFixed(value < 10 ? 1 : 0)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="heading-xl text-foreground">
      {value < 10 ? display.toFixed(1) : Math.floor(display)}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const Metrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {metrics.map((m, i) => (
          <ScrollReveal key={m.label} delay={i * 0.1}>
            <div className="text-center">
              <AnimatedNumber value={m.value} suffix={m.suffix} inView={inView} />
              {m.unit && <span className="block font-display text-sm tracking-widest text-gunmetal mt-1">{m.unit}</span>}
              <p className="text-xs text-muted-foreground font-body mt-2 uppercase tracking-wider">{m.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
