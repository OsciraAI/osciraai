import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import ProblemStatement from "@/components/ProblemStatement";
import AICapabilities from "@/components/AICapabilities";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import TechnicalCredibility from "@/components/TechnicalCredibility";
import FeaturedInsights from "@/components/FeaturedInsights";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Credentials />
      <ProblemStatement />
      <AICapabilities />
      <div id="services">
        <Services />
      </div>
      <CaseStudies />
      <Industries />
      <TechnicalCredibility />
      <FeaturedInsights />
      <Newsletter />
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
