import { Briefcase, Rocket, GraduationCap, Users, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const requirements = [
    "Currently pursuing or recently completed a degree in Data Science, Computer Science, Statistics, or related field",
    "Strong foundation in Python and machine learning frameworks (scikit-learn, TensorFlow, or PyTorch)",
    "Experience with data analysis and visualization tools",
    "Excellent problem-solving skills and attention to detail",
    "Strong communication skills and ability to work in a collaborative environment"
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">We're Growing!</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're looking for talented individuals passionate about AI and data science 
            to help us build intelligent solutions that scale.
          </p>
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
