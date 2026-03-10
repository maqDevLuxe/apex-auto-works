import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Youtube, Twitter } from "lucide-react";

const CTAFooter = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(0 85% 50% / 0.3), transparent 60%)`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Ready to Upgrade?</p>
            <h2 className="heading-xl text-foreground mb-6">
              Shop Elite<br />Performance Parts
            </h2>
            <p className="body-lg max-w-xl mx-auto mb-10">
              Browse thousands of CNC-machined, carbon fiber, and forged components for the world's most exclusive supercars.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-3 px-10 py-5 gradient-rosso text-primary-foreground font-display text-xl tracking-widest magnetic-hover"
              >
                Browse Catalog <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <span className="font-display text-2xl tracking-widest text-foreground">
                SUPER<span className="text-primary">CAR</span>
              </span>
              <p className="text-sm text-muted-foreground font-body mt-3 max-w-sm leading-relaxed">
                Premium performance parts and accessories for the world's most exclusive supercars. Precision-engineered, track-tested, race-proven.
              </p>
              <div className="flex gap-4 mt-6">
                {[Instagram, Youtube, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-widest text-foreground mb-4">Shop</h4>
              <ul className="space-y-2">
                {["Exhaust Systems", "Brake Kits", "Wheels & Rims", "Aero Kits", "ECU Tuning"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-widest text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Track Shipping", "Returns", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground font-body">© 2026 Supercar Parts. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a key={link} href="#" className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
