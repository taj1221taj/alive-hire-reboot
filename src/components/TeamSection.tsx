import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Eye, EyeOff } from "lucide-react"

const TeamSection = () => {
  const teamMembers = [
    {
      role: "Founder & CEO",
      description: "A serial entrepreneur with a passion for creating innovative and impactful products, he founded and managed a niche job portal before exiting to the No.1 staffing company in India. Now, Hire22 is the Next Big Thing.",
      linkedin: "https://www.linkedin.com/in/jobbsss/",
      image: "https://d135w1qe6j3wkb.cloudfront.net/ceo.jpg"
    },
    {
      role: "Engineering Head",
      description: "An engineering mastermind with a passion for innovation and leadership, boasting a decade of expertise in AWS and full-stack development. Committed to remaining abreast of the latest industry trends and technologies.",
      linkedin: "https://www.linkedin.com/in/shijin-b-gopal/",
      image: "https://d135w1qe6j3wkb.cloudfront.net/Techhead.jpg"
    },
    {
      role: "Products & Technology Head",
      description: "An experienced technology executive and product evangelist, dedicated to innovative hiring practices. Proven expertise in scalable product development, technology leadership, and cultivating high-performance teams.",
      linkedin: "https://www.linkedin.com/in/rajeeshtm/",
      image: "https://hire22-jobs.s3.ap-south-1.amazonaws.com/devops.jpg"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Team
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <EyeOff className="w-6 h-6 text-primary" />
            <span className="text-xl text-muted-foreground">Faces Unseen, Talent Unleashed...</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team photo is masked, just like your profile to recruiters. 
            We believe in judging talent based on skills and experience, not appearances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="card-glow hover:scale-105 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Eye className="w-12 h-12 text-white opacity-70" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-primary/10 rounded-full p-2">
                    <Badge variant="secondary" className="text-xs">
                      Anonymous
                    </Badge>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.role}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <EyeOff className="w-5 h-5" />
            <span>Privacy-first approach to professional networking</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection