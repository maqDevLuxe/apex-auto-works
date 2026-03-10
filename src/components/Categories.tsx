import { ScrollReveal } from "./ScrollReveal";
import { Gauge, Cog, Wind, Disc3, Wrench, Zap } from "lucide-react";

const categories = [
  { icon: Gauge, label: "Exhaust Systems", count: 128 },
  { icon: Disc3, label: "Brake Kits", count: 96 },
  { icon: Cog, label: "Wheels & Rims", count: 214 },
  { icon: Wind, label: "Aero Kits", count: 74 },
  { icon: Wrench, label: "Engine Internals", count: 182 },
  { icon: Zap, label: "ECU Tuning", count: 56 },
];

const Categories = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Performance Categories</p>
        <h2 className="heading-lg text-foreground mb-12">Tuning Catalog</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.label} delay={i * 0.08}>
            <div className="group metallic-surface p-6 md:p-8 cursor-pointer hover:border-primary/30 transition-all duration-500">
              <cat.icon className="w-8 h-8 text-gunmetal group-hover:text-primary transition-colors duration-500 mb-4" />
              <h3 className="font-display text-lg md:text-xl tracking-wider text-foreground mb-1">{cat.label}</h3>
              <span className="text-sm text-muted-foreground font-body">{cat.count} Products</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Categories;
