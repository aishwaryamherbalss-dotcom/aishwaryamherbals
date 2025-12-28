import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/layout/PageLayout";
import { FestivalHero } from "@/components/festival/FestivalHero";
import { FestivalWhyAishwaryam } from "@/components/festival/FestivalWhyAishwaryam";
import { FestivalBestSellers } from "@/components/festival/FestivalBestSellers";
import { FestivalCombos } from "@/components/festival/FestivalCombos";
import { FestivalCustomerVoices } from "@/components/festival/FestivalCustomerVoices";
import { FestivalHowToUse } from "@/components/festival/FestivalHowToUse";
import { FestivalFinalCTA } from "@/components/festival/FestivalFinalCTA";

const FestivalCollection = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Festival Collection | Aishwaryam Herbals - Traditional Herbal Products for Festivals</title>
        <meta 
          name="description" 
          content="Celebrate festivals with Aishwaryam Herbals' special collection. Handmade, natural herbal products perfect for Pongal, Diwali, and traditional occasions. Safe for the whole family." 
        />
      </Helmet>

      <FestivalHero />
      <FestivalWhyAishwaryam />
      <FestivalBestSellers />
      <FestivalCombos />
      <FestivalCustomerVoices />
      <FestivalHowToUse />
      <FestivalFinalCTA />
    </PageLayout>
  );
};

export default FestivalCollection;
