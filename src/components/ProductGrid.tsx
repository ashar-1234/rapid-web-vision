import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import gpuImage from "@/assets/gpu-card.jpg";
import cpuImage from "@/assets/cpu-processor.jpg";
import ramImage from "@/assets/ram-memory.jpg";
import ssdImage from "@/assets/ssd-storage.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: "1",
      name: "NVIDIA GeForce RTX 4090 Gaming Graphics Card",
      image: gpuImage,
      price: 1599,
      originalPrice: 1799,
      rating: 4.8,
      reviews: 2847,
      badge: "HOT",
      specs: [
        "24GB GDDR6X Memory",
        "2520 MHz Boost Clock"
      ]
    },
    {
      id: "2", 
      name: "Intel Core i9-13900K Desktop Processor",
      image: cpuImage,
      price: 589,
      originalPrice: 649,
      rating: 4.9,
      reviews: 1523,
      badge: "BEST SELLER",
      specs: [
        "24 Cores (8P+16E)",
        "Up to 5.8 GHz Max Turbo"
      ]
    },
    {
      id: "3",
      name: "Corsair Vengeance RGB Pro 32GB DDR4 RAM",
      image: ramImage,
      price: 159,
      rating: 4.7,
      reviews: 3421,
      specs: [
        "32GB (2x16GB) Kit", 
        "3600MHz C18 Memory"
      ]
    },
    {
      id: "4",
      name: "Samsung 980 PRO 2TB NVMe SSD",
      image: ssdImage,
      price: 199,
      originalPrice: 249,
      rating: 4.8,
      reviews: 2156,
      badge: "NEW",
      specs: [
        "2TB PCIe 4.0 NVMe",
        "Up to 7,000 MB/s Read"
      ]
    },
    {
      id: "5",
      name: "AMD Radeon RX 7800 XT Gaming GPU",
      image: gpuImage,
      price: 799,
      originalPrice: 899,
      rating: 4.6,
      reviews: 1876,
      specs: [
        "16GB GDDR6 Memory",
        "2430 MHz Game Clock"
      ]
    },
    {
      id: "6",
      name: "AMD Ryzen 9 7950X Desktop Processor",
      image: cpuImage,
      price: 549,
      rating: 4.8,
      reviews: 987,
      badge: "HOT",
      specs: [
        "16 Cores, 32 Threads",
        "Up to 5.7 GHz Max Boost"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium PC{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Components
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Featuring best selection of the latest and most powerful PC components 
            to bring your dream setup to life.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button variant="default" className="bg-gradient-primary">
            All Components
          </Button>
          <Button variant="outline">
            Graphics Cards
          </Button>
          <Button variant="outline">
            Processors
          </Button>
          <Button variant="outline">
            Memory (RAM)
          </Button>
          <Button variant="outline">
            Storage
          </Button>
          <Button variant="outline">
            Motherboards
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/10"
          >
            View All Components
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;