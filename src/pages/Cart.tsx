import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  qty: number;
  img: string;
}

const initialCart: CartItem[] = [
  { id: 1, name: "Titanium Exhaust System", brand: "Akrapovič", price: 8450, qty: 1, img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&h=200&fit=crop" },
  { id: 2, name: "Forged Monoblock Wheels", brand: "HRE", price: 6200, qty: 2, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop" },
  { id: 3, name: "Carbon Ceramic Brake Kit", brand: "Brembo", price: 12900, qty: 1, img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=200&fit=crop" },
];

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>(initialCart);

  const updateQty = (id: number, delta: number) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32 section-padding max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">Your Selection</p>
          <h1 className="heading-xl text-foreground mb-10">Cart</h1>
        </ScrollReveal>

        {items.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-20">
              <p className="body-lg mb-6">Your cart is empty.</p>
              <Link to="/catalog" className="inline-flex items-center gap-2 px-8 py-4 gradient-rosso text-primary-foreground font-display tracking-widest">
                Browse Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.05}>
                  <div className="metallic-surface p-4 flex gap-4 items-center">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">{item.brand}</p>
                      <h3 className="font-display text-base tracking-wider text-foreground truncate">{item.name}</h3>
                      <p className="text-primary font-display text-lg">${item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, -1)} className="p-1 border border-border text-muted-foreground hover:text-foreground transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-display text-base w-8 text-center text-foreground">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="p-1 border border-border text-muted-foreground hover:text-foreground transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Summary */}
            <ScrollReveal delay={0.2}>
              <div className="metallic-surface p-6 sticky top-24">
                <h3 className="font-display text-lg tracking-wider text-foreground mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-display tracking-wider text-foreground">Total</span>
                    <span className="font-display text-xl text-primary">${total.toLocaleString()}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 gradient-rosso text-primary-foreground font-display text-lg tracking-widest magnetic-hover"
                >
                  Checkout
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
      <CTAFooter />
    </div>
  );
};

export default Cart;
