import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const brands = [
  { name: "Akrapovič", country: "Slovenia", specialty: "Exhaust Systems", desc: "Titanium and carbon exhaust systems forged in motorsport.", logo: "AK" },
  { name: "Brembo", country: "Italy", specialty: "Braking Systems", desc: "World-leading brake technology for road and track.", logo: "BR" },
  { name: "HRE Wheels", country: "USA", specialty: "Forged Wheels", desc: "Bespoke forged monoblock and multi-piece wheels.", logo: "HR" },
  { name: "Novitec", country: "Germany", specialty: "Complete Tuning", desc: "Comprehensive performance and design upgrades for Italian supercars.", logo: "NV" },
  { name: "Vorsteiner", country: "USA", specialty: "Carbon Aero", desc: "Pre-preg carbon fiber aerodynamic components.", logo: "VS" },
  { name: "Mansory", country: "Germany", specialty: "Luxury Tuning", desc: "Ultra-exclusive bespoke supercar customization.", logo: "MN" },
  { name: "Capristo", country: "Germany", specialty: "Exhaust & Carbon", desc: "Valvetronic exhaust systems and carbon fiber details.", logo: "CP" },
  { name: "Techart", country: "Germany", specialty: "Porsche Tuning", desc: "Premium Porsche performance and styling specialists.", logo: "TC" },
];

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32 section-padding max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Racing Heritage</p>
          <h1 className="heading-xl text-foreground mb-4">Our Brands</h1>
          <p className="body-lg max-w-2xl mb-14">
            We partner exclusively with the world's most prestigious performance brands. Each one selected for uncompromising quality.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {brands.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 0.06}>
              <div className="group metallic-surface p-6 md:p-8 cursor-pointer hover:border-primary/30 transition-all duration-500 flex gap-6">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border border-border font-display text-xl text-gunmetal group-hover:text-primary group-hover:border-primary/30 transition-colors">
                  {brand.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-xl tracking-wider text-foreground">{brand.name}</h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] text-primary font-body uppercase mb-2">{brand.specialty} · {brand.country}</p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{brand.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <CTAFooter />
    </div>
  );
};

export default Brands;
