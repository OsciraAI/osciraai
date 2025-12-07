import { Phone } from "lucide-react";
import osciraLogo from "@/assets/oscira-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img 
            src={osciraLogo} 
            alt="OsciraAI Logo" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">
            <span className="text-foreground">Oscira</span>
            <span className="text-primary">AI</span>
          </span>
        </a>
        
        <a 
          href="tel:+919899376787"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">+91 98993 76787</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
