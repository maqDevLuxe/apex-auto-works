import { ScrollReveal } from "./ScrollReveal";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const counters = [
  { value: 12500, label: "Cars Upgraded", suffix: "+" },
  { value: 45, label: "Countries Served", suffix: "+" },
  { value: 850, label: "OEM Partnerships", suffix: "" },
  { value: 99.7, label: "Satisfaction Rate", suffix: "%" },
];

const Counter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Number(current.toFixed(value < 100 ? 1 : 0)));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display text-4xl md:text-6xl text-foreground">
      {value < 100 ? display.toFixed(1) : Math.floor(display).toLocaleString()}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const UpgradeCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3 text-center">Impact</p>
        <h2 className="heading-lg text-foreground mb-14 text-center">By The Numbers</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {counters.map((c, i) => (
          <ScrollReveal key={c.label} delay={i * 0.1}>
            <Counter value={c.value} suffix={c.suffix} inView={inView} />
            <p className="text-xs text-muted-foreground font-body mt-2 uppercase tracking-wider">{c.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default UpgradeCounters;
