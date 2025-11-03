import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const priceData = {
  skin: [
    { name: "D-Tan", price: "₹300/500", popular: false },
    { name: "Cleanup", price: "₹400/800", popular: false },
    { name: "Normal Facial", price: "₹800/1500", popular: true },
    { name: "O3+ Shining Facial", price: "₹1800", popular: false },
    { name: "O3+ Bridal Facial", price: "₹2500", popular: true }
  ],
  waxing: [
    { name: "Honey Bee Wax - Hands", price: "₹300", popular: false },
    { name: "Honey Bee Wax - Half Legs", price: "₹400", popular: false },
    { name: "Honey Bee Wax - Full Legs", price: "₹800", popular: true },
    { name: "Rica Wax - Hands", price: "₹500", popular: false },
    { name: "Rica Wax - Half Legs", price: "₹600", popular: false },
    { name: "Rica Wax - Full Legs", price: "₹1200", popular: true },
    { name: "Rica Full Body Wax", price: "₹2500", popular: false }
  ],
  makeup: [
    { name: "Normal Party Makeup", price: "₹2300", popular: false },
    { name: "HD Party Makeup", price: "₹3500", popular: true },
    { name: "Engagement Makeup", price: "₹6000/8000", popular: true },
    { name: "Reception Makeup", price: "₹7000/9000", popular: true },
    { name: "Bridal Makeup", price: "₹8000/10000", popular: true },
    { name: "Normal Pre-Bridal", price: "₹8000", popular: false },
    { name: "Luxury Pre-Bridal", price: "₹11000", popular: true }
  ]
};

const PriceList = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Price List
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for premium beauty services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skin Treatments */}
          <Card className="border-border/50 hover:shadow-elegant transition-shadow duration-300 bg-gradient-to-b from-card to-background">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-primary">Skin Treatments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {priceData.skin.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">{item.name}</span>
                    {item.popular && (
                      <Badge variant="secondary" className="text-xs">Popular</Badge>
                    )}
                  </div>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Waxing Services */}
          <Card className="border-border/50 hover:shadow-elegant transition-shadow duration-300 bg-gradient-to-b from-card to-background">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-primary">Waxing Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {priceData.waxing.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">{item.name}</span>
                    {item.popular && (
                      <Badge variant="secondary" className="text-xs">Popular</Badge>
                    )}
                  </div>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Makeup Services */}
          <Card className="border-border/50 hover:shadow-elegant transition-shadow duration-300 bg-gradient-to-b from-card to-background">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-primary">Makeup Artistry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {priceData.makeup.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">{item.name}</span>
                    {item.popular && (
                      <Badge variant="secondary" className="text-xs">Popular</Badge>
                    )}
                  </div>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
