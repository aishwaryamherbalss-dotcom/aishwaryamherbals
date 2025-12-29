import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import FestivalImageSlider from "@/components/festival/FestivalImageSlider";

const FestivalLanding = () => {
  return (
    <>
      <Helmet>
        <title>Festival Collection | Aishwaryam Herbals</title>
        <meta
          name="description"
          content="Discover our special festival collection of natural herbal products. Perfect gifts for Pongal, Diwali, and all celebrations."
        />
      </Helmet>

      <Header />

      <main>
        <FestivalImageSlider />
      </main>
    </>
  );
};

export default FestivalLanding;
