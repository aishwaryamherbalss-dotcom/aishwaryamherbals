// App entry point with providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import CategorySkinCare from "./pages/CategorySkinCare";
import CategoryHairCare from "./pages/CategoryHairCare";
import BestSellersPage from "./pages/BestSellersPage";
import CombosPage from "./pages/CombosPage";
import ProductDetail from "./pages/ProductDetail";
import ComboDetail from "./pages/ComboDetail";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
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
              <Route path="/category/skin-care" element={<CategorySkinCare />} />
              <Route path="/category/hair-care" element={<CategoryHairCare />} />
              <Route path="/best-sellers" element={<BestSellersPage />} />
              <Route path="/combos" element={<CombosPage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/combo/:slug" element={<ComboDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
