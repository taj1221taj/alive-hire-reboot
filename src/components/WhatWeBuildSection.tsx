import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Shield, Zap, Users, Clock, Target } from "lucide-react"

const WhatWeBuildSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Driven Matching",
      description: "Advanced AI algorithms match candidates with perfect opportunities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Complete Anonymity",
      description: "Your identity remains protected throughout the hiring process"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Connections",
      description: "Connect with employers within 22 hours of application"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Senior-Level Focus",
      description: "Exclusively for mid and senior-level professionals"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "22-Word Profiles",
      description: "Create concise, powerful profiles that eliminate screening calls"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Direct Access",
      description: "Skip preliminary interviews and connect directly with decision makers"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What We Are Building
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Hire22 team is revolutionising executive recruitment with an AI-driven recruitment platform. 
            Professionals create anonymous profiles of just 22 words, which eliminates the need for preliminary 
            screenings and phone interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-glow hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Illustration Placeholder */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center animate-float">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 mx-auto animate-glow">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <p className="text-lg font-semibold text-foreground">AI-Powered Recruitment Platform</p>
              <p className="text-muted-foreground">Connecting talent with opportunity</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-primary text-xl px-12 py-6">
            Create Your Profile22 Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuildSection