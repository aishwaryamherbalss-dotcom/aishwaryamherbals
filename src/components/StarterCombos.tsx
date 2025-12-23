import { Sparkles, Gift } from "lucide-react";
import { Button } from "./ui/button";
import productSerum from "@/assets/product-serum.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";

const combos = [
  {
    id: 1,
    name: "First-Timer's Starter Kit",
    description: "Perfect for trying our bestsellers",
    items: ["Hair Serum", "Herbal Shampoo", "Face Soap"],
    price: 199,
    originalPrice: 399,
    tag: "Best for First-Time Users",
    image: productSerum,
  },
  {
    id: 2,
    name: "Daily Essentials Combo",
    description: "Everything you need for daily care",
    items: ["Shampoo", "Conditioner", "Bath Powder", "Soap"],
    price: 299,
    originalPrice: 549,
    tag: "Most Popular",
    image: productShampoo,
  },
];

export const StarterCombos = () => {
  return (
    <section id="combos" className="py-16 md:py-24 bg-cream/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
            <Gift className="w-4 h-4" />
            Save More
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Perfect Starter Combos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not sure where to start? Try our curated combos at special prices
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="bg-background rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="relative">
                <div className="aspect-[16/9] overflow-hidden bg-sage-light">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {combo.tag}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {combo.name}
                </h3>
                <p className="text-muted-foreground mb-4">{combo.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {combo.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-sage-light text-sage-dark text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-primary">
                      ₹{combo.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{combo.originalPrice}
                    </span>
                  </div>
                  <Button variant="hero" size="lg">
                    Get This Combo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
