import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RacingBrands from "@/components/RacingBrands";
import Categories from "@/components/Categories";
import Metrics from "@/components/Metrics";
import FeaturedParts from "@/components/FeaturedParts";
import FitmentPreview from "@/components/FitmentPreview";
import Fabrication from "@/components/Fabrication";
import RacetrackBanner from "@/components/RacetrackBanner";
import UpgradeCounters from "@/components/UpgradeCounters";
import Blog from "@/components/Blog";
import Shipping from "@/components/Shipping";
import Reviews from "@/components/Reviews";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RacingBrands />
      <Categories />
      <Metrics />
      <FeaturedParts />
      <FitmentPreview />
      <Fabrication />
      <RacetrackBanner />
      <UpgradeCounters />
      <Blog />
      <Shipping />
      <Reviews />
      <CTAFooter />
    </div>
  );
};

export default Index;
