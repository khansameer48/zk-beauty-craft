import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bridal1 from "@/assets/portfolio/bridal-1.jpg";
import bridal2 from "@/assets/portfolio/bridal-2.jpg";
import bridal3 from "@/assets/portfolio/bridal-3.jpg";
import bridal4 from "@/assets/portfolio/bridal-4.jpg";
import bridal5 from "@/assets/portfolio/bridal-5.jpg";
import bridal6 from "@/assets/portfolio/bridal-6.jpg";
import bridal7 from "@/assets/portfolio/bridal-7.jpg";
import bridal8 from "@/assets/portfolio/bridal-8.jpg";
import bridal9 from "@/assets/portfolio/bridal-9.jpg";
import bridal10 from "@/assets/portfolio/bridal-10.jpg";

const portfolioImages = [
  { src: bridal1, alt: "Bridal Makeup 1" },
  { src: bridal2, alt: "Bridal Makeup 2" },
  { src: bridal3, alt: "Bridal Makeup 3" },
  { src: bridal4, alt: "Bridal Makeup 4" },
  { src: bridal5, alt: "Bridal Makeup 5" },
  { src: bridal6, alt: "Bridal Makeup 6" },
  { src: bridal7, alt: "Bridal Makeup 7" },
  { src: bridal8, alt: "Bridal Makeup 8" },
  { src: bridal9, alt: "Bridal Makeup 9" },
  { src: bridal10, alt: "Bridal Makeup 10" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing bridal makeup! I felt like a princess on my special day. Highly recommend ZK Makeover!"
  },
  {
    name: "Anjali Singh",
    rating: 5,
    text: "The best makeup artist in Motihari! Professional service and beautiful results every time."
  },
  {
    name: "Ritu Kumari",
    rating: 5,
    text: "Excellent work! The makeup lasted all day and I received so many compliments. Thank you!"
  },
  {
    name: "Neha Gupta",
    rating: 5,
    text: "Very talented and professional. The bridal package was worth every penny. Loved my look!"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-blush">
      <div className="container mx-auto px-4">
        {/* Portfolio Gallery */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our stunning bridal transformations and makeup artistry
          </p>
        </div>

        <div className="mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {portfolioImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-lg shadow-elegant group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
