import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">Hire22.ai</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#why" className="text-foreground hover:text-primary transition-colors">
              Why Hire22.ai
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#login" className="text-foreground hover:text-primary transition-colors">
              Login
            </a>
            <Button variant="outline" className="mr-2">
              Register
            </Button>
            <Button className="btn-primary">
              Employer Zone
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-up">
            <a href="#why" className="block text-foreground hover:text-primary transition-colors">
              Why Hire22.ai
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#login" className="block text-foreground hover:text-primary transition-colors">
              Login
            </a>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Register
              </Button>
              <Button className="w-full btn-primary">
                Employer Zone
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar