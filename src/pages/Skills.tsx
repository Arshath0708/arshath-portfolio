import { motion } from "framer-motion";
import { Briefcase, Database, Code, ShieldCheck } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const skillCategories = [
  {
    category: "Business Analysis",
    icon: Briefcase,
    description: "Understanding requirements, mapping workflows, and translating business problems into actionable solutions.",
    skills: [
      { name: "Business Analysis", context: "End-to-end problem definition" },
      { name: "Business Process Analysis", context: "Optimizing operations" },
      { name: "Requirements Analysis", context: "Gathering and documenting needs" },
      { name: "Workflow Analysis", context: "Mapping user and data flows" },
      { name: "Root Cause Analysis", context: "Identifying underlying constraints" },
      { name: "Stakeholder Collaboration", context: "Bridging business and tech teams" },
    ]
  },
  {
    category: "Data & Business Intelligence",
    icon: Database,
    description: "Extracting insights from data to support objective, data-driven decision making.",
    skills: [
      { name: "SQL", context: "Data extraction and manipulation" },
      { name: "Power BI", context: "Interactive dashboards and reporting" },
      { name: "Excel", context: "Data modeling and ad-hoc analysis" },
      { name: "Data Analysis", context: "Identifying trends and patterns" },
      { name: "Data Visualization", context: "Communicating complex metrics clearly" },
      { name: "KPI Analysis", context: "Tracking business performance" },
    ]
  },
  {
    category: "Technology Systems",
    icon: Code,
    description: "Engineering robust, scalable solutions to execute business logic and integrate systems.",
    skills: [
      { name: "REST APIs", context: "System-to-system communication" },
      { name: "Webhooks", context: "Real-time event integration" },
      { name: "System Integration", context: "Connecting disparate platforms" },
      { name: "Database Concepts", context: "Relational modeling and architecture" },
      { name: "Python", context: "Automation and backend logic" },
      { name: "Git / GitHub", context: "Version control and collaboration" },
    ]
  }
];

const supportingSkills = [
  "Machine Learning Pipelines",
  "Generative AI & NLP Concepts",
  "Django & Flask Frameworks",
  "Microsoft Azure (Fundamentals)",
  "Frontend Web Development",
  "Predictive Modeling",
];

const Skills = () => {
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
            <p className="section-title">Competencies</p>
            <h1 className="heading-xl mb-6 text-foreground">
              Bridging <span className="text-primary">Business & Tech</span>
            </h1>
            <p className="body-lg">
              My core capability lies at the intersection of understanding business operations, analyzing data to make informed decisions, and leveraging technology to build practical systems.
            </p>
          </motion.div>

          {/* Core Categories / Pillars */}
          <div className="grid lg:grid-cols-3 gap-8 mb-32">
            {skillCategories.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="card-dark flex flex-col group"
              >
                <div className="mb-8 pb-6 border-b border-white/5 relative">
                  <div className="absolute top-0 right-0 font-mono text-6xl font-bold text-primary/5 select-none pointer-events-none transition-colors duration-500 group-hover:text-primary/10 -mt-2 -mr-2">
                    0{index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(230,168,9,0.1)]">
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {group.category}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {group.description}
                  </p>
                </div>
                
                <div className="flex-1 flex flex-col gap-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-start gap-4 group/skill">
                      <div className="w-6 h-6 rounded bg-card flex items-center justify-center border border-border/50 shrink-0 mt-0.5 group-hover/skill:border-primary/50 transition-colors">
                        <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover/skill:bg-primary transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold text-sm mb-1 group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {skill.context}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Supporting Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                <ShieldCheck className="text-primary w-5 h-5" />
                <h2 className="text-xl font-bold text-foreground">
                  Supporting Technical Foundations
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {supportingSkills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-card/30 border border-border/40 hover:border-primary/30 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="card-dark p-8 md:p-10 border-l-4 border-l-primary relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-9xl text-primary/5 font-serif leading-none -mt-4 -mr-4 pointer-events-none">
                "
              </div>
              <p className="text-foreground/90 italic text-lg leading-relaxed relative z-10 font-medium">
                Technical depth matters, but it's the ability to apply that depth to solve real business problems that creates true value.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Skills;
