import { AlertCircle, TrendingUp, Target } from "lucide-react";

const ProblemStatement = () => {
  const stats = [
    { icon: AlertCircle, value: "<100ms", label: "Response time at 100k QPS", color: "text-primary" },
    { icon: TrendingUp, value: "100M+", label: "User systems deployed", color: "text-secondary" },
    { icon: Target, value: "Revenue-driving", label: "ML, not science experiments", color: "text-accent" },
  ];

  return (
    <section className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Most AI projects fail at scale.{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Yours won't.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={`w-12 h-12 mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
