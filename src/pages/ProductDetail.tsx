import { useParams, Link } from "react-router-dom";
import { Star, Check, ChevronLeft, MessageCircle, ShoppingCart, Quote, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Product-specific reviews data
const productReviews: Record<string, Array<{name: string; location: string; text: string; rating: number}>> = {
  "brightening-serum": [
    { name: "Priya S.", location: "Chennai", text: "Very gentle on my skin. I've been using this for 3 months and love the natural glow!", rating: 5 },
    { name: "Meena R.", location: "Coimbatore", text: "Light on skin, easy to apply. Perfect for daily use. My whole family uses it now.", rating: 5 },
    { name: "Kavitha D.", location: "Salem", text: "No harsh chemicals, just pure herbal care. I can feel the difference in a few weeks.", rating: 5 },
    { name: "Lakshmi N.", location: "Madurai", text: "I was skeptical at first, but now I'm a regular customer. Highly recommended!", rating: 5 },
    { name: "Divya P.", location: "Trichy", text: "Simple, effective, and honestly priced. Love the natural ingredients.", rating: 5 },
    { name: "Sangeetha M.", location: "Erode", text: "ரொம்ப நல்ல quality. Daily use பண்ணுறேன், skin soft-ஆ இருக்கு.", rating: 5 },
  ],
  "herbal-shampoo": [
    { name: "Anitha K.", location: "Chennai", text: "Gentle cleansing without drying my hair. My daughter loves it too!", rating: 5 },
    { name: "Revathi K.", location: "Thanjavur", text: "Best herbal shampoo I've tried. Hair feels soft and healthy.", rating: 5 },
    { name: "Deepa V.", location: "Vellore", text: "No more chemical damage. My whole family switched to this.", rating: 5 },
    { name: "Priya M.", location: "Salem", text: "குடும்பத்தினர் அனைவரும் use பண்றோம். Safe for kids too.", rating: 5 },
    { name: "Kavitha S.", location: "Coimbatore", text: "Gentle on scalp, natural fragrance. Worth every rupee.", rating: 5 },
    { name: "Meena L.", location: "Madurai", text: "Hair fall reduced noticeably. Very happy with the results.", rating: 5 },
  ],
  "herbal-face-pack": [
    { name: "Lakshmi P.", location: "Chennai", text: "Deep cleansing without irritation. My skin feels so fresh after every use.", rating: 5 },
    { name: "Divya R.", location: "Coimbatore", text: "Love the natural glow it gives. Perfect weekly treatment.", rating: 5 },
    { name: "Sangeetha K.", location: "Madurai", text: "Traditional formula, modern results. My mother recommended this!", rating: 5 },
    { name: "Anitha M.", location: "Trichy", text: "வாரம் ஒரு முறை use பண்றேன். Skin radiant-ஆ இருக்கு.", rating: 5 },
    { name: "Priya N.", location: "Salem", text: "No harsh chemicals, just pure herbal goodness. Highly recommend!", rating: 5 },
    { name: "Kavitha L.", location: "Erode", text: "My go-to face pack for years now. Never disappoints.", rating: 5 },
  ],
  "herbal-soap": [
    { name: "Meena S.", location: "Chennai", text: "Gentle enough for my 5-year-old daughter. Whole family loves it!", rating: 5 },
    { name: "Revathi M.", location: "Coimbatore", text: "Natural fragrance, no synthetic smell. Perfect for daily bath.", rating: 5 },
    { name: "Deepa K.", location: "Madurai", text: "வீட்டில் எல்லோரும் use பண்றோம். Safe and effective.", rating: 5 },
    { name: "Lakshmi R.", location: "Salem", text: "Moisturizes while cleansing. My skin doesn't feel dry anymore.", rating: 5 },
    { name: "Priya K.", location: "Trichy", text: "Best herbal soap at this price. Honest quality, honest pricing.", rating: 5 },
    { name: "Anitha S.", location: "Vellore", text: "We've been using this for 2 years. Never switching to anything else.", rating: 5 },
  ],
  "hair-growth-serum": [
    { name: "Kavitha M.", location: "Chennai", text: "Noticed less hair fall within a month. Very happy with results!", rating: 5 },
    { name: "Sangeetha R.", location: "Coimbatore", text: "Nourishes roots well. Hair feels stronger and healthier.", rating: 5 },
    { name: "Divya L.", location: "Madurai", text: "Easy to apply, no oily residue. Perfect for regular use.", rating: 5 },
    { name: "Meena K.", location: "Salem", text: "Traditional herbs work wonders. My grandmother was right!", rating: 5 },
    { name: "Priya S.", location: "Trichy", text: "Hair growth-க்கு best. Daily use பண்றேன்.", rating: 5 },
    { name: "Lakshmi M.", location: "Erode", text: "Finally found a serum that actually works. Thank you Aishwaryam!", rating: 5 },
  ],
  "herbal-toner": [
    { name: "Anitha R.", location: "Chennai", text: "Refreshing and gentle. Perfect after cleansing.", rating: 5 },
    { name: "Revathi S.", location: "Coimbatore", text: "Balances my skin without drying. Love the rose water scent.", rating: 5 },
    { name: "Deepa M.", location: "Madurai", text: "Simple addition to my routine, big difference in results.", rating: 5 },
    { name: "Kavitha K.", location: "Salem", text: "Natural ingredients, no harsh chemicals. Perfect for sensitive skin.", rating: 5 },
    { name: "Priya L.", location: "Trichy", text: "Hydrates well. My skin feels fresh all day.", rating: 5 },
    { name: "Sangeetha S.", location: "Erode", text: "Best toner at this price. Honest and effective.", rating: 5 },
  ],
  "bath-powder": [
    { name: "Meena R.", location: "Chennai", text: "Traditional bathing experience. Reminds me of my grandmother's care.", rating: 5 },
    { name: "Lakshmi S.", location: "Coimbatore", text: "Gentle cleansing, natural fragrance. Whole family loves it!", rating: 5 },
    { name: "Divya K.", location: "Madurai", text: "வீட்டில் எல்லோரும் use பண்றோம். Safe for elders and kids.", rating: 5 },
    { name: "Anitha L.", location: "Salem", text: "Skin feels soft and smooth after every bath. Highly recommend!", rating: 5 },
    { name: "Kavitha R.", location: "Trichy", text: "No synthetic ingredients. Pure herbal goodness.", rating: 5 },
    { name: "Priya M.", location: "Erode", text: "Best bath powder I've used. Natural and effective.", rating: 5 },
  ],
  "herbal-conditioner": [
    { name: "Sangeetha K.", location: "Chennai", text: "Detangles easily without weighing hair down. Perfect!", rating: 5 },
    { name: "Revathi L.", location: "Coimbatore", text: "Works great with the herbal shampoo. Complete hair care routine.", rating: 5 },
    { name: "Deepa S.", location: "Madurai", text: "Natural shine without chemicals. My hair has never looked better.", rating: 5 },
    { name: "Meena M.", location: "Salem", text: "Gentle conditioning for daily use. Love the herbal formula.", rating: 5 },
    { name: "Lakshmi K.", location: "Trichy", text: "Easy to apply, easy to rinse. Hair feels silky soft.", rating: 5 },
    { name: "Priya R.", location: "Erode", text: "Best conditioner for natural hair care. Highly recommend!", rating: 5 },
  ],
};

// Problem-solution mapping for products
const productProblems: Record<string, { problem: string; solution: string }> = {
  "brightening-serum": {
    problem: "Dull, tired-looking skin that lacks natural radiance",
    solution: "Our gentle herbal extracts work to reveal your skin's natural glow over time, without harsh chemicals or quick fixes"
  },
  "herbal-shampoo": {
    problem: "Harsh shampoos that strip hair of natural oils, leaving it dry and damaged",
    solution: "Our mild herbal formula cleanses gently while preserving your hair's natural moisture and strength"
  },
  "herbal-face-pack": {
    problem: "Clogged pores and dull skin from daily pollution and stress",
    solution: "Weekly deep cleansing with traditional herbs removes impurities while nourishing your skin naturally"
  },
  "herbal-soap": {
    problem: "Chemical soaps that dry out skin and cause irritation",
    solution: "Gentle, natural cleansing that moisturizes while cleaning, safe for the whole family including children"
  },
  "hair-growth-serum": {
    problem: "Hair thinning, weak roots, and excessive hair fall",
    solution: "Potent herbal ingredients nourish hair follicles from the root, promoting stronger, healthier hair growth naturally"
  },
  "herbal-toner": {
    problem: "Unbalanced skin pH and poor absorption of skincare products",
    solution: "Natural toning that refreshes, balances, and prepares your skin for better absorption of serums and treatments"
  },
  "bath-powder": {
    problem: "Missing the traditional, gentle bathing experience of natural ingredients",
    solution: "Time-tested herbal formula that cleanses gently while leaving skin soft, smooth, and naturally fragrant"
  },
  "herbal-conditioner": {
    problem: "Tangled, dry hair that's difficult to manage after washing",
    solution: "Natural conditioning that softens, detangles, and adds shine without weighing hair down or leaving residue"
  },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addToCart } = useCart();
  const { toast } = useToast();

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

  const reviews = productReviews[product.slug] || productReviews["brightening-serum"];
  const problemSolution = productProblems[product.slug] || productProblems["brightening-serum"];

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

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

      {/* Product Hero - Above the Fold */}
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
              <div className="flex items-center gap-2 mb-3">
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
                  {product.rating}/5 · {product.reviewCount.toLocaleString()}+ reviews
                </span>
              </div>

              {/* One-line Benefit */}
              <p className="text-muted-foreground mb-4">
                {product.benefit}
              </p>

              {/* Price & Size */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  ₹{product.price}
                </span>
                <span className="text-muted-foreground">· {product.size}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button onClick={handleAddToCart} variant="hero" size="lg" className="flex-1">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button asChild variant="whatsapp" size="lg" className="flex-1">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Trust Text */}
              <div className="p-4 bg-sage-light/50 rounded-xl">
                <p className="text-sage-dark font-medium text-sm text-center">
                  வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Below the Fold Sections */}
      <section className="py-8 md:py-12 bg-cream/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Why Customers Love This */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Why Customers Love This
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Herbal, gentle, trusted by families</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Safe for daily use</span>
                </li>
              </ul>
            </div>

            {/* What Problem It Helps With */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                What Problem It Helps With
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-200">
                  <p className="text-foreground font-medium text-sm mb-1">The Problem:</p>
                  <p className="text-muted-foreground">{problemSolution.problem}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-200">
                  <p className="text-foreground font-medium text-sm mb-1">Our Solution:</p>
                  <p className="text-muted-foreground">{problemSolution.solution}</p>
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                How to Use
              </h3>
              <ol className="space-y-3 mb-4">
                {product.howToUse.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-muted-foreground italic">
                Safe for daily use. Patch test recommended for sensitive skin.
              </p>
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

      {/* Customer Reviews - Inline */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Customer Reviews
              </h3>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating}/5 based on {product.reviewCount.toLocaleString()}+ reviews
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-background p-5 rounded-xl shadow-soft relative">
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/10" />
                  
                  <div className="flex items-center gap-1 text-xs text-primary mb-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span className="font-medium">Verified Purchase</span>
                  </div>
                  
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-3 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center">
                      <span className="text-xs font-semibold text-accent-foreground">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
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