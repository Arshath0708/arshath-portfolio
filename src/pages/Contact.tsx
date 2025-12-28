import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";
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
      <main className="pt-28 md:pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-title">Contact</p>
            <h1 className="heading-xl mb-6">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Open to discussing opportunities, collaborations, or meaningful
              projects where I can take ownership and deliver impact.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="space-y-4 mb-16">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="text-foreground font-medium">
                      {contact.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Availability Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded-r-lg"
          >
            <h3 className="text-foreground font-semibold mb-2">
              Current Availability
            </h3>
            <p className="text-muted-foreground">
              Actively open to full-time roles, internships, and serious
              collaborations where ownership, learning, and impact matter.
            </p>
          </motion.div>

          {/* Response Expectation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            Typically respond within 24–48 hours.
          </motion.p>
        </div>
      </main>
    </PageTransition>
  );
};

export default Contact;
