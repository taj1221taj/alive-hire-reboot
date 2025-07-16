import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { useState } from "react"

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <Button 
            className="btn-primary"
            onClick={() => setShowContactForm(true)}
          >
            Get in Touch
          </Button>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-lg card-glow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold gradient-text">Get in Touch</h3>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setShowContactForm(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Leave your message and we'll get back to you shortly.
                </p>

                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="mobile">Mobile</Label>
                    <Input id="mobile" placeholder="Your mobile number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Topic/Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="pricing">Pricing & Plans</SelectItem>
                        <SelectItem value="partner">Partner Inquiry</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="general">General Enquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer content */}
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Hire22.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer