import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Zap, Code, Database, Cpu, Lock, Smartphone, Trophy, Clock } from "lucide-react"
import { useState } from "react"

const InnovationLabSection = () => {
  const [selectedTech, setSelectedTech] = useState(0)

  const technologies = [
    {
      icon: <Brain className="w-8 h-8" />,
      name: "AI Matching Engine",
      description: "Advanced neural networks that understand skills, not keywords",
      features: ["Natural Language Processing", "Semantic Analysis", "Predictive Matching"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "Privacy Shield",
      description: "Military-grade encryption protecting your identity",
      features: ["End-to-End Encryption", "Zero-Knowledge Architecture", "Anonymous Protocols"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Instant Connect",
      description: "Real-time matching with sub-second response times",
      features: ["WebSocket Connections", "Edge Computing", "Global CDN"],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Smart Profiles",
      description: "22-word profiles that say more than traditional resumes",
      features: ["Keyword Optimization", "Skill Extraction", "Context Understanding"],
      color: "from-red-500 to-orange-500"
    }
  ]

  const stats = [
    { label: "Matches Per Second", value: "1,000+", icon: <Zap className="w-6 h-6" /> },
    { label: "Success Rate", value: "94%", icon: <Trophy className="w-6 h-6" /> },
    { label: "Privacy Score", value: "100%", icon: <Lock className="w-6 h-6" /> },
    { label: "Response Time", value: "<22h", icon: <Clock className="w-6 h-6" /> }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              The Innovation Lab
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peek behind the curtain. See the revolutionary technology that's changing how hiring works.
          </p>
        </div>

        {/* Technology Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Technology List */}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTech === index
                    ? 'card-glow scale-105 border-primary'
                    : 'hover:card-glow'
                }`}
                onClick={() => setSelectedTech(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${tech.color} text-white`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Detail */}
          <div className="lg:col-span-2">
            <Card className="card-glow h-full">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${technologies[selectedTech].color} text-white`}>
                      {technologies[selectedTech].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {technologies[selectedTech].name}
                      </h3>
                      <p className="text-muted-foreground">
                        {technologies[selectedTech].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Key Features:</h4>
                    <div className="grid gap-3">
                      {technologies[selectedTech].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        💡 This technology is patent-pending and exclusive to Hire22.ai
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-glow text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto card-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Experience The Future of Hiring
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of professionals who've discovered the power of anonymous job matching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Try the Platform
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Code className="w-5 h-5 mr-2" />
                  See Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default InnovationLabSection