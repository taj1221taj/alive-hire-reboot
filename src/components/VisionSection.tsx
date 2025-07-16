import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Telescope, Globe, Brain, Users, Zap, Star, ArrowRight } from "lucide-react"

const VisionSection = () => {
  const futureFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Career Counselor",
      description: "Personal AI that guides your career growth",
      status: "2024 Q4",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Expansion",
      description: "Anonymous hiring across 50+ countries",
      status: "2025 Q1",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Matching",
      description: "Match entire teams anonymously",
      status: "2025 Q2",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Offers",
      description: "Real-time job offers in under 1 hour",
      status: "2025 Q3",
      color: "from-red-500 to-orange-500"
    }
  ]

  const manifesto = [
    "Privacy is not a luxury—it's a right",
    "Your skills matter more than your connections",
    "Hiring should be instant, not a marathon",
    "Anonymity breeds authenticity",
    "The best talent shouldn't have to hide"
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Telescope className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              The Future We're Building
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This is just the beginning. The future of hiring is anonymous, instant, and revolutionary.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="card-glow">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">
                  Our Vision for 2030
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A world where every professional can find their perfect role without compromising their privacy. 
                  Where talent is recognized purely on merit, not politics. Where hiring happens in hours, not months.
                </p>
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                  <p className="text-lg font-semibold gradient-text">
                    "We're not just changing how India hires—we're changing how the world works."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Features Roadmap */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            What's Coming Next
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureFeatures.map((feature, index) => (
              <Card key={index} className="card-glow hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                        {feature.icon}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feature.status}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Manifesto */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Our Manifesto
          </h3>
          <div className="max-w-3xl mx-auto">
            <Card className="card-glow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {manifesto.map((statement, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-lg text-foreground font-medium">
                        {statement}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Join the Movement */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto card-glow">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Join the Revolution
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of the movement that's changing how the world hires. 
                Your next opportunity is just 22 words away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary text-lg px-8 py-6">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default VisionSection