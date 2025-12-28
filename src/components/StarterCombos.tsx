import { useState } from "react";
import { Sparkles, Gift, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { QuickViewModal, QuickViewItem } from "./QuickViewModal";
import productSerum from "@/assets/product-serum.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";

const combos = [
  {
    id: "complete-hair-care-starter",
    name: "Complete Hair Care Starter Combo",
    description: "Gentle shampoo + nourishing care. Designed for regular family use.",
    benefit: "Complete hair care routine for the whole family",
    items: ["Hair Serum", "Herbal Shampoo", "Face Soap"],
    price: 199,
    tag: "Best for First-Time Users",
    image: productSerum,
  },
  {
    id: "everyday-skin-care-essentials",
    name: "Everyday Skin Care Essentials Combo",
    description: "Simple, effective, affordable. Daily skin care without overthinking.",
    benefit: "Everything you need for daily skin care",
    items: ["Shampoo", "Conditioner", "Bath Powder", "Soap"],
    price: 299,
    tag: "Family Favorite",
    image: productShampoo,
  },
];

export const StarterCombos = () => {
  const [quickViewItem, setQuickViewItem] = useState<QuickViewItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const openQuickView = (combo: typeof combos[0]) => {
    setQuickViewItem({
      id: combo.id,
      name: combo.name,
      image: combo.image,
      price: combo.price,
      benefit: combo.description,
      isCombo: true,
      items: combo.items,
    });
    setIsModalOpen(true);
  };

  const handleAddToCart = (item: QuickViewItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      slug: item.id,
      benefit: item.benefit,
      description: item.benefit,
      price: item.price,
      size: "Combo Pack",
      category: "skin-care",
      image: item.image,
      rating: 4.8,
      reviewCount: 500,
      benefits: [],
      whoIsItFor: "",
      howToUse: [],
      ingredients: [],
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
    setIsModalOpen(false);
    navigate("/cart");
  };

  const handleDirectAddToCart = (combo: typeof combos[0], e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: combo.id,
      name: combo.name,
      slug: combo.id,
      benefit: combo.description,
      description: combo.description,
      price: combo.price,
      size: "Combo Pack",
      category: "skin-care",
      image: combo.image,
      rating: 4.8,
      reviewCount: 500,
      benefits: [],
      whoIsItFor: "",
      howToUse: [],
      ingredients: [],
    });
    toast({
      title: "Added to cart",
      description: `${combo.name} has been added to your cart.`,
    });
    navigate("/cart");
  };

  return (
    <section id="combos" className="py-12 md:py-24 bg-cream/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
            <Gift className="w-4 h-4" />
            Easy Way to Start
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 md:mb-4">
            Perfect Starter Combos
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Easy choices for first-time users. No hidden charges.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="bg-background rounded-2xl md:rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              {/* Image - Opens Quick View */}
              <button
                onClick={() => openQuickView(combo)}
                className="block w-full cursor-pointer"
              >
                <div className="relative">
                  <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-sage-light">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs md:text-sm font-medium rounded-full flex items-center gap-1.5 shadow-soft">
                    <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    {combo.tag}
                  </div>
                </div>
              </button>

              <div className="p-5 md:p-8">
                {/* Title - Opens Quick View */}
                <button
                  onClick={() => openQuickView(combo)}
                  className="block w-full text-left cursor-pointer"
                >
                  <h3 className="font-serif text-lg md:text-2xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                    {combo.name}
                  </h3>
                </button>
                <p className="text-muted-foreground text-sm md:text-base mb-4">{combo.description}</p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-6">
                  {combo.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 md:px-3 py-1 bg-sage-light text-sage-dark text-xs md:text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Combo Price</span>
                    <span className="font-serif text-2xl md:text-3xl font-bold text-primary">
                      ₹{combo.price}
                    </span>
                  </div>
                  <Button
                    variant="hero"
                    size="default"
                    className="h-11 md:h-12 px-4 md:px-6 text-sm md:text-base touch-target gap-2"
                    onClick={(e) => handleDirectAddToCart(combo, e)}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add Combo to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        item={quickViewItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
};
