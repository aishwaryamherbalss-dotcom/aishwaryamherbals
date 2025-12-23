import { Sprout, Clock, Sparkles, Home } from "lucide-react";

const reasons = [
  {
    icon: Sprout,
    title: "Rooted in Tradition",
    description: "Ancient herbal recipes from Tamil Nadu, passed through generations of healers",
  },
  {
    icon: Clock,
    title: "Made for Daily Use",
    description: "Gentle formulas safe for everyday use by the whole family",
  },
  {
    icon: Sparkles,
    title: "Gentle & Effective",
    description: "No harsh chemicals. Just pure herbs that work with your body naturally",
  },
  {
    icon: Home,
    title: "Affordable for Every Home",
    description: "Premium quality at honest prices. Beauty care shouldn't break the bank",
  },
];

export const WhyAishwaryam = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Why Aishwaryam Herbals?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe every woman deserves pure, effective skincare without paying a premium
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative bg-card-gradient rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-soft">
                {index + 1}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <reason.icon className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
