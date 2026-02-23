import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import WorkedWith from "@/components/WorkedWith";
import ProblemStatement from "@/components/ProblemStatement";
import AICapabilities from "@/components/AICapabilities";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import TechnicalCredibility from "@/components/TechnicalCredibility";
import GlobalExperience from "@/components/GlobalExperience";
import FeaturedInsights from "@/components/FeaturedInsights";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// Organization structured data for homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OsciraAI",
  "url": "https://www.osciraai.com",
  "logo": "https://www.osciraai.com/favicon.png",
  "description": "AI solutions that scale. Expert AI Agents, RAG systems, and custom ML solutions.",
  "sameAs": [
    "https://www.linkedin.com/newsletters/problem-solving-data-science-7157296853768196096/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98993-76787",
    "contactType": "sales",
    "email": "hello@osciraai.com",
    "availableLanguage": ["English"]
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>OsciraAI — AI Solutions That Scale | Europe, EMEA, US, Australia, Singapore</title>
        <meta name="description" content="OsciraAI delivers intelligent AI solutions for businesses across Europe, EMEA, North America, Australia and Singapore. Trusted by RateCity Australia, ProjectPro US, Fi Money India, and Move Up Media France. Reach us at hello@osciraai.com" />
        <meta name="keywords" content="AI solutions, machine learning, AI agents, RAG systems, LLM, enterprise AI, data science, custom ML, Europe AI, EMEA AI, Singapore AI" />
        <link rel="canonical" href="https://www.osciraai.com/" />
        <meta property="og:title" content="OsciraAI — AI Solutions That Scale" />
        <meta property="og:description" content="AI-powered solutions for global teams. Worked with RateCity Australia, ProjectPro US, Fi Money India, Move Up Media France. Serving EU, EMEA, UK, US, AUS & SG." />
        <meta property="og:url" content="https://osciraai.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.osciraai.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OsciraAI — AI Solutions That Scale" />
        <meta name="twitter:description" content="AI-powered solutions for global teams. Worked with RateCity Australia, ProjectPro US, Fi Money India, Move Up Media France." />
        <meta name="twitter:url" content="https://osciraai.com" />
        <meta name="twitter:image" content="https://www.osciraai.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Header />
      <Hero />
      <WorkedWith />
      <Credentials />
      <ProblemStatement />
      <AICapabilities />
      <div id="services">
        <Services />
      </div>
      <CaseStudies />
      <Industries />
      <TechnicalCredibility />
      <GlobalExperience />
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
