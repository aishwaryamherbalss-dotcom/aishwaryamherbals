import { useParams, Link } from "react-router-dom";
import { ChevronLeft, MessageCircle, Check, Gift } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { getComboBySlug, getComboProducts, combos } from "@/data/products";
import { ComboCard } from "@/components/shop/ComboCard";

const ComboDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const combo = getComboBySlug(slug || "");

  if (!combo) {
    return (
      <PageLayout title="Combo Not Found" description="The combo you're looking for doesn't exist.">
        <div className="container py-20 text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
            Combo Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn't find the combo you're looking for.
          </p>
          <Button asChild>
            <Link to="/combos">Browse All Combos</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const comboProducts = getComboProducts(combo);
  const whatsappMessage = encodeURIComponent(
    `Hi Aishwaryam Herbals, I'm interested in the ${combo.name} (₹${combo.price}).`
  );
  const whatsappLink = `https://wa.me/919843398171?text=${whatsappMessage}`;

  const otherCombos = combos.filter(c => c.id !== combo.id).slice(0, 2);

  return (
    <PageLayout
      title={combo.name}
      description={combo.description}
    >
      {/* Breadcrumb */}
      <div className="bg-cream/50 py-3">
        <div className="container">
          <Link 
            to="/combos" 
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Combos
          </Link>
        </div>
      </div>

      {/* Combo Hero */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Combo Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-sage-light">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {combo.badge && (
                <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-soft flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  {combo.badge}
                </div>
              )}
            </div>

            {/* Combo Info */}
            <div className="flex flex-col">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                {combo.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-4">
                {combo.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  ₹{combo.price}
                </span>
                <span className="text-muted-foreground">· Combo Price</span>
              </div>

              {/* What's Inside */}
              <div className="mb-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  What's Inside This Combo
                </h3>
                <div className="space-y-3">
                  {comboProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.slug}`}
                      className="flex items-center gap-4 p-3 bg-sage-light/50 rounded-xl hover:bg-sage-light transition-colors"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-sage-light flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.size}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild variant="hero" size="lg" className="flex-1">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Buy on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Trust Text */}
              <div className="p-4 bg-cream rounded-xl text-center">
                <p className="text-sage-dark font-medium text-sm">
                  வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Details Sections */}
      <section className="py-8 md:py-12 bg-cream/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Why Together */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Why These Products Work Better Together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {combo.whyTogether}
              </p>
            </div>

            {/* Who Should Choose */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Who Should Choose This Combo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {combo.whoIsItFor}
              </p>
            </div>

            {/* How to Use Together */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                How to Use Together
              </h3>
              <ul className="space-y-3">
                {combo.howToUseTogether.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Combos */}
      {otherCombos.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="container">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              Explore Other Combos
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {otherCombos.map((combo) => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default ComboDetail;
