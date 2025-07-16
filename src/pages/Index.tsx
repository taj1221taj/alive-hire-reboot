import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import WhatWeBuildSection from "@/components/WhatWeBuildSection"
import TeamSection from "@/components/TeamSection"
import AppDownloadSection from "@/components/AppDownloadSection"
import LetsChatSection from "@/components/LetsChatSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatWeBuildSection />
      <TeamSection />
      <AppDownloadSection />
      <LetsChatSection />
      <Footer />
    </div>
  );
};

export default Index;
