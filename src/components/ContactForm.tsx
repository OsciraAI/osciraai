import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`OsciraAI Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:hello@osciraai.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening email client...",
        description: "Your message is ready to send via your email client.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try contacting us directly at hello@osciraai.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Build AI That{" "}
            <span className="text-gradient">
              Scales?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can solve your toughest problems.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                placeholder="Your company (optional)"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project or challenge"
              />
            </div>
            <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get in Touch"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Direct Contact */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground mb-6">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:hello@osciraai.com"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-5 h-5" />
                hello@osciraai.com
              </a>
              <a
                href="tel:+919899376787"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="w-5 h-5" />
                +91 98993 76787
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
