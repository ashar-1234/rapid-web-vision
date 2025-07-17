import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Zap, HardDrive, MemoryStick, CircuitBoard, Fan } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      icon: Zap,
      name: "Graphics Cards",
      description: "High-performance GPUs for gaming and productivity",
      count: "250+ products",
      color: "text-gaming-secondary"
    },
    {
      icon: Cpu,
      name: "Processors (CPU)",
      description: "Latest Intel and AMD processors for any build",
      count: "180+ products", 
      color: "text-gaming-primary"
    },
    {
      icon: CircuitBoard,
      name: "Motherboards",
      description: "Feature-rich motherboards for every socket type",
      count: "320+ products",
      color: "text-gaming-accent"
    },
    {
      icon: MemoryStick,
      name: "Memory (RAM)",
      description: "High-speed DDR4 and DDR5 memory kits",
      count: "150+ products",
      color: "text-gaming-warning"
    },
    {
      icon: HardDrive,
      name: "Storage",
      description: "SSDs, HDDs, and NVMe drives for every need",
      count: "200+ products",
      color: "text-gaming-secondary"
    },
    {
      icon: Fan,
      name: "Cooling",
      description: "CPU coolers, case fans, and liquid cooling",
      count: "120+ products",
      color: "text-gaming-primary"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect components for every part of your PC build.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.name}
              className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                
                <p className="text-xs text-primary font-medium">
                  {category.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;