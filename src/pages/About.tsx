import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <main className="pt-28 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <p className="section-title">About</p>
            <h1 className="heading-xl mb-6">
              Building Systems With{" "}
              <span className="text-primary">Responsibility</span>
            </h1>
            <p className="body-lg">
              I don’t approach engineering as task execution. I approach it as
              ownership — understanding context, making deliberate decisions,
              and standing accountable for the long-term impact of what I build.
            </p>
          </motion.div>

          {/* Philosophy */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-6 line-accent pb-4">How I Think</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Root-Cause Driven
                  </h3>
                  <p className="body-md">
                    I don’t solve symptoms. I analyze why problems exist, what
                    constraints shape them, and how systems should evolve to
                    prevent recurrence.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Systems Over Short-Term Wins
                  </h3>
                  <p className="body-md">
                    Quick fixes break at scale. I prioritize architectures and
                    workflows that remain stable as users, data, and complexity
                    grow.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Long-Term Orientation
                  </h3>
                  <p className="body-md">
                    Every decision is made with future maintenance, extension,
                    and ownership in mind — not just initial delivery.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-6 line-accent pb-4">How I Work</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Ownership Mindset
                  </h3>
                  <p className="body-md">
                    When I take on a system, I treat it as if the future of the
                    organization depends on it — because often, it does.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Practical Engineering
                  </h3>
                  <p className="body-md">
                    I value clarity, stability, and simplicity. Technology is
                    chosen to serve outcomes, not ego.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Clear Communication
                  </h3>
                  <p className="body-md">
                    I ensure technical decisions are understood by both
                    engineers and non-technical stakeholders alike.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-border/30 pt-12"
          >
            <h2 className="heading-md mb-8 line-accent pb-4">Education</h2>

            <div className="space-y-6 max-w-3xl">
              {/* College */}
              <div className="card-dark">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-1">
                      B.Tech – Artificial Intelligence & Data Science
                    </h3>
                    <p className="text-muted-foreground">
                      SRM Madurai College of Engineering and Technology
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Focused on applied machine learning, data systems, and
                      real-world engineering
                    </p>
                  </div>
                  <span className="text-primary font-medium whitespace-nowrap">
                    2024 — 2028
                  </span>
                </div>
              </div>

              {/* School */}
              <div className="card-dark">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-1">
                      Higher Secondary Education
                    </h3>
                    <p className="text-muted-foreground">
                      Seventh Day Adventist Matriculation Higher Secondary School,
                      Madurai
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Completed schooling from UKG through 12th standard
                    </p>
                  </div>
                  <span className="text-primary font-medium whitespace-nowrap">
                    Completed 2024
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-border/30 pt-12 mt-12"
          >
            <h2 className="heading-md mb-8 line-accent pb-4">Core Focus Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Machine Learning Systems",
                  description:
                    "Designing models that integrate cleanly into real workflows.",
                },
                {
                  title: "Data & Platform Engineering",
                  description:
                    "Building pipelines, storage, and services that scale reliably.",
                },
                {
                  title: "End-to-End Ownership",
                  description:
                    "From problem definition to deployment, monitoring, and iteration.",
                },
              ].map((area, index) => (
                <div key={area.title} className="card-dark">
                  <div className="text-primary text-xl font-bold mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">
                    {area.title}
                  </h3>
                  <p className="body-md">{area.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
