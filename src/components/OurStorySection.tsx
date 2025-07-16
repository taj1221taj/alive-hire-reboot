import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Target, Heart } from "lucide-react"

const OurStorySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of hiring veterans who got tired of the status quo. 
            So we built something better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="card-glow hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                The Vision
              </h3>
              <p className="text-muted-foreground">
                Create a world where talented professionals never have to compromise their dignity for a job.
              </p>
            </CardContent>
          </Card>

          <Card className="card-glow hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                The Mission
              </h3>
              <p className="text-muted-foreground">
                Eliminate the noise. Connect the right people. Make it happen in under 22 hours.
              </p>
            </CardContent>
          </Card>

          <Card className="card-glow hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                The Promise
              </h3>
              <p className="text-muted-foreground">
                Your privacy, your time, and your dignity will always be respected. No exceptions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default OurStorySection