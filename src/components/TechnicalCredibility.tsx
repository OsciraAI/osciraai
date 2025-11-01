import { Award, BookOpen, Users, Zap } from "lucide-react";

const TechnicalCredibility = () => {
  const credentials = [
    {
      icon: Award,
      text: "Multiple Patents Published including Ad-Personalisation using Graphs at Scale"
    },
    {
      icon: BookOpen,
      text: "Published research in search optimization"
    },
    {
      icon: Users,
      text: "Scaled systems serving 100M+ users"
    },
    {
      icon: Zap,
      text: "Sub-100ms latency at 100k QPS in production"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built by Engineers Who've{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Solved This Before
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {credentials.map((credential, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <credential.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-foreground font-medium">{credential.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCredibility;
