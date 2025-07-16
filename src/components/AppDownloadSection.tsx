import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Download, Star } from "lucide-react"

const AppDownloadSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Unlock Top Senior-Level Opportunities
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for senior and top-level job opportunities? Register now for exclusive access to senior-level job opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* App mockup */}
            <div className="relative">
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">Hire22.ai</p>
                  <p className="text-sm text-muted-foreground">Anonymous Job Search</p>
                  <div className="flex items-center justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Download options */}
            <div className="space-y-8">
              <Card className="card-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Connect with top employers and discover your next big opportunity!
                  </h3>
                  <div className="space-y-4">
                    <Button 
                      className="btn-primary w-full text-lg py-6"
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=com.hire22.ai&hl=en&gl=US', '_blank')}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download for Android
                    </Button>
                    <Button 
                      className="btn-secondary w-full text-lg py-6"
                      onClick={() => window.open('https://apps.apple.com/in/app/hire22-ai-anonymous-job-search/id6476918723', '_blank')}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download for iOS
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button 
                  className="btn-primary text-xl px-12 py-6"
                  onClick={() => window.open('https://www.hire22.ai/register', '_blank')}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownloadSection