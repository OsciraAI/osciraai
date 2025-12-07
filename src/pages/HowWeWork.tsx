import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Globe, Trophy, Users, TrendingUp, Check, GraduationCap, Award, BookOpen, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowWeWork = () => {
  const processSteps = [
    { number: "01", title: "Discovery", description: "Understand your problem deeply" },
    { number: "02", title: "Design", description: "Architect the right AI solution" },
    { number: "03", title: "Development", description: "Build with best practices" },
    { number: "04", title: "Deployment", description: "Launch at production scale" },
    { number: "05", title: "Support", description: "Ensure long-term success" }
  ];

  const metrics = [
    { value: "10k+", label: "QPS", description: "Production systems at scale" },
    { value: "5M+", label: "Users", description: "Deployed solutions in production" },
    { value: "22%", label: "Growth", description: "Measurable business impact" },
    { value: "Multiple", label: "Patents", description: "Innovation recognized globally" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              How We{" "}
              <span className="text-gradient">
                Work
              </span>
            </h1>
            <p className="text-2xl font-semibold text-primary mb-4">
              Talent Matters, Not Location
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We build AI at scale with top-tier engineers and data scientists from around the world. Remote-first, results-driven, always exceptional.
            </p>
          </div>

          {/* Remote-First Philosophy */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Remote Works for AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10">
              At OsciraAI, we believe exceptional AI solutions require exceptional people. We hire top-tier talent from around the world—because the best minds aren't confined to one city or country.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Access to global talent pool",
                "Diverse perspectives drive better solutions",
                "Flexibility attracts top performers",
                "Focus on impact, not office hours"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card/50 p-4 rounded-lg border border-border">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-20 bg-card/30 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Top-Tier Talent Only
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10">
              We don't compromise on quality. Our team includes data scientists with advanced degrees and published research, ML engineers with production-scale experience, and AI researchers with patents and peer-reviewed papers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: GraduationCap, text: "Georgia Tech Master's graduates" },
                { icon: Award, text: "Multiple patent holders" },
                { icon: BookOpen, text: "Published researchers" },
                { icon: Check, text: "Enterprise-scale deployment experience" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Full Support Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Full Assistance, Anywhere
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card/50 rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">For Our Team</h3>
                <ul className="space-y-3">
                  {[
                    "Modern tools and infrastructure",
                    "Continuous learning opportunities",
                    "Mentorship from experienced AI practitioners",
                    "Competitive compensation",
                    "Work from anywhere"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card/50 rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">For Our Clients</h3>
                <ul className="space-y-3">
                  {[
                    "Dedicated project teams",
                    "Regular communication and updates",
                    "Full documentation and knowledge transfer",
                    "Post-deployment support",
                    "Scalable solutions built to last"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              How We Deliver
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="bg-card/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-all text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Results That Matter */}
          <section className="mb-20 bg-card/30 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Built to Scale
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Join Us CTA */}
          <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Are you an exceptional AI/ML engineer, data scientist, or researcher? We're always looking for top-tier talent. Location doesn't matter—your skills do.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="mailto:hello@osciraai.com" className="flex items-center gap-2 text-primary hover:underline">
                <Mail className="w-4 h-4" />
                hello@osciraai.com
              </a>
              <a href="tel:+919899376787" className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="w-4 h-4" />
                +91 98993 76787
              </a>
            </div>
            <Button size="lg" asChild>
              <a href="mailto:hello@osciraai.com">Get in Touch</a>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowWeWork;
