import { ScrollReveal, ScaleReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const parts = [
  {
    name: "Titanium Exhaust System",
    brand: "Akrapovič",
    price: "$8,450",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop",
    tag: "Best Seller",
    size: "large",
  },
  {
    name: "Carbon Ceramic Brake Kit",
    brand: "Brembo",
    price: "$12,900",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop",
    tag: "New",
    size: "small",
  },
  {
    name: "Forged Monoblock Wheels",
    brand: "HRE",
    price: "$6,200",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
    tag: null,
    size: "small",
  },
  {
    name: "Full Carbon Aero Kit",
    brand: "Vorsteiner",
    price: "$15,800",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop",
    tag: "Premium",
    size: "large",
  },
];

const FeaturedParts = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Curated Selection</p>
        <h2 className="heading-lg text-foreground mb-12">Featured Parts</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {parts.map((part, i) => (
          <ScaleReveal
            key={part.name}
            delay={i * 0.1}
            className={part.size === "large" ? "md:col-span-7" : "md:col-span-5"}
          >
            <div className="group relative metallic-surface overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={part.img}
                  alt={part.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {part.tag && (
                <span className="absolute top-4 left-4 px-3 py-1 gradient-rosso text-primary-foreground text-[10px] font-display tracking-widest">
                  {part.tag}
                </span>
              )}
              <div className="p-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">{part.brand}</p>
                  <h3 className="font-display text-lg tracking-wider text-foreground mt-1">{part.name}</h3>
                  <p className="text-primary font-display text-xl mt-1">{part.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 gradient-rosso text-primary-foreground magnetic-hover"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </ScaleReveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturedParts;
