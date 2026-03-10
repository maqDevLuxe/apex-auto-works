import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus Lehner",
    car: "Lamborghini Huracán EVO",
    text: "The Akrapovič exhaust completely transformed the driving experience. The sound, the weight savings — absolutely world-class installation support too.",
    rating: 5,
  },
  {
    name: "Sofia Rinaldi",
    car: "Ferrari F8 Tributo",
    text: "Carbon aero kit from Vorsteiner fits like OEM. No gaps, no rattles. The downforce gains are noticeable at Monza's high-speed corners.",
    rating: 5,
  },
  {
    name: "Kai Tanaka",
    car: "McLaren 720S",
    text: "HRE forged wheels shaved 12kg of unsprung mass. The response improvement through corners is night and day. Incredible quality.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3 text-center">Testimonials</p>
        <h2 className="heading-lg text-foreground mb-14 text-center">Enthusiast Reviews</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.1}>
            <div className="metallic-surface p-6 md:p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-secondary-foreground font-body leading-relaxed flex-1 mb-6">"{review.text}"</p>
              <div>
                <p className="font-display text-base tracking-wider text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground font-body">{review.car}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
