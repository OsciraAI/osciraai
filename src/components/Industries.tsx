import { Badge } from "@/components/ui/badge";

const Industries = () => {
  const industries = [
    "Fintech",
    "AdTech",
    "MarTech",
    "Retail",
    "E-commerce",
    "Healthcare",
    "Ride Hailing"
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering AI solutions across high-growth sectors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="text-lg px-6 py-3 hover:bg-primary/10 hover:border-primary transition-all cursor-default animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
