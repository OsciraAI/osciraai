import { Globe, Trophy, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowWeWorkSection = () => {
  const points = [
    {
      icon: Globe,
      title: "Global Talent",
      description: "Access to the best minds worldwide"
    },
    {
      icon: Trophy,
      title: "Top-Tier Only",
      description: "PhDs, patents, published researchers"
    },
    {
      icon: Users,
      title: "Full Support",
      description: "From concept to deployment and beyond"
    },
    {
      icon: TrendingUp,
      title: "Built to Scale",
      description: "10k+ QPS, 5M+ users, proven results"
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Talent Matters,{" "}
            <span className="text-gradient">
              Not Location
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At OsciraAI, we hire top-tier AI talent from around the world. Remote-first, results-driven, always exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/how-we-work" className="inline-flex items-center gap-2">
              Learn How We Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
