import { Link } from "react-router-dom";
import { MessageCircle, Gift, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FestivalFinalCTA = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I'm interested in ordering from your Festival Collection.",
      "_blank"
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Ready to Celebrate with Herbal Care?
          </h2>
          <p className="font-serif text-xl text-foreground/80 mb-4">
            மூலிகை பராமரிப்புடன் கொண்டாட தயாரா?
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Order now via WhatsApp for quick delivery across Tamil Nadu. 
            Gift yourself or your loved ones the purity of herbal care.
          </p>
          <p className="text-muted-foreground mb-8">
            தமிழ்நாடு முழுவதும் விரைவான டெலிவரிக்கு இப்போதே WhatsApp-ல் ஆர்டர் செய்யுங்கள்.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6">
              <Link to="/combos" className="gap-2">
                <Gift className="w-5 h-5" />
                View Festival Combos
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Safe Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌿</span>
              <span>100% Herbal</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚚</span>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
