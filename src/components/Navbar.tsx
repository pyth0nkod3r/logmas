import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-foreground">LOGMAS</span>
              <span className="hidden sm:block text-xs text-muted-foreground">Ogun State</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="block text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" className="block text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" asChild className="flex-1"><Link to="/login">Sign In</Link></Button>
              <Button asChild className="flex-1"><Link to="/register">Get Started</Link></Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
