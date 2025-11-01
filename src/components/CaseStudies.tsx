import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, Search, BarChart3 } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: TrendingUp,
      metric: "40% CTR Lift",
      title: "AdTech Platform Optimization",
      challenge: "Ad recommendations underperforming for 10M+ DAU platform",
      solution: "Implemented patent-pending dynamic ranking algorithm balancing user relevance with revenue optimization",
      impact: ["40% increase in click-through rate", "25% revenue lift", "Sub-100ms response time maintained"]
    },
    {
      icon: Search,
      metric: "30% → 85%",
      title: "Search Contextuality Enhancement",
      challenge: "High rate of out-of-context search results degrading user experience",
      solution: "Developed novel contextual understanding system with multi-stage ranking",
      impact: ["Search relevance from 30% to 85%", "Patent-pending approach", "50% reduction in zero-result queries"]
    },
    {
      icon: BarChart3,
      metric: "Revenue-Driven",
      title: "Dynamic Product Recommendations",
      challenge: "Static product rankings failing to balance UX and business goals",
      solution: "Built real-time recommendation engine with revenue-awareness and A/B testing framework",
      impact: ["35% increase in average order value", "20% improvement in conversion", "Scalable to 500k QPS"]
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proof Points That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real systems at real scale
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index}
              className="hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 animate-fade-in bg-background/80 backdrop-blur"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <caseStudy.icon className="w-12 h-12 mb-4 text-primary" />
                <div className="text-3xl font-bold text-secondary mb-2">{caseStudy.metric}</div>
                <CardTitle className="text-xl mb-2">{caseStudy.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Challenge</div>
                  <div className="text-sm">{caseStudy.challenge}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Solution</div>
                  <div className="text-sm">{caseStudy.solution}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Impact</div>
                  <ul className="text-sm space-y-1">
                    {caseStudy.impact.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
