import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      <main>
        <HeroSection />
        <ProductGrid 
          title="Featured Products" 
          subtitle="Discover our handpicked selection of trending products with amazing deals"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
