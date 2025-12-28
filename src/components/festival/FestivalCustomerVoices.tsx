import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Chennai",
    textEn: "I gifted the Glow Starter Combo to my sister for Diwali. She loved it! The products are so gentle and effective.",
    textTa: "தீபாவளிக்கு என் சகோதரிக்கு Glow Starter Combo பரிசாக கொடுத்தேன். அவருக்கு மிகவும் பிடித்திருந்தது!",
    rating: 5,
  },
  {
    name: "Lakshmi R.",
    location: "Coimbatore",
    textEn: "Been using Aishwaryam products for 2 years. Safe for my kids and elders at home. Perfect for festival preparations.",
    textTa: "2 வருடங்களாக பயன்படுத்துகிறேன். குழந்தைகள் மற்றும் பெரியவர்களுக்கும் பாதுகாப்பானது.",
    rating: 5,
  },
  {
    name: "Meena K.",
    location: "Madurai",
    textEn: "The herbal face pack gave me such a natural glow for Pongal. No chemicals, just pure herbal goodness.",
    textTa: "பொங்கலுக்கு herbal face pack இயற்கையான glow கொடுத்தது. ரசாயனங்கள் இல்லை.",
    rating: 5,
  },
];

export const FestivalCustomerVoices = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Customer Voices
          </h2>
          <p className="font-serif text-xl text-foreground/80 mb-2">
            வாடிக்கையாளர் கருத்துகள்
          </p>
          <p className="text-muted-foreground">
            Real experiences from our trusted customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* English Text */}
              <p className="text-foreground leading-relaxed mb-3">
                "{testimonial.textEn}"
              </p>

              {/* Tamil Text */}
              <p className="text-sm text-muted-foreground italic mb-4">
                "{testimonial.textTa}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
