import { useParams, Link } from "react-router-dom";
import { Star, Check, ChevronLeft, MessageCircle, ShoppingCart, Quote, CheckCircle, Sparkles, Users, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { productStories, whyAishwaryamPoints } from "@/data/productStoryData";

// Product-specific reviews data
const productReviews: Record<string, Array<{name: string; location: string; text: string; rating: number}>> = {
  "brightening-serum": [
    { name: "Saranya", location: "Chennai", text: "Very gentle. Using daily without any irritation.", rating: 5 },
    { name: "Lakshmi", location: "Trichy", text: "Using for 2 weeks. Skin feels softer.", rating: 5 },
    { name: "கலைவாணி", location: "மதுரை", text: "மிக மென்மையாக இருக்கு. தினசரி பயன்படுத்தலாம்.", rating: 5 },
    { name: "Neha", location: "Bengaluru", text: "Very mild. Works well with regular use.", rating: 5 },
    { name: "Sharmila", location: "Vellore", text: "I ordered again. Comfortable on skin.", rating: 5 },
    { name: "சுமதி", location: "கோயம்புத்தூர்", text: "சருமம் நல்லா feel ஆகுது.", rating: 5 },
  ],
  "herbal-shampoo": [
    { name: "Revathi", location: "Coimbatore", text: "Texture is light. Skin feels healthy.", rating: 5 },
    { name: "Priya", location: "Erode", text: "Nice herbal feel. No harsh effect.", rating: 5 },
    { name: "மாலதி", location: "தஞ்சாவூர்", text: "வீட்டில் எல்லாரும் பயன்படுத்துறோம்.", rating: 5 },
    { name: "Swathi", location: "Vizag", text: "Clean formulation. Happy with it.", rating: 5 },
    { name: "Deepa", location: "Tiruppur", text: "Repeat order panninen.", rating: 5 },
    { name: "ரேவதி", location: "சேலம்", text: "Chemical feel இல்ல. பிடிச்சிருக்கு.", rating: 5 },
  ],
  "herbal-face-pack": [
    { name: "Kavitha", location: "Madurai", text: "Good for regular use. Not sticky.", rating: 5 },
    { name: "Anitha", location: "Tirunelveli", text: "Daily use ku romba nalla iruku.", rating: 5 },
    { name: "பிரியா", location: "ஈரோடு", text: "மணம் அதிகம் இல்ல. நல்லா இருக்கு.", rating: 5 },
    { name: "Anjali", location: "Hyderabad", text: "Simple and effective.", rating: 5 },
    { name: "Rajeswari", location: "Dindigul", text: "Simple product. Trustworthy.", rating: 5 },
    { name: "Nirmala", location: "Kumbakonam", text: "Family ellarum use panrom.", rating: 5 },
  ],
  "herbal-soap": [
    { name: "Meena", location: "Salem", text: "I like the natural smell. Simple and clean.", rating: 5 },
    { name: "Geetha", location: "Thanjavur", text: "Calm product. Suitable for family use.", rating: 5 },
    { name: "Uma", location: "Namakkal", text: "Simple ingredients. No strong fragrance.", rating: 5 },
    { name: "Pooja", location: "Pune", text: "Feels natural. No irritation.", rating: 5 },
    { name: "Bhavani", location: "Hosur", text: "No fake promises. Honest product.", rating: 5 },
    { name: "கலைவாணி", location: "மதுரை", text: "மிக மென்மையாக இருக்கு. தினசரி பயன்படுத்தலாம்.", rating: 5 },
  ],
  "hair-growth-serum": [
    { name: "Saranya", location: "Chennai", text: "Very gentle. Using daily without any irritation.", rating: 5 },
    { name: "Lakshmi", location: "Trichy", text: "Using for 2 weeks. Skin feels softer.", rating: 5 },
    { name: "Ritu", location: "Mumbai", text: "Comfortable for daily routine.", rating: 5 },
    { name: "Sathya", location: "Karur", text: "Combo is useful. Value for money.", rating: 5 },
    { name: "சுமதி", location: "கோயம்புத்தூர்", text: "சருமம் நல்லா feel ஆகுது.", rating: 5 },
    { name: "Sharmila", location: "Vellore", text: "I ordered again. Comfortable on skin.", rating: 5 },
  ],
  "herbal-toner": [
    { name: "Revathi", location: "Coimbatore", text: "Texture is light. Skin feels healthy.", rating: 5 },
    { name: "Priya", location: "Erode", text: "Nice herbal feel. No harsh effect.", rating: 5 },
    { name: "Neha", location: "Bengaluru", text: "Very mild. Works well with regular use.", rating: 5 },
    { name: "மாலதி", location: "தஞ்சாவூர்", text: "வீட்டில் எல்லாரும் பயன்படுத்துறோம்.", rating: 5 },
    { name: "Anjali", location: "Hyderabad", text: "Simple and effective.", rating: 5 },
    { name: "ரேவதி", location: "சேலம்", text: "Chemical feel இல்ல. பிடிச்சிருக்கு.", rating: 5 },
  ],
  "bath-powder": [
    { name: "Kavitha", location: "Madurai", text: "Good for regular use. Not sticky.", rating: 5 },
    { name: "Meena", location: "Salem", text: "I like the natural smell. Simple and clean.", rating: 5 },
    { name: "Geetha", location: "Thanjavur", text: "Calm product. Suitable for family use.", rating: 5 },
    { name: "பிரியா", location: "ஈரோடு", text: "மணம் அதிகம் இல்ல. நல்லா இருக்கு.", rating: 5 },
    { name: "Swathi", location: "Vizag", text: "Clean formulation. Happy with it.", rating: 5 },
    { name: "Nirmala", location: "Kumbakonam", text: "Family ellarum use panrom.", rating: 5 },
  ],
  "herbal-conditioner": [
    { name: "Anitha", location: "Tirunelveli", text: "Daily use ku romba nalla iruku.", rating: 5 },
    { name: "Uma", location: "Namakkal", text: "Simple ingredients. No strong fragrance.", rating: 5 },
    { name: "Pooja", location: "Pune", text: "Feels natural. No irritation.", rating: 5 },
    { name: "Deepa", location: "Tiruppur", text: "Repeat order panninen.", rating: 5 },
    { name: "Rajeswari", location: "Dindigul", text: "Simple product. Trustworthy.", rating: 5 },
    { name: "Bhavani", location: "Hosur", text: "No fake promises. Honest product.", rating: 5 },
  ],
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
  const story = productStories[product.slug] || productStories["brightening-serum"];

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

      {/* Storytelling Sections */}
      <section className="py-8 md:py-12 bg-cream/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* 1. What's Inside - Ingredient Story */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>🌿</span> What's Inside (Traditional Herbal Care)
              </h3>
              <div className="space-y-4">
                {story.ingredients.map((ingredient, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-sage-light/30 rounded-xl">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{ingredient.name}</span>
                      <span className="text-muted-foreground"> — {ingredient.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. How to Use */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>🧴</span> How to Use
              </h3>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{story.usageTime}</span>
              </div>
              <ol className="space-y-3 mb-5">
                {story.usageSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="p-4 bg-sage-light/50 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-sm text-sage-dark">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Suitable for regular use</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-sage-dark">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Patch test recommended for sensitive skin</span>
                </div>
              </div>
            </div>

            {/* 3. What You'll Notice Over Time */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" /> What You'll Notice Over Time
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1-2<br/>Weeks</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-foreground">{story.resultsTimeline.week1_2}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3-4<br/>Weeks</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-foreground">{story.resultsTimeline.week3_4}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary text-center">Regular<br/>Use</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-foreground">{story.resultsTimeline.regular}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-800 italic">
                  "Herbal products work gradually. Results may vary by individual."
                </p>
              </div>
            </div>

            {/* 4. Who Can Use This? */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Who Can Use This?
              </h3>
              <div className="space-y-3 mb-4">
                {story.suitability.suitable.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-xl">
                <span className="text-red-500 font-bold">✕</span>
                <span className="text-red-700 text-sm">{story.suitability.notFor}</span>
              </div>
            </div>

            {/* 5. Why Aishwaryam Herbals? */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>🤍</span> Why Aishwaryam Herbals?
              </h3>
              <div className="space-y-3">
                {whyAishwaryamPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-sage-light/30 rounded-xl">
                    <span className="text-xl">{point.icon}</span>
                    <span className="text-foreground">{point.text}</span>
                  </div>
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

      {/* Final CTA Block */}
      <section className="py-8 md:py-12 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Ready to Try {product.name}?
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                ₹{product.price}
              </span>
              <span className="text-muted-foreground">· {product.size}</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Honest herbal care for everyday use
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleAddToCart} variant="hero" size="lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </a>
              </Button>
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
