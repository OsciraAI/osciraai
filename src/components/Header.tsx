import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import osciraLogo from "@/assets/oscira-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", isAnchor: false },
    { name: "Services", href: "/", anchor: "services", isAnchor: true },
    { name: "Blog", href: "/blog", isAnchor: false },
    { name: "We're Hiring", href: "/careers", isAnchor: false },
    { name: "Contact", href: "/", anchor: "contact", isAnchor: true }
  ];

  const handleAnchorClick = (anchor: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(anchor);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page first, then scroll
      window.location.href = `/#${anchor}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity min-h-[48px]">
          <img 
            src={osciraLogo} 
            alt="OsciraAI Logo" 
            className="h-10 w-auto"
            width={40}
            height={40}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <span className="text-xl font-bold">
            <span className="text-foreground">Oscira</span>
            <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <button
                key={link.name}
                onClick={() => handleAnchorClick(link.anchor!)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2 ${
                  location.pathname === link.href 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="tel:+919899376787"
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors min-h-[48px] px-2"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98993 76787</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 min-h-[48px] min-w-[48px] flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <button
                  key={link.name}
                  onClick={() => handleAnchorClick(link.anchor!)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-3 min-h-[48px]"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 min-h-[48px] transition-colors ${
                    location.pathname === link.href 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href="tel:+919899376787"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-3 min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98993 76787</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
