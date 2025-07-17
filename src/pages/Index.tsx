import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CategoriesSection from "@/components/CategoriesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <CategoriesSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default Index;
