import { ArrowRight, ExternalLink, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredPosts = [
  {
    title: "The Toughest Course in My GaTech Masters: Graduate Algorithms",
    excerpt: "A candid reflection on conquering one of Georgia Tech's most challenging courses.",
    readTime: "~8 min",
    tags: ["Algorithms", "GaTech"],
    link: "https://www.linkedin.com/pulse/toughest-course-my-gatech-masters-question-graduate-algorithms-uppal-hscgf/"
  },
  {
    title: "Life Stage Segmentation Powered by LLMs",
    excerpt: "How Large Language Models revolutionize customer segmentation.",
    readTime: "~10 min",
    tags: ["LLMs", "ML"],
    link: "https://www.linkedin.com/pulse/life-stage-segmentation-powered-llms-enhanced-shaurya-uppal-jkjsf/"
  }
];

const FeaturedInsights = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest from{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and research from our data science experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {featuredPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-1">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                >
                  Read More
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog" className="inline-flex items-center gap-2">
              View All Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
