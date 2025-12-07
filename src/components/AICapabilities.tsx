import { Bot, BookOpen, Zap, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AICapabilities = () => {
  const capabilities = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Building intelligent autonomous systems that make decisions and take actions. Self-improving agents that adapt to your business needs."
    },
    {
      icon: BookOpen,
      title: "RAG Solutions",
      description: "Advanced knowledge retrieval systems combining AI with your proprietary data. Accurate, contextual responses powered by cutting-edge LLMs."
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      description: "Tailored machine learning models for your unique challenges. From proof-of-concept to production-scale deployment."
    },
    {
      icon: Sparkles,
      title: "Intelligent Automation",
      description: "Predictive analytics, recommendation engines, and intelligent automation that deliver measurable results."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build AI—we solve your complex business problems with intelligent, scalable solutions that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <CardTitle className="text-2xl mb-3">{capability.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{capability.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
