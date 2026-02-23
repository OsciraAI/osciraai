const brands = [
  { name: "RateCity", country: "Australia", tag: "Fintech & Comparison" },
  { name: "ProjectPro", country: "United States", tag: "AI Learning Platform" },
  { name: "Fi Money", country: "India", tag: "Neobank" },
  { name: "Move Up Media", country: "France", tag: "Digital Media & Growth" },
];

const WorkedWith = () => {
  return (
    <section className="py-16 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground mb-10">
          Brands We've Worked With
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div key={brand.name} className="text-center">
              <h3 className="text-lg font-semibold text-foreground/80">{brand.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{brand.tag}</p>
              <span className="inline-block mt-2 text-xs bg-muted text-muted-foreground rounded-full px-3 py-0.5">
                {brand.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
