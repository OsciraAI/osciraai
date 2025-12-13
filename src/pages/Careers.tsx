import { Briefcase, Rocket, GraduationCap, Users, CheckCircle, ExternalLink, IndianRupee, Calendar, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const requirements = [
    "Currently pursuing or recently completed a degree in Data Science, Computer Science, Statistics, or related field",
    "Strong foundation in Python and machine learning frameworks (scikit-learn, TensorFlow, or PyTorch)",
    "Experience with data analysis and visualization tools",
    "Excellent problem-solving skills and attention to detail",
    "Strong communication skills and ability to work in a collaborative environment",
    "Must have own laptop/hardware for remote work"
  ];

  const offerings = [
    "Hands-on experience with real-world AI/ML projects",
    "Mentorship from experienced data scientists and ML engineers",
    "Exposure to cutting-edge AI technologies and methodologies",
    "Flexible remote work environment",
    "Opportunity for full-time conversion based on performance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 mb-8 border border-white/20">
            <Rocket className="w-4 h-4 animate-bounce" />
            <span className="text-sm font-semibold tracking-wide">We're Hiring!</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Shape the Future of <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              AI with Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Be part of a team that's transforming industries with cutting-edge AI solutions. 
            Your ideas will power the next generation of intelligent systems.
          </p>
          
          {/* Tech icons floating */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white/80" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white/80" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listing */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-sm font-medium opacity-90">Open Position</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Data Scientist Intern</h2>
                  <div className="flex flex-wrap gap-3 text-sm opacity-90">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      Internship
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Remote
                    </span>
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      ₹20k - ₹30k/month
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      5 days/week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Content */}
            <div className="p-8 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">About the Role</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join OsciraAI as a Data Scientist Intern and work on cutting-edge AI projects 
                  that solve real business problems. You'll collaborate with our experienced team 
                  to develop machine learning models, build AI agents, and implement RAG solutions 
                  for enterprise clients. This is an excellent opportunity to gain hands-on experience 
                  with production-grade AI systems.
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Offer */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {offerings.map((offer, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Apply?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Click below to fill out our application form. We review all applications 
            and will get back to you within a week.
          </p>
          <Button 
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://forms.gle/AW833M3trTHuka4G6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Apply Now
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
