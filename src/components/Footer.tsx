import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-card rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-2">
            Ready to Build Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dream PC?
            </span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Start your PC building journey today with our expert guidance and premium components.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button className="bg-gradient-primary hover:shadow-glow">
              <Mail className="mr-2 h-4 w-4" />
              Start Building
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              TechBuilder
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner for premium PC components and expert building services.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Graphics Cards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Processors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Motherboards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Memory (RAM)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Storage</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Build Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compatibility</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 TechBuilder. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Get Expert Help • Get Expert Help
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;