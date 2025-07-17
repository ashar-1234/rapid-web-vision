import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, Users, Wrench } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "We source only the best components from trusted manufacturers with full warranty coverage."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our experienced team provides 24/7 technical support to help you build the perfect PC."
    },
    {
      icon: Truck,
      title: "Latest Technology",
      description: "Always updated with the latest hardware releases and cutting-edge technology."
    },
    {
      icon: Wrench,
      title: "Build Services",
      description: "Professional PC building services available with expert assembly and testing."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              TechBuilder
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide the best PC building experience with expert guidance and premium service every step of the way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming text-center"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;