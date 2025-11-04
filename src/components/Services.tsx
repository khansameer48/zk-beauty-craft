import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, Star } from "lucide-react";
import facialService from "@/assets/facial-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import waxingService from "@/assets/waxing-service.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    title: "Skin Treatments",
    description: "Rejuvenate your skin with our premium facial treatments and specialized care",
    icon: Sparkles,
    image: facialService,
    features: ["D-Tan Treatment", "Professional Cleanup", "O3+ Facials", "Bridal Specials"]
  },
  {
    title: "Makeup Artistry",
    description: "Professional makeup services for every occasion, from parties to your special day",
    icon: Heart,
    image: makeupService,
    features: ["Party Makeup", "Bridal Makeup", "Engagement Look", "HD Makeup"]
  },
  {
    title: "Waxing Services",
    description: "Smooth, silky skin with our gentle honey bee and rica wax treatments",
    icon: Star,
    image: waxingService,
    features: ["Honey Bee Wax", "Rica Wax", "Full Body", "Specialized Care"]
  }
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-blush to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the finest beauty treatments tailored just for you
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow transition-all duration-700 border-border/50 overflow-hidden hover:-translate-y-3 bg-card ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform group-hover:translate-y-[-4px] transition-transform duration-500">
                  <div className="flex items-center gap-2 text-primary">
                    <service.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
