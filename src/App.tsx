import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import CategorySkinCare from "./pages/CategorySkinCare";
import CategoryHairCare from "./pages/CategoryHairCare";
import BestSellersPage from "./pages/BestSellersPage";
import CombosPage from "./pages/CombosPage";
import ProductDetail from "./pages/ProductDetail";
import ComboDetail from "./pages/ComboDetail";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/category/skin-care" element={<CategorySkinCare />} />
            <Route path="/category/hair-care" element={<CategoryHairCare />} />
            <Route path="/best-sellers" element={<BestSellersPage />} />
            <Route path="/combos" element={<CombosPage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/combo/:slug" element={<ComboDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
