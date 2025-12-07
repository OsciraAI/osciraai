import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = `New Advisory Session Request from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Challenge:
${formData.challenge}
      `.trim();

      const mailtoLink = `mailto:suppal@gatech.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opening your email client...",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", challenge: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Build AI That{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Works?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Book a 30-minute advisory session to discuss your challenge
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-background/80 backdrop-blur p-8 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                What challenge are you trying to solve? *
              </label>
              <Textarea
                id="challenge"
                required
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="Tell us about your AI/ML challenge..."
                rows={5}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Book Advisory Session"}
            </Button>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border justify-center">
              <a 
                href="mailto:suppal@gatech.edu" 
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                suppal@gatech.edu
              </a>
              <a 
                href="tel:+919899376787" 
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98993 76787
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
