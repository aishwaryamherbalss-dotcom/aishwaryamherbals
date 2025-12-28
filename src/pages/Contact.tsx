import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = encodeURIComponent(
      `Hi Aishwaryam Herbals,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    const whatsappLink = `https://wa.me/919843398171?text=${whatsappMessage}`;
    
    window.open(whatsappLink, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with us on WhatsApp.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout
      title="Contact Us - Aishwaryam Herbals"
      description="Get in touch with Aishwaryam Herbals. We're here to help with your orders, questions, and feedback."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-2xl shadow-soft">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Quick Contact
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I want to know more about your products / place an order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-sage-light/50 rounded-xl hover:bg-sage-light transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+91 98433 98171</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 bg-sage-light/50 rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 98433 98171</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-sage-light/50 rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">hello@aishwaryamherbals.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-2xl shadow-soft">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Store Location
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-foreground">Aishwaryam Herbals</p>
                      <p className="text-sm text-muted-foreground">Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon - Sat: 9 AM - 7 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Text */}
              <div className="p-4 bg-cream rounded-xl text-center">
                <p className="text-sage-dark font-medium text-sm">
                  வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
