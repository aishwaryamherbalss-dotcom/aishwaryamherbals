import { Link } from "react-router-dom";
import { Gift, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { combos, Combo } from "@/data/products";
import { useNavigate } from "react-router-dom";

export const FestivalCombos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const festivalCombos = combos.slice(0, 4);

  const handleViewCombo = (combo: Combo) => {
    navigate(`/combo/${combo.slug}`);
  };

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            Festival Combos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Perfect Gift Bundles
          </h2>
          <p className="font-serif text-xl text-foreground/80 mb-2">
            பரிசுக்கு ஏற்ற சிறந்த தொகுப்புகள்
          </p>
          <p className="text-muted-foreground">
            Curated combos for gifting or complete self-care routines
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivalCombos.map((combo) => (
            <div
              key={combo.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
            >
              {/* Combo Image */}
              <Link to={`/combo/${combo.slug}`} className="block relative aspect-square overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {combo.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {combo.badge}
                  </span>
                )}
              </Link>

              {/* Combo Info */}
              <div className="p-4">
                <Link to={`/combo/${combo.slug}`}>
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {combo.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {combo.tagline}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-4 gap-2">
                  <span className="font-serif text-xl font-bold text-primary">
                    ₹{combo.price}
                  </span>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => handleViewCombo(combo)}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/combos">View All Combos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
