import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import PriceList from "@/components/PriceList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <PriceList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
