import { useParams, Link } from "react-router-dom";
import { Star, Check, ChevronLeft, MessageCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <PageLayout title="Product Not Found" description="The product you're looking for doesn't exist.">
        <div className="container py-20 text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Button asChild>
            <Link to="/shop">Browse All Products</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Aishwaryam Herbals, I'm interested in ${product.name} (₹${product.price}).`
  );
  const whatsappLink = `https://wa.me/919843398171?text=${whatsappMessage}`;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <PageLayout
      title={product.name}
      description={product.description}
    >
      {/* Breadcrumb */}
      <div className="bg-cream/50 py-3">
        <div className="container">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-sage-light">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.badge && (
                <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-soft">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-accent fill-accent"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Loved by {product.reviewCount.toLocaleString()}+ customers
                </span>
              </div>

              {/* Price & Size */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  ₹{product.price}
                </span>
                <span className="text-muted-foreground">· {product.size}</span>
              </div>

              {/* Promise Line */}
              <p className="text-sage-dark font-medium mb-6 p-4 bg-sage-light/50 rounded-xl">
                Light on skin. Strong on results. Safe for regular use.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button asChild variant="hero" size="lg" className="flex-1">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Buy on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Product Details Sections */}
      <section className="py-8 md:py-12 bg-cream/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Who is it for */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Who is it for?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.whoIsItFor}
              </p>
            </div>

            {/* How to Use */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                How to Use
              </h3>
              <ol className="space-y-3">
                {product.howToUse.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Ingredients */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-sage-light text-sage-dark text-sm rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Placeholder */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              What Customers Say
            </h3>
            <div className="space-y-4">
              <div className="bg-background p-5 rounded-xl shadow-soft">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-2">
                  "Very gentle on my skin. I've been using this for 3 months and love the results!"
                </p>
                <p className="text-sm text-muted-foreground">— Priya, Chennai</p>
              </div>
              <div className="bg-background p-5 rounded-xl shadow-soft">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-2">
                  "My whole family uses this now. Safe and effective. Highly recommended!"
                </p>
                <p className="text-sm text-muted-foreground">— Lakshmi, Coimbatore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-8 md:py-12 bg-cream/30">
          <div className="container">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              You May Also Like
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showBadge={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default ProductDetail;
