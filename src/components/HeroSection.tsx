import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 animate-fade-in">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight size={16} />
          <span>About Us</span>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              About Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Why We're Building India's First Anonymous Job Connect Portal
            </h2>
          </div>

          <div className="animate-fade-in delay-200 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In today's fast-paced hiring landscape, many professionals hesitate to create public profiles due to privacy concerns. 
              At the executive level, <span className="text-primary font-semibold">anonymity is essential</span>. Hire22.ai provides a secure, 
              anonymous job portal, where candidates can explore roles without revealing their identity, ensuring data protection throughout the process.
            </p>
            
            <p>
              The Story Behind Hire22 is not just about privacy. While building Hire22, our mission was to streamline recruitment with 
              <span className="text-secondary font-semibold"> instant job connections</span>, allowing employers to connect seamlessly with top mid and senior-level professionals. 
              Candidates only need to create their profile once and can be considered for multiple roles without daily applications.
            </p>
            
            <p>
              Employers receive candidate confirmations within <span className="text-brand-orange font-semibold">22 hours</span>, and once a JobCoNCT is accepted, 
              they gain immediate access to candidate contact details. The Hire22 platform bridges the gap between top talent and opportunity, 
              ensuring faster recruitment while safeguarding confidentiality.
            </p>
          </div>

          <div className="animate-slide-up delay-400 pt-8">
            <Button className="btn-primary text-xl px-12 py-6">
              Create Your Profile22 Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection