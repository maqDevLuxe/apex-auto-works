import { ScrollReveal } from "./ScrollReveal";
import cncImg from "@/assets/cnc-process.jpg";
import carbonImg from "@/assets/carbon-fiber.jpg";

const steps = [
  { num: "01", title: "Design & Engineering", desc: "CAD modeling with sub-millimeter precision for exact OEM fitment." },
  { num: "02", title: "CNC Machining", desc: "5-axis CNC mills carve billet aluminum and titanium into perfection." },
  { num: "03", title: "Carbon Fiber Layup", desc: "Autoclave-cured pre-preg carbon for maximum strength-to-weight ratio." },
  { num: "04", title: "Quality Assurance", desc: "Every part inspected, dyno-tested, and certified before shipping." },
];

const Fabrication = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left - Images */}
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={cncImg} alt="CNC machining precision parts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8">
              <img src={carbonImg} alt="Carbon fiber material texture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
        </ScrollReveal>

        {/* Right - Process */}
        <div>
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Our Process</p>
            <h2 className="heading-lg text-foreground mb-10">CNC & Carbon<br />Fabrication</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="flex gap-5 group">
                  <span className="font-display text-3xl text-gunmetal group-hover:text-primary transition-colors duration-500">{step.num}</span>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fabrication;
