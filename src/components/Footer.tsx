import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import osciraLogo from "@/assets/oscira-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
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

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <a 
                href="/#services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a 
                href="/#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="mailto:suppal@gatech.edu"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-end"
              >
                <Mail className="w-4 h-4" />
                suppal@gatech.edu
              </a>
              <a 
                href="tel:+919899376787"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-end"
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
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 OsciraAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
