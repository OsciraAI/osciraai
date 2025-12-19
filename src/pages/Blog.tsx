import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { ArrowLeft, Brain, Users, Car, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const blogPosts = [
  {
    title: "The Toughest Course in My GaTech Masters: Graduate Algorithms",
    excerpt: "A candid reflection on conquering one of Georgia Tech's most challenging courses and the lessons learned about algorithmic thinking and problem-solving at scale.",
    author: "Shaurya Uppal",
    readTime: "~8 min",
    tags: ["Algorithms", "Education", "GaTech", "Computer Science"],
    link: "https://www.linkedin.com/pulse/toughest-course-my-gatech-masters-question-graduate-algorithms-uppal-hscgf/",
    isLatest: true,
    icon: Brain
  },
  {
    title: "Life Stage Segmentation Powered by LLMs",
    excerpt: "Exploring how Large Language Models revolutionize customer segmentation by understanding life stages, enabling hyper-personalized marketing and product experiences.",
    author: "Shaurya Uppal",
    readTime: "~10 min",
    tags: ["LLMs", "Machine Learning", "Segmentation", "AI Applications"],
    link: "https://www.linkedin.com/pulse/life-stage-segmentation-powered-llms-enhanced-shaurya-uppal-jkjsf/",
    isLatest: false,
    icon: Users
  },
  {
    title: "Personalization at Lyft: The Hidden Ride Experience",
    excerpt: "An inside look at how ride-sharing platforms like Lyft leverage data science and personalization algorithms to optimize user experience, from route selection to pricing.",
    author: "Shaurya Uppal",
    readTime: "~7 min",
    tags: ["Personalization", "Product Analytics", "Lyft", "ML"],
    link: "https://www.linkedin.com/pulse/personalization-lyft-ride-hiding-experience-ultra-pro-shaurya-uppal/",
    isLatest: false,
    icon: Car
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | OsciraAI - AI Insights & Research</title>
        <meta name="description" content="Deep dives into AI, algorithms, and real-world data science. Explore insights from OsciraAI's team on machine learning, LLMs, and AI applications." />
        <meta name="keywords" content="AI blog, machine learning insights, data science research, LLM applications, AI algorithms" />
        <link rel="canonical" href="https://www.osciraai.com/blog" />
        <meta property="og:title" content="Blog | OsciraAI - AI Insights & Research" />
        <meta property="og:description" content="Deep dives into AI, algorithms, and real-world data science from OsciraAI's team." />
        <meta property="og:url" content="https://www.osciraai.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.osciraai.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | OsciraAI - AI Insights & Research" />
        <meta name="twitter:description" content="Deep dives into AI, algorithms, and real-world data science." />
        <meta name="twitter:url" content="https://www.osciraai.com/blog" />
        <meta name="twitter:image" content="https://www.osciraai.com/og-image.png" />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Insights &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Research
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dives into AI, algorithms, and real-world data science
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
