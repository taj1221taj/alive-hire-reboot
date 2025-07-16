import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import JourneySection from "@/components/JourneySection"
import InnovationLabSection from "@/components/InnovationLabSection"
import ImpactSection from "@/components/ImpactSection"
import VisionSection from "@/components/VisionSection"
import LetsChatSection from "@/components/LetsChatSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <JourneySection />
      <InnovationLabSection />
      <ImpactSection />
      <VisionSection />
      <LetsChatSection />
      <Footer />
    </div>
  );
};

export default Index;
