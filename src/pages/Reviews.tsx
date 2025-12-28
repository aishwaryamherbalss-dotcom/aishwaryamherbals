import { PageLayout } from "@/components/layout/PageLayout";
import { Star, Quote, CheckCircle, MessageCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Saranya",
    location: "Chennai",
    rating: 5,
    text: "Very gentle. Using daily without any irritation. My skin has never felt better!",
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
    text: "Texture is light. Skin feels healthy. Perfect for daily use.",
    product: "Herbal Shampoo",
    verified: true,
  },
  {
    id: 4,
    name: "Kavitha",
    location: "Madurai",
    rating: 5,
    text: "Good for regular use. Not sticky. Even my daughter loves it.",
    product: "Face Pack",
    verified: true,
  },
  {
    id: 5,
    name: "Lakshmi",
    location: "Trichy",
    rating: 5,
    text: "Using for 2 weeks. Skin feels softer. We've been using for 6 months now.",
    product: "Brightening Serum",
    verified: true,
  },
  {
    id: 6,
    name: "Priya",
    location: "Erode",
    rating: 5,
    text: "Nice herbal feel. No harsh effect. Will definitely reorder.",
    product: "Herbal Toner",
    verified: true,
  },
  {
    id: 7,
    name: "சுமதி",
    location: "கோயம்புத்தூர்",
    rating: 5,
    text: "சருமம் நல்லா feel ஆகுது. Pure herbal, no chemicals.",
    product: "Hair Growth Serum",
    verified: true,
  },
  {
    id: 8,
    name: "Geetha",
    location: "Thanjavur",
    rating: 5,
    text: "Calm product. Suitable for family use. Family tradition!",
    product: "Bath Powder",
    verified: true,
  },
  {
    id: 9,
    name: "Sathya",
    location: "Karur",
    rating: 5,
    text: "Combo is useful. Value for money. Loving every product.",
    product: "Best Seller Combo",
    verified: true,
  },
  {
    id: 10,
    name: "Anitha",
    location: "Tirunelveli",
    rating: 5,
    text: "Daily use ku romba nalla iruku. Simple and effective.",
    product: "Herbal Conditioner",
    verified: true,
  },
  {
    id: 11,
    name: "ரேவதி",
    location: "சேலம்",
    rating: 5,
    text: "Chemical feel இல்ல. பிடிச்சிருக்கு.",
    product: "Herbal Shampoo",
    verified: true,
  },
  {
    id: 12,
    name: "Neha",
    location: "Bengaluru",
    rating: 5,
    text: "Very mild. Works well with regular use.",
    product: "Herbal Toner",
    verified: true,
  },
  {
    id: 13,
    name: "Meena",
    location: "Salem",
    rating: 5,
    text: "I like the natural smell. Simple and clean.",
    product: "Herbal Soap",
    verified: true,
  },
  {
    id: 14,
    name: "மாலதி",
    location: "தஞ்சாவூர்",
    rating: 5,
    text: "வீட்டில் எல்லாரும் பயன்படுத்துறோம்.",
    product: "Bath Powder",
    verified: true,
  },
  {
    id: 15,
    name: "Sharmila",
    location: "Vellore",
    rating: 5,
    text: "I ordered again. Comfortable on skin.",
    product: "Brightening Serum",
    verified: true,
  },
  {
    id: 16,
    name: "பிரியா",
    location: "ஈரோடு",
    rating: 5,
    text: "மணம் அதிகம் இல்ல. நல்லா இருக்கு.",
    product: "Face Pack",
    verified: true,
  },
  {
    id: 17,
    name: "Anjali",
    location: "Hyderabad",
    rating: 5,
    text: "Simple and effective. Highly recommend!",
    product: "Herbal Toner",
    verified: true,
  },
  {
    id: 18,
    name: "Nirmala",
    location: "Kumbakonam",
    rating: 5,
    text: "Family ellarum use panrom. Safe for all.",
    product: "Family Care Combo",
    verified: true,
  },
  {
    id: 19,
    name: "Deepa",
    location: "Tiruppur",
    rating: 5,
    text: "Repeat order panninen. Very satisfied.",
    product: "Herbal Shampoo",
    verified: true,
  },
  {
    id: 20,
    name: "Bhavani",
    location: "Hosur",
    rating: 5,
    text: "No fake promises. Honest product.",
    product: "Herbal Soap",
    verified: true,
  },
];

const Reviews = () => {
  return (
    <PageLayout
      title="Customer Reviews - Aishwaryam Herbals"
      description="Read what our customers say about Aishwaryam Herbals products. Real reviews from real families across Tamil Nadu."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            ⭐ 4.9 Average Rating
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Our Customers Say
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Real words from real families across Tamil Nadu
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-8 bg-cream/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
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

      {/* Reviews Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-background rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-medium transition-all duration-300 relative group"
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                {review.verified && (
                  <div className="flex items-center gap-1 text-xs text-primary mb-3">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span className="font-medium">Verified Purchase</span>
                  </div>
                )}

                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground mb-4 leading-relaxed text-sm md:text-base">
                  "{review.text}"
                </p>

                <span className="inline-block px-3 py-1 bg-sage-light text-sage-dark text-xs font-medium rounded-full mb-4">
                  {review.product}
                </span>

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
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 md:py-12 bg-sage-light/50">
        <div className="container text-center">
          <p className="text-sage-dark font-medium mb-4">
            வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
          </p>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Join thousands of Tamil Nadu families who trust Aishwaryam Herbals for their daily herbal care.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reviews;
