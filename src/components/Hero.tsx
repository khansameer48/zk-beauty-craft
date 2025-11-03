import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-background/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-background">Premium Beauty & Grooming</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-tight">
            ZK Makeover
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto font-light">
            Where Beauty Meets Elegance
          </p>
          
          <p className="text-lg text-background/80 mb-12 max-w-xl mx-auto">
            Discover our premium beauty services, from luxurious facials to stunning bridal makeup. 
            Your transformation journey begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 border-background text-background hover:bg-background hover:text-primary shadow-soft transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
