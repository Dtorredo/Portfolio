import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset(); 
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary">Me!</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Wanna reach out either for collaboration or a website request?
          Feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-stretch">
          {/* Contact Info Card */}
          <div className="w-full md:w-1/2 bg-card p-6 rounded-xl shadow-md border border-primary/20 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300"> 
            <div>
                <h3 className="text-2xl font-semibold mb-5 text-center">Contact Info</h3> 

                <div className="space-y-5 text-left"> 
                {/* Email */}
                <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-full bg-primary/15 text-primary flex-shrink-0"> 
                    <Mail className="h-5 w-5" /> 
                    </div>
                    <div>
                    <h4 className="font-medium text-base">Email</h4> 
                    <a
                        href="mailto:drickykanyiri@gmail.com"
                        className="text-foreground/80 hover:text-primary transition-colors"
                    >
                        drickykanyiri@gmail.com
                    </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-full bg-primary/15 text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                    </div>
                    <div>
                    <h4 className="font-medium text-base">Phone</h4>
                    <a
                        href="tel:+254746079983"
                        className="text-foreground/80 hover:text-primary transition-colors"
                    >
                        +254 746079983
                    </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-full bg-primary/15 text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                    <h4 className="font-medium text-base">Location</h4>
                    <p className="text-foreground/80">Nairobi, Kenya</p>
                    </div>
                </div>
            </div>
            </div>


            {/* Socials */}
            <div className="pt-6 mt-auto"> 
              <h4 className="font-medium mb-3 text-center text-base">Socials 🙂</h4> 
              <div className="flex space-x-5 justify-center text-foreground/70"> 
                <a
                  href="https://www.linkedin.com/in/tderrick3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" /> 
                </a>
                <a
                  href="https://github.com/Dtorredo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" /> 
                </a>
                <a
                  href="https://www.instagram.com/vw_derrick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 hover:scale-110"
                >
                  <Instagram className="h-6 w-6" /> 
                </a>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="w-full md:w-1/2 bg-card p-6 rounded-xl shadow-md border border-primary/20 hover:scale-[1.01] transition-transform duration-300"> 
            <form className="space-y-5" onSubmit={handleSubmit}> 
              <h3 className="text-2xl font-semibold mb-5 text-center"> 
                Send a Message
              </h3>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground"> 
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/70" 
                  placeholder="Derrick ..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/70"
                  placeholder="yourmail@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4" 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y placeholder:text-muted-foreground/70" 
                  placeholder="Let us work together ..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-lg",
                  "bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-200",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};