import { MessageSquare, Target, TrendingUp, BarChart3, Eye, Database } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "LLM & Chatbot Solutions",
      description: "Production-ready conversational AI that understands context and drives engagement"
    },
    {
      icon: Target,
      title: "Recommendation Engines",
      description: "Dynamic ranking by user preference + revenue optimization"
    },
    {
      icon: TrendingUp,
      title: "Ad & CTR Optimization",
      description: "Patented approaches to maximize conversion and revenue"
    },
    {
      icon: BarChart3,
      title: "Forecasting Systems",
      description: "Predictive models that actually predict, not just extrapolate"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image recognition and analysis at scale with sub-second latency"
    },
    {
      icon: Database,
      title: "Data Infrastructure",
      description: "Pipelines that never break, built for 100M+ user scale"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services Built for Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions that go from prototype to production without breaking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in bg-card/80 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <service.icon className="w-10 h-10 mb-4 text-primary group-hover:text-secondary transition-colors" />
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
