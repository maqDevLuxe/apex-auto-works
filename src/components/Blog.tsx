import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Science Behind Titanium Exhaust Systems",
    excerpt: "Why titanium delivers superior sound, weight savings, and heat resistance for performance applications.",
    category: "Engineering",
    date: "Mar 5, 2026",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
  },
  {
    title: "Carbon Ceramic vs Steel Brakes: Track Day Guide",
    excerpt: "Breaking down fade resistance, weight, and cost-per-lap for serious track enthusiasts.",
    category: "Track Guide",
    date: "Feb 28, 2026",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
  },
  {
    title: "2026 Supercar Aero Trends: Form Meets Function",
    excerpt: "Active aero, ground effect tunnels, and the new generation of downforce technology.",
    category: "Trends",
    date: "Feb 20, 2026",
    img: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-3">From the Garage</p>
            <h2 className="heading-lg text-foreground">Automotive Blog</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-display tracking-wider text-muted-foreground hover:text-primary transition-colors">
            All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <ScrollReveal key={post.title} delay={i * 0.1}>
            <article className="group metallic-surface overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-500">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.3em] text-primary font-display uppercase">{post.category}</span>
                  <span className="text-[10px] text-muted-foreground font-body">{post.date}</span>
                </div>
                <h3 className="font-display text-lg tracking-wider text-foreground leading-tight mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Blog;
