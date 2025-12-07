import { ExternalLink, Clock, User, Brain, Users, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  tags: string[];
  link: string;
  isLatest?: boolean;
  icon?: LucideIcon;
}

const BlogCard = ({ title, excerpt, author, readTime, tags, link, isLatest, icon: Icon }: BlogCardProps) => {
  return (
    <article className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 relative overflow-hidden flex items-center justify-center">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-primary/30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full border border-secondary/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20" />
        </div>
        
        {/* Icon */}
        {Icon && (
          <div className="relative z-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-10 h-10 text-primary" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        {isLatest && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">
            Latest Insight
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Read on LinkedIn
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
