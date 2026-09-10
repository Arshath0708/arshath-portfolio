import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const contactLinks = [
  {
    label: "Email",
    value: "a.arshathabdulla@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=a.arshathabdulla@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 84288 58856",
    href: "tel:+918428858856",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arshath0708",
    href: "https://www.linkedin.com/in/arshath0708",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Arshath0708",
    href: "https://github.com/Arshath0708",
    icon: Github,
  },
];

const Contact = () => {
  return (
    <PageTransition>
      <main className="pt-28 md:pt-32 pb-20 relative">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <p className="section-title justify-center">Contact</p>
            <h1 className="heading-xl mb-6 text-foreground">
              Let's discuss a <span className="text-primary">business problem.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              I am open to discussing Business Analyst, Business Systems Analyst, and Technology Analyst opportunities.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground font-mono text-sm uppercase tracking-widest bg-secondary/50 py-3 px-6 rounded-full border border-border/50 inline-flex mx-auto">
              <span className="text-foreground font-semibold">Arshath Abdulla A</span>
              <span className="hidden md:inline text-primary/50">•</span>
              <span className="text-primary/80">Business Systems Analyst</span>
              <span className="hidden md:inline text-primary/50">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Chennai, India
              </span>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-20">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={
                  contact.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-dark flex items-center justify-between p-6 md:p-8 hover:border-primary/50 transition-colors duration-500 group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors duration-500 shadow-[0_0_15px_rgba(230,168,9,0.05)]">
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary/70 mb-1">
                      {contact.label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-500">
                      {contact.value}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500 shrink-0 border border-border/50 group-hover:border-primary/30">
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="card-dark p-8 md:p-10 border-l-4 border-l-primary flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <MapPin className="w-32 h-32" />
            </div>
            <h3 className="text-foreground font-bold mb-3 text-xl relative z-10">
              Primary Target Market: <span className="text-primary">Chennai</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl relative z-10">
              Actively open to full-time roles and opportunities in Chennai where I can bridge business requirements with technology solutions to deliver measurable impact.
            </p>
          </motion.div>

          {/* Response Expectation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center font-mono text-xs uppercase tracking-widest text-primary/50 mt-12 flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
            Typically respond within 24 hours
          </motion.p>
        </div>
      </main>
    </PageTransition>
  );
};

export default Contact;
