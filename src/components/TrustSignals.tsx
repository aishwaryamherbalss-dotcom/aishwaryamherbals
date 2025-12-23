import { Leaf, IndianRupee, Heart, Users } from "lucide-react";

const trustItems = [
  {
    icon: Leaf,
    title: "Handmade Herbal Formulas",
    description: "Traditional recipes passed down generations",
  },
  {
    icon: IndianRupee,
    title: "Honest Everyday Pricing",
    description: "No fake MRP. No discount drama.",
  },
  {
    icon: Heart,
    title: "Women-Centric Care",
    description: "Made specially for Indian women's needs",
  },
  {
    icon: Users,
    title: "Loved by Tamil Nadu",
    description: "10,000+ happy customers & counting",
  },
];

export const TrustSignals = () => {
  return (
    <section className="py-10 md:py-16 bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-background rounded-xl md:rounded-2xl p-4 md:p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-sage-light flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-6 md:mt-8 text-sm md:text-base">
          ✨ Thousands of women trust Aishwaryam for their daily care.
        </p>
      </div>
    </section>
  );
};
