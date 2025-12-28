import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import portrait from "@/assets/portrait.jpeg";

const Home = () => {
  return (
    <PageTransition>
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p className="section-title">AI / Data Engineer</p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="heading-xl mb-6"
                >
                  ARSHATH{" "}
                  <span className="text-primary">ABDULLA</span>{" "}
                  A
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="body-lg max-w-xl mb-8"
                >
                  I build systems the way owners think — by understanding why a
                  problem exists, designing what truly matters, and taking full
                  responsibility for outcomes in real environments.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/projects" className="btn-primary group">
                    View Systems Built
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Get in Touch
                  </Link>
                </motion.div>
              </div>

              {/* Right: Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-lg" />
                  <img
                    src={portrait}
                    alt="Arshath Abdulla A - AI & Data Engineer"
                    className="w-72 md:w-80 lg:w-96 rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Credibility Signals */}
        <section className="py-20 border-t border-border/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="card-dark">
                <div className="text-primary text-3xl font-bold mb-2">6+ Months</div>
                <div className="text-foreground font-medium mb-1">Long-Running Systems</div>
                <p className="text-sm text-muted-foreground">
                  Production systems built, iterated, and sustained over time
                </p>
              </div>

              <div className="card-dark">
                <div className="text-primary text-3xl font-bold mb-2">SRM</div>
                <div className="text-foreground font-medium mb-1">Institutional Trust</div>
                <p className="text-sm text-muted-foreground">
                  Platforms built for academic and administrative operations
                </p>
              </div>

              <div className="card-dark">
                <div className="text-primary text-3xl font-bold mb-2">Business</div>
                <div className="text-foreground font-medium mb-1">Real-World Exposure</div>
                <p className="text-sm text-muted-foreground">
                  Systems used by real users with real constraints
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 border-t border-border/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <div>
                <p className="section-title">Flagship Work</p>
                <h2 className="heading-lg">Systems With Ownership</h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "SRM RELAY",
                  description:
                    "An institutional communication platform designed, built, and evolved over six months for real operational use.",
                  tag: "Institutional Platform",
                },
                {
                  title: "Business Operations System",
                  description:
                    "A transaction, credit, and insight system built for continuous use in a live retail environment.",
                  tag: "Business System",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to="/projects" className="card-dark block group h-full">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                      {project.tag}
                    </span>
                    <h3 className="heading-md mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="body-md">{project.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;
