import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <main className="pt-28 md:pt-32 pb-20 relative">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-24"
          >
            <p className="section-title">Professional Profile</p>
            <h1 className="heading-xl mb-6 text-foreground">
              Translating Problems into{" "}
              <span className="text-primary">Practical Solutions</span>
            </h1>
            <p className="body-lg">
              My approach combines real retail business operations, production technology experience, and data analytics. I don’t just execute tasks—I seek to understand the business context, analyze the requirements, and build solutions that drive actual value.
            </p>
          </motion.div>

          {/* Philosophy Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="card-dark p-8 md:p-10 border-t-4 border-t-primary"
            >
              <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-4">
                <span className="w-8 h-px bg-primary/40"></span>
                How I Think
              </h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Root-Cause Driven
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                    I don’t solve symptoms. I analyze why problems exist, what constraints shape them, and how systems should evolve to prevent recurrence.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Business First, Technology Second
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                    Technology is a tool to solve business problems. I prioritize workflows, user requirements, and operational efficiency over adopting the latest tech trend for its own sake.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Long-Term Orientation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                    Every decision is made with future maintenance, extension, and ownership in mind — not just initial delivery.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="card-dark p-8 md:p-10 border-t-4 border-t-border hover:border-t-primary/50 transition-colors duration-500"
            >
              <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-4">
                <span className="w-8 h-px bg-border group-hover:bg-primary/40 transition-colors"></span>
                How I Work
              </h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary/60 transition-colors" /> Ownership Mindset
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                    When I take on a process or a system, I treat it as if the future of the organization depends on it. I take full responsibility from requirements to results.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary/60 transition-colors" /> Data-Backed Decisions
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                    Whether it's planning inventory or optimizing a backend workflow, I rely on data, SQL, and quantitative analysis to guide my recommendations.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary/60 transition-colors" /> Clear Communication
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                    I ensure technical constraints and business requirements are understood by both engineers and non-technical stakeholders alike.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Education
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* College */}
              <div className="card-dark p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border/40 hover:border-primary/30 transition-colors group">
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    B.Tech – Artificial Intelligence & Data Science
                  </h3>
                  <p className="text-primary/80 font-medium mb-3">
                    SRM Madurai College of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Focused on data analytics, problem solving, and technical implementations · CGPA 7.48
                  </p>
                </div>
                <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground bg-secondary/50 px-4 py-2 rounded border border-border/50 shrink-0 self-start md:self-auto">
                  Sep 2024 — May 2028
                </div>
              </div>

              {/* School */}
              <div className="card-dark p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border/40 hover:border-border transition-colors">
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">
                    Higher Secondary Certificate (HSC) – Computer Science
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Seventh Day Adventist Matriculation Higher Secondary School, Madurai
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Completed schooling from UKG through 12th standard · Grade 80.5%
                  </p>
                </div>
                <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground bg-secondary/50 px-4 py-2 rounded border border-border/50 shrink-0 self-start md:self-auto">
                  Jun 2022 — Apr 2024
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-t border-white/5 pt-16"
          >
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-foreground">Core Focus Areas</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Business Process Analysis",
                  description:
                    "Identifying bottlenecks, gathering requirements, and optimizing workflows to improve operational efficiency.",
                },
                {
                  title: "Data-Driven Decision Making",
                  description:
                    "Utilizing SQL, Power BI, and analytical tools to translate raw data into actionable business insights.",
                },
                {
                  title: "Systems Integration & Architecture",
                  description:
                    "Bridging the gap between business needs and technical execution to build seamless, integrated solutions.",
                },
              ].map((area, index) => (
                <div key={area.title} className="card-dark p-8 group border border-border/40 hover:border-primary/20 transition-all duration-500">
                  <div className="text-primary/30 font-mono text-4xl font-bold mb-4 group-hover:text-primary/60 transition-colors">
                    0{index + 1}
                  </div>
                  <h3 className="text-foreground font-semibold mb-3 text-lg">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
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
