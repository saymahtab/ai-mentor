import { useState } from "react";
import { FeatureSection } from "../components/home/FeatureSection";
import Header from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { PremiumBanner } from "../components/home/PremiumBanner";
import { Sidebar } from "../components/home/Sidebar";
import { StatusBar } from "../components/home/StatusBar";
import { FeaturePane } from "../components/home/FeaturePane";

const HomePage = ({ theme, setTheme }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  const openFeature = (id) => {
    setActiveFeature(id);
  };

  const closeFeature = () => {
    setActiveFeature(null);
  };

  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Home Content - Will shrink when feature opens */}
        <div
          className={`transition-all duration-500 ease-in-out ${activeFeature ? 'w-1/2' : 'w-full'}`}
        >
          <Header theme={theme} setTheme={setTheme} />
          <div className="px-8 py-12 overflow-y-auto">
            <HeroSection />
            <FeatureSection openFeature={openFeature} />
            <PremiumBanner />
          </div>
        </div>

        {/* Feature Content - Will appear when a feature is clicked */}
        {activeFeature && (
          <FeaturePane 
            featureId={activeFeature} 
            closeFeature={closeFeature} 
            theme={theme}
            setTheme={setTheme}
          />
        )}
      </div>

      <StatusBar />
    </div>
  );
};

export default HomePage;