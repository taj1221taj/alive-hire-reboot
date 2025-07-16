import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Clock, Star, Shield, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const ImpactSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    professionals: 0,
    companies: 0,
    matches: 0,
    hours: 0
  })

  const finalNumbers = {
    professionals: 50000,
    companies: 2500,
    matches: 12500,
    hours: 18
  }

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const interval = setInterval(() => {
        if (step <= steps) {
          setAnimatedNumbers({
            professionals: Math.floor((finalNumbers.professionals * step) / steps),
            companies: Math.floor((finalNumbers.companies * step) / steps),
            matches: Math.floor((finalNumbers.matches * step) / steps),
            hours: Math.floor((finalNumbers.hours * step) / steps)
          })
          step++
        } else {
          clearInterval(interval)
        }
      }, stepDuration)
    }

    animateNumbers()
  }, [])

  const metrics = [
    {
      icon: <Users className="w-8 h-8" />,
      label: "Professionals Empowered",
      value: animatedNumbers.professionals.toLocaleString(),
      suffix: "+",
      color: "from-blue-500 to-purple-500",
      description: "Senior professionals using our platform"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Companies Transformed",
      value: animatedNumbers.companies.toLocaleString(),
      suffix: "+",
      color: "from-purple-500 to-pink-500",
      description: "Organizations revolutionizing their hiring"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: "Successful Matches",
      value: animatedNumbers.matches.toLocaleString(),
      suffix: "+",
      color: "from-pink-500 to-red-500",
      description: "Lives changed, careers elevated"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Average Response Time",
      value: animatedNumbers.hours,
      suffix: "h",
      color: "from-red-500 to-orange-500",
      description: "Faster than our 22-hour guarantee"
    }
  ]

  const testimonials = [
    {
      quote: "I found my dream role without my current employer knowing. The privacy protection is incredible.",
      author: "Senior Product Manager",
      company: "Fortune 500 Tech Company",
      rating: 5
    },
    {
      quote: "22-word profile? I was skeptical. But it captured my essence better than my 3-page resume.",
      author: "VP of Engineering",
      company: "Fintech Startup",
      rating: 5
    },
    {
      quote: "We hired 3 senior developers in 2 weeks. This platform is a game-changer.",
      author: "CTO",
      company: "Healthcare Technology",
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            The Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. Lives changed, careers elevated, hiring revolutionized.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="card-glow text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Real Stories, Real Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glow hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-glow">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2 text-foreground">100% Privacy Protected</h4>
              <p className="text-sm text-muted-foreground">
                Zero data breaches, complete anonymity maintained throughout the process
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-glow">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2 text-foreground">94% Success Rate</h4>
              <p className="text-sm text-muted-foreground">
                Highest job matching success rate in the industry
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-glow">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2 text-foreground">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">
                Average response time of 18 hours, beating our 22-hour guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection