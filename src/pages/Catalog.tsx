import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import { ScrollReveal, ScaleReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ShoppingCart, Filter, Search } from "lucide-react";
import { useState } from "react";

const allParts = [
  { name: "Titanium Exhaust System", brand: "Akrapovič", price: "$8,450", category: "Exhaust", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop" },
  { name: "Carbon Ceramic Brake Kit", brand: "Brembo", price: "$12,900", category: "Brakes", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop" },
  { name: "Forged Monoblock Wheels", brand: "HRE", price: "$6,200", category: "Wheels", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop" },
  { name: "Full Carbon Aero Kit", brand: "Vorsteiner", price: "$15,800", category: "Aero", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop" },
  { name: "Sport Springs Kit", brand: "KW", price: "$2,100", category: "Suspension", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop" },
  { name: "ECU Stage 2 Tune", brand: "Renntech", price: "$3,500", category: "ECU", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=400&fit=crop" },
  { name: "Carbon Fiber Diffuser", brand: "Novitec", price: "$4,800", category: "Aero", img: "https://images.unsplash.com/photo-1525609004556-c46c6c5104b8?w=400&h=400&fit=crop" },
  { name: "Lightweight Flywheel", brand: "ACT", price: "$1,890", category: "Engine", img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=400&fit=crop" },
];

const categories = ["All", "Exhaust", "Brakes", "Wheels", "Aero", "Suspension", "ECU", "Engine"];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allParts : allParts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32 section-padding max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Performance Parts</p>
          <h1 className="heading-xl text-foreground mb-8">Catalog</h1>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-display text-sm tracking-wider border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-primary/50 text-primary bg-primary/5"
                    : "border-border text-muted-foreground hover:border-gunmetal hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((part, i) => (
            <ScaleReveal key={part.name} delay={i * 0.05}>
              <div className="group metallic-surface overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img src={part.img} alt={part.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">{part.brand}</p>
                  <h3 className="font-display text-base tracking-wider text-foreground mt-1">{part.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-primary font-display text-lg">{part.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 gradient-rosso text-primary-foreground"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </ScaleReveal>
          ))}
        </div>
      </div>
      <CTAFooter />
    </div>
  );
};

export default Catalog;
