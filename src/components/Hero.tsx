import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCaseStudies = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-[var(--gradient-mesh)]" />
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          AI Solutions That{" "}
          <span className="text-gradient">
            Scale
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          No fluff. Just battle-tested data science that delivers measurable results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={scrollToContact} className="group">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToCaseStudies}>
            View Our Work
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-muted-foreground">
          <a href="tel:+919899376787" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91 98993 76787</span>
          </a>
          <a href="mailto:hello@osciraai.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>hello@osciraai.com</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="animate-counter-up">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">&lt;100ms</div>
            <div className="text-muted-foreground">Response time at 10k QPS</div>
          </div>
          <div className="animate-counter-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">100M+</div>
            <div className="text-muted-foreground">User systems deployed</div>
          </div>
          <div className="animate-counter-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Multiple</div>
            <div className="text-muted-foreground">Patents & Research Papers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
