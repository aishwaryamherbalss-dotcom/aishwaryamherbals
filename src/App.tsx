// App entry point with providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import CategorySkinCare from "./pages/CategorySkinCare";
import CategoryHairCare from "./pages/CategoryHairCare";
import CategoryFacePacks from "./pages/CategoryFacePacks";
import BestSellersPage from "./pages/BestSellersPage";
import CombosPage from "./pages/CombosPage";
import ProductDetail from "./pages/ProductDetail";
import ComboDetail from "./pages/ComboDetail";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import FestivalCollection from "./pages/FestivalCollection";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/skin-care" element={<CategorySkinCare />} />
                <Route path="/shop/hair-care" element={<CategoryHairCare />} />
                <Route path="/shop/face-packs" element={<CategoryFacePacks />} />
                <Route path="/best-sellers" element={<BestSellersPage />} />
                <Route path="/combos" element={<CombosPage />} />
                <Route path="/festival-collection" element={<FestivalCollection />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/combo/:slug" element={<ComboDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
