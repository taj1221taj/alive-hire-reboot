import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import OurStorySection from "@/components/OurStorySection"
import LetsChatSection from "@/components/LetsChatSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <LetsChatSection />
      <Footer />
    </div>
  );
};

export default Index;
