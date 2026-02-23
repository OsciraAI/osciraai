import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gradient.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Abstract neural network visualization" 
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Multiple Patent Holder | Proven Enterprise Scale</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          AI Solutions Built for{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Global Scale
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          From Dubai to London, Sydney to San Francisco — OsciraAI helps forward-thinking teams automate, build, and grow with intelligent AI systems.
        </p>

        <p className="text-sm text-muted-foreground mb-12">
          Serving clients across Europe, EMEA, North America, Australia &amp; Singapore
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild className="group min-h-[48px]">
            <a href="mailto:hello@osciraai.com">
              Get in Touch → hello@osciraai.com
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })} className="min-h-[48px]">
            View Our Work
          </Button>
        </div>

        {/* Flag strip */}
        <div className="flex items-center justify-center gap-3 text-2xl mb-16">
          <span title="United Kingdom">🇬🇧</span>
          <span title="European Union">🇪🇺</span>
          <span title="France">🇫🇷</span>
          <span title="United States">🇺🇸</span>
          <span title="United Arab Emirates">🇦🇪</span>
          <span title="Australia">🇦🇺</span>
          <span title="Singapore">🇸🇬</span>
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
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">Multiple Patents</div>
            <div className="text-muted-foreground">Including Ad-Personalisation at Scale</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
