import { ScrollReveal } from "./ScrollReveal";

const brands = [
  "BREMBO", "AKRAPOVIČ", "HRE", "NOVITEC", "CAPRISTO", "MANSORY",
  "VORSTEINER", "RENNTECH", "BRABUS", "TECHART",
];

const RacingBrands = () => {
  return (
    <section className="section-padding border-y border-border overflow-hidden">
      <ScrollReveal>
        <p className="text-center text-[11px] tracking-[0.4em] text-muted-foreground font-body uppercase mb-8">
          Racing Heritage — Trusted by Champions
        </p>
      </ScrollReveal>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="mx-8 md:mx-14 font-display text-2xl md:text-4xl tracking-[0.15em] text-gunmetal hover:text-foreground transition-colors duration-500 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacingBrands;
