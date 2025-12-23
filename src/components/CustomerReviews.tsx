import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Lakshmi",
    location: "Chennai",
    rating: 5,
    text: "ரொம்ப நல்ல product. Regular-ஆ use பண்ணுறேன். My hair fall has reduced so much!",
    product: "Hair Growth Serum",
  },
  {
    id: 2,
    name: "Kavitha R.",
    location: "Coimbatore",
    rating: 5,
    text: "Worth every rupee. Pure herbal feel on my skin. My whole family uses their products now.",
    product: "Rose Soap",
  },
  {
    id: 3,
    name: "Meenakshi S.",
    location: "Madurai",
    rating: 5,
    text: "Finally found products that are both affordable and effective! No fake discounts, just honest pricing.",
    product: "Face Pack",
  },
  {
    id: 4,
    name: "Anjali Devi",
    location: "Trichy",
    rating: 5,
    text: "என் அம்மாவும் நானும் use பண்றோம். Super soft skin! Love the natural fragrance.",
    product: "Bath Powder",
  },
];

export const CustomerReviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-sage-light/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-background text-primary text-sm font-medium rounded-full mb-4 shadow-soft">
            ⭐ 4.9 Average Rating
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from real customers across Tamil Nadu
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Product Badge */}
              <span className="inline-block px-3 py-1 bg-sage-light text-sage-dark text-xs font-medium rounded-full mb-4">
                {review.product}
              </span>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent-foreground">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl font-bold text-primary">10,000+</p>
            <p className="text-muted-foreground text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl font-bold text-primary">4.9/5</p>
            <p className="text-muted-foreground text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl font-bold text-primary">50+</p>
            <p className="text-muted-foreground text-sm">Herbal Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};
