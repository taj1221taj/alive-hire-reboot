import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Rocket, Target, Zap, Users, Trophy } from "lucide-react"
import { useState } from "react"

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(0)

  const journeySteps = [
    {
      year: "2019",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "The Realization",
      description: "After exiting a job portal to India's #1 staffing company, our founder realized something was fundamentally wrong with how hiring works.",
      details: "The traditional model was invasive, time-consuming, and frankly, insulting to senior professionals.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      year: "2020",
      icon: <Target className="w-6 h-6" />,
      title: "The Vision",
      description: "What if hiring could be anonymous, instant, and efficient? What if we could protect privacy while connecting talent?",
      details: "The concept of anonymous job matching was born during the pandemic when privacy became even more crucial.",
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2021",
      icon: <Rocket className="w-6 h-6" />,
      title: "The Innovation",
      description: "We developed the revolutionary 22-word profile system and AI-powered matching algorithm.",
      details: "No more lengthy resumes. No more screening calls. Just pure skill-based matching.",
      color: "from-red-500 to-pink-500"
    },
    {
      year: "2022",
      icon: <Zap className="w-6 h-6" />,
      title: "The Breakthrough",
      description: "First successful anonymous job match in 18 hours. The 22-hour guarantee was born.",
      details: "We proved that anonymous hiring could be faster and more efficient than traditional methods.",
      color: "from-pink-500 to-purple-500"
    },
    {
      year: "2023",
      icon: <Users className="w-6 h-6" />,
      title: "The Growth",
      description: "Expanded to serve senior-level professionals across multiple industries and domains.",
      details: "From tech to finance, from healthcare to consulting - anonymity became the new standard.",
      color: "from-purple-500 to-blue-500"
    },
    {
      year: "2024",
      icon: <Trophy className="w-6 h-6" />,
      title: "The Revolution",
      description: "Today, we're not just a platform - we're a movement. We're changing how India hires.",
      details: "Join thousands of professionals who've discovered the power of anonymous job searching.",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            The Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a broken system to a revolutionary solution. This is how we're changing hiring forever.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>

          {/* Journey Steps */}
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      activeStep === index ? 'card-glow scale-105' : 'hover:card-glow'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            {step.year}
                          </Badge>
                          <div className={`p-2 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                            {step.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                        
                        {activeStep === index && (
                          <div className="pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground italic">
                              {step.details}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection