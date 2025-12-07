import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import AICapabilities from "@/components/AICapabilities";
import CaseStudies from "@/components/CaseStudies";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import FeaturedInsights from "@/components/FeaturedInsights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Credentials />
      <AICapabilities />
      <CaseStudies />
      <HowWeWorkSection />
      <FeaturedInsights />
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
