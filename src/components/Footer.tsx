import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">
              Arshath Abdulla A<span className="text-primary">.</span>
            </span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <a 
              href="https://www.linkedin.com/in/arshath0708" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Arshath0708" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
