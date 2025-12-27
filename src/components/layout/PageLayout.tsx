import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | Aishwaryam Herbals</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <AnnouncementBar />
        <Header />
        
        <main>
          {children}
        </main>
        
        <Footer />
        <MobileBottomBar />
        <FloatingWhatsApp />
      </div>
    </>
  );
};
