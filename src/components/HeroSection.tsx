import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, Shield, Users } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 animate-fade-in">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight size={16} />
          <span>About Us</span>
        </div>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-8xl font-bold mb-6 gradient-text">
                We're Not Just Another
                <br />
                <span className="text-destructive">Job Portal</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-8">
                We're a <span className="gradient-text">Revolution</span>
              </h2>
            </div>

            <div className="animate-fade-in delay-200 text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p className="mb-6">
                Traditional hiring is broken. It's invasive, slow, and frankly insulting to senior professionals. 
                We're here to change that. Forever.
              </p>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4 animate-slide-up delay-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">100% Anonymous</h3>
              <p className="text-muted-foreground">Your privacy is sacred. Your identity stays protected.</p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up delay-400">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-secondary to-brand-pink flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">Get matched in under 22 hours. No more waiting months.</p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up delay-500">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-brand-pink to-brand-orange flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Senior-Level Only</h3>
              <p className="text-muted-foreground">Built exclusively for mid and senior-level professionals.</p>
            </div>
          </div>

          <div className="text-center animate-slide-up delay-600">
            <Button className="btn-primary text-2xl px-16 py-8">
              Join The Revolution
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection