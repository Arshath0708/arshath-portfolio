import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const primarySkills = [
  {
    name: "Python",
    description:
      "Primary language for data analysis, machine learning, automation, and backend development. Used across academic, business, and internship projects.",
    applications: [
      "Machine Learning Models",
      "Data Analysis & Processing",
      "Automation Scripts",
      "Backend Development",
    ],
  },
  {
    name: "Machine Learning",
    description:
      "Applying machine learning techniques to solve real-world problems, focusing on clarity, accuracy, and usability rather than academic complexity.",
    applications: [
      "Classification & Prediction",
      "Feature Engineering",
      "Model Evaluation",
      "Applied AI Systems",
    ],
  },
  {
    name: "Data Analysis",
    description:
      "Transforming raw data into insights through structured analysis, visualization, and business-oriented interpretation.",
    applications: [
      "Exploratory Data Analysis",
      "Trend & Pattern Identification",
      "Business Insights",
      "Decision Support",
    ],
  },
  {
    name: "SQL",
    description:
      "Working with relational databases to store, retrieve, and analyze structured data efficiently.",
    applications: [
      "Query Writing",
      "Data Extraction",
      "Relational Modeling",
      "Analytical Queries",
    ],
  },
];

const supportingSkills = [
  {
    name: "Power BI",
    description:
      "Building interactive dashboards and visual reports to communicate insights clearly to technical and non-technical stakeholders.",
  },
  {
    name: "Django",
    description:
      "Developing full-stack web applications with structured backend logic, authentication, and database integration.",
  },
  {
    name: "Flask",
    description:
      "Creating lightweight APIs and ML-backed applications for rapid prototyping and deployment.",
  },
  {
    name: "Streamlit",
    description:
      "Building data-driven and ML-powered web applications for fast experimentation and real-world use.",
  },
  {
    name: "Git & GitHub",
    description:
      "Version control, project collaboration, and maintaining clean, traceable development histories.",
  },
  {
    name: "Microsoft Azure (Fundamentals)",
    description:
      "Foundational understanding of cloud concepts, services, and analytics workflows through Microsoft Elevate training.",
  },
  {
    name: "Generative AI & NLP",
    description:
      "Hands-on exposure to generative AI concepts, NLP fundamentals, and retrieval-augmented generation systems.",
  },
  {
    name: "Power BI & Data Visualization",
    description:
      "Designing dashboards and reports that translate complex data into actionable business insights.",
  },
  {
    name: "Business & Retail Analytics",
    description:
      "Applying analytical thinking to real retail operations including sales analysis, inventory planning, and customer behavior.",
  },
];

const Skills = () => {
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
            <p className="section-title">Skills</p>
            <h1 className="heading-xl mb-6">
              Capabilities Built Through{" "}
              <span className="text-primary">Execution</span>
            </h1>
            <p className="body-lg">
              These skills were developed through hands-on projects, internships,
              business operations, and continuous learning. I focus on applying
              the right tool to solve the right problem.
            </p>
          </motion.div>

          {/* Primary Skills */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="heading-md mb-8 line-accent pb-4"
            >
              Core Technical Skills
            </motion.h2>

            <div className="space-y-6">
              {primarySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-dark"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {skill.name}
                      </h3>
                      <p className="body-md">{skill.description}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Applied In
                      </h4>
                      <ul className="space-y-2">
                        {skill.applications.map((app) => (
                          <li
                            key={app}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Supporting Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-border/30 pt-12"
          >
            <h2 className="heading-md mb-8 line-accent pb-4">
              Supporting & Applied Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {supportingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border/50 rounded-lg"
                >
                  <h3 className="text-foreground font-semibold mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded-r-lg"
          >
            <p className="text-foreground italic">
              “Skills compound when they are applied to real problems. I focus on
              learning deeply, building practically, and improving continuously.”
            </p>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Skills;
