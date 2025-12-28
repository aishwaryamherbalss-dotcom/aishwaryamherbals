import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { TrustBar } from "@/components/TrustBar";
import { TrustSignals } from "@/components/TrustSignals";
import { BestSellers } from "@/components/BestSellers";
import { VideoSection } from "@/components/VideoSection";
import { StarterCombos } from "@/components/StarterCombos";
import { WhyAishwaryam } from "@/components/WhyAishwaryam";
import { CustomerReviews } from "@/components/CustomerReviews";
import { Footer } from "@/components/Footer";
import { NewProductPopup } from "@/components/NewProductPopup";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SocialProofToast } from "@/components/SocialProofToast";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aishwaryam Herbals - Premium Herbal Beauty & Wellness | Tamil Nadu</title>
        <meta 
          name="description" 
          content="Discover pure herbal skincare and wellness products handmade in Tamil Nadu. Honest pricing, no fake discounts. Trusted by 10,000+ families. Shop shampoos, serums, soaps & more." 
        />
        <meta name="keywords" content="herbal products, ayurvedic skincare, natural beauty, Tamil Nadu, hair serum, herbal shampoo, handmade soap" />
        <link rel="canonical" href="https://aishwaryamherbals.com" />
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <AnnouncementBar />
        <Header />
        
        <main>
          <HeroSlider />
          <TrustBar />
          <TrustSignals />
          <BestSellers />
          <VideoSection />
          <StarterCombos />
          <WhyAishwaryam />
          <CustomerReviews />
        </main>
        
        <Footer />
        <NewProductPopup />
        <MobileBottomBar />
        <FloatingWhatsApp />
        <SocialProofToast />
      </div>
    </>
  );
};

export default Index;
