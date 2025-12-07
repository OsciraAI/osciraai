import { Globe, Clock, Users, Languages, CheckCircle } from 'lucide-react';

const regions = [
  {
    emoji: "🌏",
    title: "Southeast Asia",
    description: "Thailand and regional markets. Cross-cultural AI deployment experience."
  },
  {
    emoji: "🇪🇺",
    title: "Europe",
    description: "France, Spain, and other EU markets. Understanding of regional data regulations."
  },
  {
    emoji: "🌍",
    title: "Global Clients",
    description: "Multi-continent collaboration. Proven international delivery."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Time Zone Flexibility",
    description: "Experienced in async-first communication and scheduled sync meetings across time zones"
  },
  {
    icon: Users,
    title: "Cultural Awareness",
    description: "Understanding of regional business practices, communication styles, and market nuances"
  },
  {
    icon: Languages,
    title: "Language Capabilities",
    description: "English fluency + experience working with multilingual teams"
  },
  {
    icon: CheckCircle,
    title: "Proven Delivery",
    description: "Track record of successful projects with international partners"
  }
];

const GlobalExperience = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Global Collaboration Experience
          </h2>
          <p className="text-xl text-foreground/80 mb-2">
            Built for International Teams
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just work remotely—we excel in international environments. 
            Our team has successfully delivered AI solutions partnering with 
            engineering teams and stakeholders across continents.
          </p>
        </div>

        {/* Regions Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="text-4xl mb-4">{region.emoji}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{region.title}</h3>
              <p className="text-muted-foreground">{region.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card p-8 rounded-lg shadow-md border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            What This Means for You
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <benefit.icon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-center text-lg text-muted-foreground mt-8">
          Whether your team is in Bangkok, Paris, Madrid, or anywhere else—we bring 
          proven global collaboration expertise to every project.
        </p>
      </div>
    </section>
  );
};

export default GlobalExperience;
