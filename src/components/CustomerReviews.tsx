import { Star, Quote, CheckCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Saranya",
    location: "Chennai",
    rating: 5,
    text: "Very gentle. Using daily without any irritation.",
    product: "Brightening Serum",
    verified: true,
  },
  {
    id: 2,
    name: "கலைவாணி",
    location: "மதுரை",
    rating: 5,
    text: "மிக மென்மையாக இருக்கு. தினசரி பயன்படுத்தலாம்.",
    product: "Herbal Soap",
    verified: true,
  },
  {
    id: 3,
    name: "Revathi",
    location: "Coimbatore",
    rating: 5,
    text: "Texture is light. Skin feels healthy.",
    product: "Herbal Shampoo",
    verified: true,
  },
  {
    id: 4,
    name: "Geetha",
    location: "Thanjavur",
    rating: 5,
    text: "Calm product. Suitable for family use.",
    product: "Bath Powder",
    verified: true,
  },
  {
    id: 5,
    name: "Neha",
    location: "Bengaluru",
    rating: 5,
    text: "Very mild. Works well with regular use.",
    product: "Herbal Toner",
    verified: true,
  },
  {
    id: 6,
    name: "மாலதி",
    location: "தஞ்சாவூர்",
    rating: 5,
    text: "வீட்டில் எல்லாரும் பயன்படுத்துறோம்.",
    product: "Face Pack",
    verified: true,
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
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real words from real families across Tamil Nadu
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-medium transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Verified Badge */}
              {review.verified && (
                <div className="flex items-center gap-1 text-xs text-primary mb-3">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="font-medium">Verified Purchase</span>
                </div>
              )}

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed text-sm md:text-base">
                "{review.text}"
              </p>

              {/* Product Badge */}
              <span className="inline-block px-3 py-1 bg-sage-light text-sage-dark text-xs font-medium rounded-full mb-4">
                {review.product}
              </span>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
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
