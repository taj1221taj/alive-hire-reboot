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
      animationDelay: "0s",
      href: "tel:+91-xxx-xxx-xxxx"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant help via live chat",
      action: "Start Chat",
      gradient: "from-brand-purple to-brand-pink",
      animationDelay: "0.2s",
      href: "#chat"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us your queries via email",
      action: "Send Email",
      gradient: "from-brand-pink to-brand-orange",
      animationDelay: "0.4s",
      href: "mailto:support@hire22.ai"
    }
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-card to-background overflow-hidden">
      {/* Animated dot texture background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,_white_0.5px,_transparent_0.5px)] bg-[size:15px_15px] animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,_black_0.5px,_transparent_0.5px)] bg-[size:25px_25px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Headphones className="w-8 h-8 text-primary animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Let's Chat
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Connect with us instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card 
              key={index} 
              className="card-glow hover:scale-105 transition-all duration-500 animate-slide-up group relative overflow-hidden"
              style={{ animationDelay: option.animationDelay }}
            >
              {/* Dynamic color overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${option.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow`}>
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
                  className={`btn-primary bg-gradient-to-r ${option.gradient} hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
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
          <Card className="max-w-md mx-auto card-glow animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Always Available</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>24/7 Chat Support</p>
                <p>Email: Typically under 2 hours</p>
                <p>Phone: Mon-Fri 9AM-7PM IST</p>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  We're here when you need us most
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