import { ScrollReveal } from "./ScrollReveal";
import { Globe, Truck, Shield, Clock } from "lucide-react";

const features = [
  { icon: Globe, title: "Global Coverage", desc: "Shipping to 45+ countries with real-time tracking." },
  { icon: Truck, title: "Track-Side Delivery", desc: "Direct delivery to circuits worldwide for race weekends." },
  { icon: Shield, title: "Insured Shipping", desc: "Full insurance on all high-value performance parts." },
  { icon: Clock, title: "Express Available", desc: "24-48hr express for urgent race preparations." },
];

const Shipping = () => {
  return (
    <section className="section-padding border-y border-border">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3 text-center">Logistics</p>
          <h2 className="heading-lg text-foreground mb-14 text-center">Global Track Shipping</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.08}>
              <div className="text-center p-6">
                <f.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg tracking-wider text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shipping;
