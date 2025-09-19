import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md border-b border-border z-50 transition-colors ${isScrolled ? "bg-background/90 shadow-md" : "bg-background/80"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <img src={logo} alt="EduConsult logo" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:opacity-90 transition-smooth">
                EduConsult
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/90 hover:text-primary relative transition-smooth px-3 py-2 text-sm font-medium after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button variant="cta">
              Free Consultation
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button variant="cta" className="w-full">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}