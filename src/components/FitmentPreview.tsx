import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { RotateCcw, Check, AlertCircle } from "lucide-react";

const FitmentPreview = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Virtual Fitment</p>
        <h2 className="heading-lg text-foreground mb-4">3D Fitment Preview</h2>
        <p className="body-lg max-w-2xl mb-12">
          See how parts look on your exact car model before you buy. Select your vehicle and visualize upgrades in real-time.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="metallic-surface p-6 md:p-10 relative overflow-hidden">
          {/* Mock 3D Preview */}
          <div className="aspect-[16/9] relative rounded-sm overflow-hidden bg-gradient-to-br from-secondary to-background flex items-center justify-center">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, hsl(0 85% 50% / 0.15), transparent 50%),
                                  radial-gradient(circle at 70% 50%, hsl(210 3% 78% / 0.1), transparent 50%)`,
              }}
            />
            <div className="text-center z-10">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <RotateCcw className="w-16 h-16 text-gunmetal" />
              </motion.div>
              <p className="font-display text-2xl md:text-3xl tracking-wider text-foreground">Interactive 3D Viewer</p>
              <p className="text-sm text-muted-foreground font-body mt-2">Select a vehicle to begin</p>
            </div>
          </div>

          {/* Vehicle Selector */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["Lamborghini Huracán", "Ferrari 488", "McLaren 720S", "Porsche 911 GT3"].map((car, i) => (
              <button
                key={car}
                className={`px-4 py-2 font-display text-sm tracking-wider border transition-all duration-300 ${
                  i === 0
                    ? "border-primary/50 text-primary bg-primary/5"
                    : "border-border text-muted-foreground hover:border-gunmetal hover:text-foreground"
                }`}
              >
                {car}
              </button>
            ))}
          </div>

          {/* Fitment Status */}
          <div className="mt-6 flex items-center gap-6 text-sm font-body">
            <span className="flex items-center gap-2 text-green-400">
              <Check className="w-4 h-4" /> Compatible
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="w-4 h-4" /> Requires adapter
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FitmentPreview;
