import { Droplets, Clock, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    stepEn: "Step 1: Cleanse",
    stepTa: "படி 1: சுத்தம் செய்யுங்கள்",
    descriptionEn: "Start with our herbal soap or bath powder for a gentle, refreshing cleanse.",
    descriptionTa: "மூலிகை சோப்பு அல்லது குளியல் பொடியுடன் தொடங்குங்கள்.",
  },
  {
    icon: Clock,
    stepEn: "Step 2: Apply",
    stepTa: "படி 2: தடவுங்கள்",
    descriptionEn: "Apply face pack or serum as needed. Leave for the recommended time.",
    descriptionTa: "Face pack அல்லது serum தடவி பரிந்துரைக்கப்பட்ட நேரம் வரை விடுங்கள்.",
  },
  {
    icon: Sparkles,
    stepEn: "Step 3: Rinse & Glow",
    stepTa: "படி 3: கழுவி பிரகாசியுங்கள்",
    descriptionEn: "Rinse with lukewarm water and pat dry. Enjoy your natural glow!",
    descriptionTa: "வெதுவெதுப்பான நீரில் கழுவுங்கள். இயற்கை பிரகாசத்தை அனுபவியுங்கள்!",
  },
  {
    icon: Heart,
    stepEn: "Step 4: Repeat Daily",
    stepTa: "படி 4: தினமும் தொடருங்கள்",
    descriptionEn: "Use consistently for best results. Safe for everyday use.",
    descriptionTa: "சிறந்த பலன்களுக்கு தினமும் பயன்படுத்துங்கள். தினசரி பயன்பாட்டிற்கு பாதுகாப்பானது.",
  },
];

export const FestivalHowToUse = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            How to Use
          </h2>
          <p className="font-serif text-xl text-foreground/80 mb-2">
            எப்படி பயன்படுத்துவது
          </p>
          <p className="text-muted-foreground">
            Simple steps for maximum benefits
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-soft text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mt-4 mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* English Step Title */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {step.stepEn}
              </h3>

              {/* Tamil Step Title */}
              <p className="text-sm text-primary font-medium mb-3">
                {step.stepTa}
              </p>

              {/* English Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Tip */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm md:text-base bg-background/80 inline-block px-6 py-3 rounded-full">
            💡 Tip: Use herbal products consistently for 2-4 weeks to see visible results
          </p>
        </div>
      </div>
    </section>
  );
};
