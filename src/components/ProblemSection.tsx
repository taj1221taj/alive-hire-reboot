import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Eye, Clock, Users, TrendingDown } from "lucide-react"
import { useState } from "react"

const ProblemSection = () => {
  const [selectedProblem, setSelectedProblem] = useState(0)

  const problems = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Invasion",
      description: "Your resume is everywhere. Recruiters know where you work before you even apply.",
      stat: "73% of professionals avoid job searching due to privacy concerns",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Wastage",
      description: "Endless applications, screening calls, and rounds that lead nowhere.",
      stat: "Average time to hire: 45 days with 8 interview rounds",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Mismatch",
      description: "Companies struggle to find the right senior talent. Candidates get irrelevant offers.",
      stat: "Only 12% of job applications result in interviews",
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Broken System",
      description: "The hiring process is outdated, inefficient, and frankly, broken.",
      stat: "68% of hiring managers say the process is their biggest challenge",
      color: "from-red-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold text-destructive">
              The Problem
            </h2>
          </div>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Traditional hiring is broken. We're fixing it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Cards */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProblem === index
                    ? 'card-glow scale-105 border-destructive'
                    : 'hover:card-glow'
                }`}
                onClick={() => setSelectedProblem(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${problem.color} text-white`}>
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Problem Detail */}
          <div className="lg:sticky lg:top-24">
            <Card className="card-glow">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${problems[selectedProblem].color} flex items-center justify-center animate-pulse`}>
                    <div className="text-white text-2xl">
                      {problems[selectedProblem].icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold gradient-text">
                    {problems[selectedProblem].title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    {problems[selectedProblem].description}
                  </p>
                  
                  <div className="p-6 bg-destructive/10 rounded-xl">
                    <p className="text-2xl font-bold text-destructive">
                      {problems[selectedProblem].stat}
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="btn-primary text-lg px-8 py-6">
                      We Have The Solution
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection