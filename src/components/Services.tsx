import { MessageSquare, Target, TrendingUp, BarChart3, Eye, Database, Activity, FlaskConical, Sparkles, BarChart2, Globe, Bot } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>;
  title: string;
  description: string;
  tagline?: string;
  fullDescription?: string;
  bullets?: string[];
  cta?: string;
}

const Services = () => {
  const services: Service[] = [
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
    },
    {
      icon: FlaskConical,
      title: "Statistical Machine Learning",
      description: "Robust statistical models for classification, regression, and clustering at scale"
    },
    {
      icon: Activity,
      title: "A/B Testing at Scale",
      description: "Rigorous experimentation frameworks with statistical significance and causal inference"
    },
    {
      icon: Sparkles,
      title: "Personalisation",
      description: "User-level customization engines that adapt in real-time to behavior and preferences"
    },
    {
      icon: BarChart2,
      title: "MarTech & Campaign Intelligence",
      tagline: "Run smarter campaigns. Spend less. Convert more.",
      description: "Leverage AI to continuously optimise your ad campaigns with real-time A/B testing, creative performance scoring, and campaign fatigue detection.",
      fullDescription: "Our system identifies when audiences are burning out on your creatives and automatically flags or rotates them — keeping your ROAS healthy and your sales climbing.",
      bullets: [
        "AI-driven A/B Testing for ads, copy, and landing pages",
        "Campaign Fatigue Detection before performance drops",
        "Real-time budget reallocation recommendations",
        "Sales uplift tracking with AI attribution"
      ],
      cta: "Optimise My Campaigns →"
    },
    {
      icon: Globe,
      title: "High-Performance Website Design",
      tagline: "Go live fast. Rank higher. Convert better.",
      description: "We design and ship conversion-optimised websites built on best practices — fast-loading, SEO-structured, and mobile-first.",
      fullDescription: "Every site includes full domain setup and professional company email configuration so you're up and running end-to-end, not just design-done.",
      bullets: [
        "SEO-first architecture & on-page optimisation",
        "Core Web Vitals & performance-tuned pages",
        "Domain setup + company email (Google Workspace / Microsoft 365)",
        "Fast turnaround with no compromise on quality"
      ],
      cta: "Launch My Website →"
    },
    {
      icon: Bot,
      title: "AI User Acquisition Manager",
      tagline: "Your always-on growth analyst — powered by AI.",
      description: "Stop guessing on budget calls. Our AI User Acquisition Manager ingests your campaign reports, analyses KPIs, and delivers clear data-backed recommendations.",
      fullDescription: "Scale this channel, pause that creative, shift budget here. It monitors CTR, CPA, and funnel metrics to keep your growth engine running at peak efficiency.",
      bullets: [
        "Budget increase / decrease recommendations from your real data",
        "KPI monitoring with CTR improvement strategies",
        "Smart campaign recommendations tailored to your goals",
        "Report ingestion from Meta Ads, Google Ads, TikTok Ads, and more"
      ],
      cta: "Automate My UA →"
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
                {service.tagline && (
                  <p className="text-sm font-medium text-secondary italic">{service.tagline}</p>
                )}
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              {(service.fullDescription || service.bullets || service.cta) && (
                <CardContent className="space-y-4">
                  {service.fullDescription && (
                    <p className="text-sm text-muted-foreground">{service.fullDescription}</p>
                  )}
                  {service.bullets && (
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.cta && (
                    <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                      <a href="/#contact">{service.cta}</a>
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
