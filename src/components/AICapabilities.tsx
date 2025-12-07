import { Bot, BookOpen, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const AICapabilities = () => {
  const capabilities = [
    {
      icon: Bot,
      title: "AI Agents",
      headline: "Intelligent Autonomous Systems",
      description: "Building AI agents that make decisions, take actions, and continuously improve. From chatbots to complex workflow automation, our agents adapt to your business needs.",
      useCases: [
        "Customer service automation",
        "Intelligent task routing",
        "Predictive maintenance systems"
      ]
    },
    {
      icon: BookOpen,
      title: "RAG Solutions",
      headline: "Advanced Knowledge Systems",
      description: "Combining the power of LLMs with your proprietary data for accurate, contextual AI responses. Perfect for enterprise knowledge bases and intelligent search.",
      useCases: [
        "Internal knowledge management",
        "Customer support systems",
        "Document analysis at scale"
      ]
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      headline: "Tailored ML Models",
      description: "From proof-of-concept to production-scale deployment. We build recommendation engines, predictive analytics, personalization systems, and more.",
      useCases: [
        "Next best action prediction",
        "Demand forecasting",
        "Personalization engines"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We{" "}
            <span className="text-gradient">
              Build
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build AI—we solve complex business problems with intelligent, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 animate-fade-in bg-card/80 backdrop-blur"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{capability.title}</CardTitle>
                <p className="text-primary font-medium mb-3">{capability.headline}</p>
                <CardDescription className="text-base leading-relaxed">{capability.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Use Cases:</div>
                <ul className="space-y-1">
                  {capability.useCases.map((useCase, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
