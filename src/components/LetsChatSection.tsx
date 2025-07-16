import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, Clock, Headphones } from "lucide-react"

const LetsChatSection = () => {
  const supportOptions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      action: "Start Call",
      gradient: "from-brand-cyan to-brand-purple",
      href: "tel:+91-xxx-xxx-xxxx"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant help via live chat",
      action: "Start Chat",
      gradient: "from-brand-purple to-brand-pink",
      href: "#chat"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us your queries via email",
      action: "Send Email",
      gradient: "from-brand-pink to-brand-orange",
      href: "mailto:support@hire22.ai"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Headphones className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Let's Chat
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Need help? Our customer care team is here to assist you. Choose your preferred way to connect with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card 
              key={index} 
              className="card-glow hover:scale-105 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${option.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {option.description}
                </p>
                <Button 
                  className={`btn-primary bg-gradient-to-r ${option.gradient} hover:opacity-90 transition-opacity`}
                  onClick={() => window.open(option.href, '_blank')}
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Hours */}
        <div className="text-center">
          <Card className="max-w-md mx-auto card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Support Hours</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 7:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  Average response time: Under 2 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default LetsChatSection