import { Link } from "react-router-dom";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Combo, getComboProducts } from "@/data/products";

interface ComboCardProps {
  combo: Combo;
}

export const ComboCard = ({ combo }: ComboCardProps) => {
  const comboProducts = getComboProducts(combo);

  return (
    <div className="bg-background rounded-2xl md:rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group">
      <Link to={`/combo/${combo.slug}`} className="block">
        <div className="relative">
          <div className="aspect-[16/10] overflow-hidden bg-sage-light">
            <img
              src={combo.image}
              alt={combo.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          {combo.badge && (
            <div className="absolute top-3 left-3 md:top-4 md:left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs md:text-sm font-medium rounded-full flex items-center gap-1.5 shadow-soft">
              <Gift className="w-3 h-3 md:w-3.5 md:h-3.5" />
              {combo.badge}
            </div>
          )}
        </div>
      </Link>

      <div className="p-5 md:p-6">
        <Link to={`/combo/${combo.slug}`}>
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {combo.name}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {combo.tagline}
        </p>

        <div className="mb-4">
          <p className="text-xs text-sage-dark mb-2">What's inside:</p>
          <div className="flex flex-wrap gap-1.5">
            {comboProducts.map((product) => (
              <span
                key={product.id}
                className="px-2.5 py-1 bg-sage-light text-sage-dark text-xs rounded-full"
              >
                {product.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Combo Price</span>
            <span className="font-serif text-2xl font-bold text-primary">
              ₹{combo.price}
            </span>
          </div>
          <Button asChild variant="hero" size="default" className="text-sm">
            <Link to={`/combo/${combo.slug}`}>View Combo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
