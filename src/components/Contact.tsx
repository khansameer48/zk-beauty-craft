import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background via-peach/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us or book your appointment today
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className={`border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Our Location</h3>
                    <p className="text-muted-foreground">
                      Urdu Library Road, Near Shabnam Tailor<br />
                      AmlaPatti, Motihari 845401
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Call Us</h3>
                    <a 
                      href="tel:+918434130774" 
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                    >
                      +91 8434130774
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Email Us</h3>
                    <a 
                      href="mailto:zkmakeover@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                    >
                      zkmakeover@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-border/50 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Follow Us</h3>
                    <a 
                      href="https://instagram.com/zk_makeover" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                    >
                      @zk_makeover
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-3 text-foreground">Opening Hours</h3>
                <p className="text-muted-foreground mb-4">
                  Monday - Sunday<br />
                  10:00 AM - 8:00 PM
                </p>
                <Button 
                  className="w-full shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('tel:+918434130774')}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className={`border-border/50 overflow-hidden h-[600px] hover:shadow-glow transition-all duration-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.8!2d84.9!3d26.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDM5JzAwLjAiTiA4NMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZK Makeover Location"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
