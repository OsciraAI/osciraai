import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Problem Solving Data Science
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 5000+ founders and engineers getting weekly insights on scaling AI systems
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://www.linkedin.com/newsletters/problem-solving-data-science-7157296853768196096/', '_blank')}
            className="group"
          >
            Subscribe on LinkedIn
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
