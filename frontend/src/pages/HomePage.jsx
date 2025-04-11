import { FeatureSection } from "../components/home/FeatureSection";
import Header from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { PremiumBanner } from "../components/home/PremiumBanner";
import { Sidebar } from "../components/home/Sidebar ";

const HomePage = ({ theme, setTheme }) => {
  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar />
      <div className="flex-grow">
        <Header theme={theme} setTheme={setTheme} />
        <div className="px-8 py-12">
          <HeroSection />
          <FeatureSection />
          <PremiumBanner />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
