import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Helmet>
        <title>Page Not Found | OsciraAI</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to OsciraAI homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="text-center px-6">
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
