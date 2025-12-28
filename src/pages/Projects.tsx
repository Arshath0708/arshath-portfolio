import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const flagshipProjects = [
  {
    title: "SRM RELAY",
    subtitle: "Institutional Communication & Notification Platform",
    duration: "6+ Months",
    context: "Academic Institution",
    description:
      "A role-based communication system designed to streamline official announcements and internal messaging within an academic institution. Built to operate reliably in real institutional conditions where clarity, access control, and uptime matter.",
    contributions: [
      "Designed end-to-end system architecture with role-based access for Principal, HODs, and staff",
      "Implemented secure message broadcasting and controlled information flow",
      "Handled real-world constraints such as reliability, usability, and operational continuity",
      "Owned the project lifecycle from problem identification to deployment-ready solution",
    ],
    systems: [
      "Role-Based Access Control",
      "Institutional Messaging Systems",
      "System Architecture & Ownership",
    ],
  },
  {
    title: "Digital Library (AI-Powered)",
    subtitle: "Document-to-Speech Knowledge System",
    duration: "Project-Based",
    context: "Personal / Academic",
    description:
      "An AI-driven system that converts textual knowledge into accessible audio formats. Designed to improve content consumption by transforming PDFs, documents, and text files into speech using intelligent processing.",
    contributions: [
      "Built pipelines to extract and process content from multiple document formats",
      "Integrated AI-based text-to-speech workflows for knowledge accessibility",
      "Focused on usability and real-world learning scenarios",
      "Designed with extensibility for future AI enhancements",
    ],
    systems: [
      "AI Text-to-Speech Pipelines",
      "Document Processing Systems",
      "Knowledge Accessibility Tools",
    ],
  },
  {
    title: "Small Business Operations System",
    subtitle: "Payment Tracking & Health Analytics",
    duration: "Active Use",
    context: "Kanmani Readymades",
    description:
      "A practical system built to support day-to-day operations of a retail business. Combines payment tracking and basic health analytics to improve operational clarity and decision-making.",
    contributions: [
      "Designed tools to track payments, expenses, and operational records",
      "Worked directly with business stakeholders to understand real requirements",
      "Optimized workflows for non-technical users",
      "Continuously improved features based on real usage feedback",
    ],
    systems: [
      "Financial Tracking Systems",
      "Operational Analytics",
      "User-Centric System Design",
    ],
  },
];

const additionalProjects = [
  "Health Prediction System (Machine Learning)",
  "CGPA Calculator Application (Streamlit)",
  "Django-Based Notes Application",
  "OCR & Data Extraction Utilities",
  "Power BI Dashboards for Data Analysis",
  "Automation Scripts & Data Processing Tools",
];

const upcomingProjects = [
  {
    title: "GiveJoy",
    description:
      "A donation platform designed to enable one-tap contributions to orphanages directly through UPI payments. Focused on transparency, trust, and ease of impact.",
  },
  {
    title: "LifePulse360",
    description:
      "An integrated life management platform combining health, productivity, finance, and AI-driven insights into a single ecosystem.",
  },
];

const Projects = () => {
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
            <p className="section-title">Projects</p>
            <h1 className="heading-xl mb-6">
              Systems Built with{" "}
              <span className="text-primary">Ownership</span>
            </h1>
            <p className="body-lg">
              I focus on building systems that solve real problems under real
              constraints. Each project reflects ownership, responsibility, and
              long-term thinking—not just technical execution.
            </p>
          </motion.div>

          {/* Flagship Projects */}
          <div className="space-y-14 mb-24">
            {flagshipProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                    <span>{project.context}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                </div>

                <p className="body-md mb-6">{project.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      What I Owned
                    </h3>
                    <ul className="space-y-2">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex items-start gap-3 body-md">
                          <span className="text-primary mt-1">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Systems Involved
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.systems.map((system) => (
                        <span
                          key={system}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Additional Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-border/30 pt-12 mb-20"
          >
            <h2 className="heading-md mb-6 line-accent pb-4">
              Additional Builds
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
              {additionalProjects.map((proj) => (
                <li key={proj} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {proj}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Upcoming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-6 line-accent pb-4">
              Currently Building
            </h2>
            <div className="space-y-4">
              {upcomingProjects.map((proj) => (
                <div key={proj.title} className="p-6 bg-card border border-border/50 rounded-lg">
                  <h3 className="text-foreground font-semibold mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Projects;
