import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, Search, BarChart3, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CaseStudies = () => {
  const cases = [
    {
      icon: Home,
      metric: "22% Growth",
      title: "Next Best Action Prediction for Homepage Optimization",
      challenge: "Homepage recommendations lacked personalization, leading to low engagement and missed revenue opportunities",
      solution: "Developed AI-powered personalized homepage recommendations that transform user experience and drive engagement through intelligent predictions",
      impact: [
        "Enhanced user experience with personalized product feature targeting",
        "Increased session time driving higher ad revenue",
        "22% session time growth (personalized vs random)",
        "Validated through rigorous A/B testing",
        "Scaled across 5M+ users over 30 days"
      ],
      featured: true
    },
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
      impact: ["Search relevance from 30% to 85%", "Patent published approach", "50% reduction in zero-result queries"]
    },
    {
      icon: BarChart3,
      metric: "Revenue-Driven",
      title: "Dynamic Product Recommendations",
      challenge: "Static product rankings failing to balance UX and business goals",
      solution: "Built real-time recommendation engine with revenue-awareness and A/B testing framework",
      impact: ["35% increase in average order value", "20% improvement in conversion", "Scalable to 10k QPS"]
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

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cases.map((caseStudy, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card 
                    className={`h-full hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 bg-background/80 backdrop-blur ${caseStudy.featured ? 'border-primary/30 ring-1 ring-primary/20' : ''}`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <caseStudy.icon className="w-10 h-10 text-primary" />
                        {caseStudy.featured && (
                          <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
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
                              <span className="text-primary mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {caseStudy.featured && (
                        <div className="pt-4 border-t border-border">
                          <div className="text-sm font-semibold text-muted-foreground mb-3">Performance Comparison</div>
                          <div className="flex items-end gap-4 h-24">
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-16 bg-muted rounded-t" style={{ height: '60px' }}></div>
                              <span className="text-xs text-muted-foreground">Random</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-16 bg-gradient-to-t from-primary to-secondary rounded-t" style={{ height: '82px' }}></div>
                              <span className="text-xs text-primary font-medium">+22%</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
