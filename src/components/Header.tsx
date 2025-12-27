import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Combos", href: "/combos" },
  { name: "About Us", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "தமிழ்">("EN");
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-10 z-40">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl md:text-2xl">🌿</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Aishwaryam
              </span>
              <span className="text-xs text-muted-foreground -mt-1 tracking-wider">
                HERBALS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "EN" ? "தமிழ்" : "EN")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </button>

            {/* Cart */}
            <Button asChild variant="ghost" size="icon" className="relative">
              <Link to="/cart">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <nav className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setLanguage(language === "EN" ? "தமிழ்" : "EN")}
                className="flex items-center gap-2 px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors w-full"
              >
                <Globe className="w-5 h-5" />
                <span>{language === "EN" ? "Switch to தமிழ்" : "Switch to English"}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
