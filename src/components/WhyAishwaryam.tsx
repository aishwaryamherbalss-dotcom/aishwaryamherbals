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
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
            Our Promise
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 md:mb-4">
            Why Aishwaryam Herbals?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            We believe every woman deserves pure, effective skincare without paying a premium
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative bg-card-gradient rounded-xl md:rounded-2xl p-4 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs md:text-sm font-bold shadow-soft">
                {index + 1}
              </div>

              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-sage-light flex items-center justify-center mb-3 md:mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <reason.icon className="w-5 h-5 md:w-7 md:h-7" />
              </div>

              <h3 className="font-serif text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3 leading-tight">
                {reason.title}
              </h3>

              <p className="text-muted-foreground text-xs md:text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
