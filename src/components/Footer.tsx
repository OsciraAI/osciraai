import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The Data Leaf
            </div>
            <p className="text-sm text-muted-foreground">
              Data science solutions that scale. No fluff.
            </p>
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
              href="tel:+919667846787"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-9667846787
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
          © 2024 The Data Leaf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
