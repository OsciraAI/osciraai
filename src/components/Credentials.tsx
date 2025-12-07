import { Award, BookOpen, CheckCircle, GraduationCap } from "lucide-react";

const Credentials = () => {
  const credentials = [
    {
      icon: Award,
      title: "Multiple Patents Holder",
      description: "Innovative solutions recognized globally"
    },
    {
      icon: BookOpen,
      title: "Published Research Papers",
      description: "Peer-reviewed contributions to AI/ML field"
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Enterprise-scale deployments with measurable results"
    },
    {
      icon: GraduationCap,
      title: "Advanced Academic Background",
      description: "Georgia Tech Master's in Computer Science"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Battle-Tested{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Credentials that speak to real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <credential.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground">{credential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
