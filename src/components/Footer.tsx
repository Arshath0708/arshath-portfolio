import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arshath0708", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Arshath0708", icon: Github },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=a.arshathabdulla@gmail.com",
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="divider absolute top-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight">
              Arshath Abdulla A<span className="text-primary">.</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/70 uppercase tracking-widest">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Open to work
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
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
