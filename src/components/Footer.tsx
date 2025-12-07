import { Mail, Phone } from "lucide-react";
import osciraLogo from "@/assets/oscira-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left flex items-center gap-3">
            <img 
              src={osciraLogo} 
              alt="OsciraAI Logo" 
              className="h-8 w-auto"
            />
            <div>
              <div className="text-2xl font-bold">
                <span className="text-foreground">Oscira</span>
                <span className="text-primary">AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI solutions that scale. No fluff.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <a 
              href="mailto:suppal@gatech.edu"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              suppal@gatech.edu
            </a>
            <a 
              href="tel:+919899376787"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 98993 76787
            </a>
            <a 
              href="https://www.linkedin.com/newsletters/problem-solving-data-science-7157296853768196096/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn Newsletter
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 OsciraAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
