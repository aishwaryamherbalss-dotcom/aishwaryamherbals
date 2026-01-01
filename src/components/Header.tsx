import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Globe, ChevronDown, User } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

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
  { name: "Festival Collection", href: "/festival-collection" },
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
  const { user, signOut } = useAuth();
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
            {/* Login/Register Link - Desktop */}
            {user ? (
              <button
                onClick={() => signOut()}
                className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/auth"
                state={{ from: location.pathname }}
                className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <span>Login / Register</span>
              </Link>
            )}

            {/* Social Media Icons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://www.instagram.com/aishwaryam_herbals/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/aishwaryam.herbals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@AishwaryamHerbals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

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

              {/* Mobile Login/Register */}
              {user ? (
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors w-full"
                >
                  <User className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/auth"
                  state={{ from: location.pathname }}
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Login / Register</span>
                </Link>
              )}

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
