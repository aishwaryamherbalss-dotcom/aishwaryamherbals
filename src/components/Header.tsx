import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

const shopDropdownItems = [
  { name: "All Products", href: "/shop" },
  { name: "Skin Care", href: "/shop/skin-care" },
  { name: "Hair Care", href: "/shop/hair-care" },
  { name: "Face Packs", href: "/shop/face-packs" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Combos", href: "/combos" },
  { name: "About Us", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "தமிழ்">("EN");
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileShopOpen(false);
    setIsShopDropdownOpen(false);
  }, [location.pathname]);

  const isShopActive = location.pathname.startsWith("/shop");

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
            <Link
              to="/"
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                location.pathname === "/" ? "text-primary after:w-full" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Shop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                  isShopActive ? "text-primary after:w-full" : "text-foreground/80 hover:text-primary"
                }`}
              >
                Shop
                <ChevronDown className={`w-4 h-4 transition-transform ${isShopDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isShopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-medium py-2 animate-fade-in z-50">
                  {shopDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-secondary"
                      }`}
                      onClick={() => setIsShopDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                  location.pathname === link.href ? "text-primary after:w-full" : "text-foreground/80 hover:text-primary"
                }`}
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
              <Link
                to="/"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === "/" ? "text-primary bg-primary/5" : "text-foreground hover:bg-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Shop Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isShopActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  Shop
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`} />
                </button>

                {isMobileShopOpen && (
                  <div className="pl-4 mt-1 space-y-1 animate-fade-in">
                    {shopDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                          location.pathname === item.href
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-secondary"
                  }`}
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
