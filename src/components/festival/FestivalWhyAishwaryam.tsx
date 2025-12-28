import { Leaf, Heart, Sparkles, IndianRupee } from "lucide-react";

const trustPoints = [
  {
    icon: Heart,
    titleEn: "Safe for Regular Use",
    titleTa: "தினமும் பயன்படுத்த பாதுகாப்பானது",
    descriptionEn: "Gentle herbal care designed for everyday beauty, safe for the whole family.",
    descriptionTa: "குடும்பத்தினர் அனைவருக்கும் ஏற்ற மிருதுவான மூலிகை பொருட்கள்",
  },
  {
    icon: Sparkles,
    titleEn: "No Artificial Fragrance",
    titleTa: "செயற்கை வாசனை இல்லை",
    descriptionEn: "Pure natural scents from herbs and flowers. No synthetic chemicals.",
    descriptionTa: "தூய இயற்கை வாசனை மட்டுமே. செயற்கை ரசாயனங்கள் இல்லை",
  },
  {
    icon: Leaf,
    titleEn: "Handmade with Care",
    titleTa: "அக்கறையுடன் கைவினையில் தயாரிக்கப்பட்டது",
    descriptionEn: "Traditional recipes made fresh in small batches for maximum effectiveness.",
    descriptionTa: "பாரம்பரிய குறிப்புகள், சிறிய தொகுதிகளில் புதிதாக தயாரிக்கப்படுகிறது",
  },
  {
    icon: IndianRupee,
    titleEn: "Honest Pricing",
    titleTa: "நேர்மையான விலை",
    descriptionEn: "No fake offers. What we say is what you pay. Fair prices always.",
    descriptionTa: "போலி சலுகைகள் இல்லை. எப்போதும் நியாயமான விலை",
  },
];

export const FestivalWhyAishwaryam = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Aishwaryam for Festivals?
          </h2>
          <p className="font-serif text-xl text-foreground/80 mb-2">
            பண்டிகைக்கு ஏன் ஐஸ்வர்யம்?
          </p>
          <p className="text-muted-foreground">
            Traditional values meet modern quality standards
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={point.titleEn}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {point.titleEn}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {point.titleTa}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Text */}
        <p className="text-center text-muted-foreground mt-10 text-sm md:text-base">
          வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
        </p>
      </div>
    </section>
  );
};
