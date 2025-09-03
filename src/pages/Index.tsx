import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuSection from "@/components/MenuSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";
import BackgroundSpices from "@/components/BackgroundSpices";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundSpices />
      <Navigation />
      <div className="relative z-10">
        <HeroSection />
        <FeaturedDishes />
        <div id="menu">
          <MenuSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <ReviewSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
