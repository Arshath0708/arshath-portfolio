import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const workExperiences = [
  {
    title: "AI Intern",
    organization: "Microsoft Elevate – AICTE (Edunet Foundation)",
    period: "Dec 2025 — Jan 2026",
    type: "National Internship Program (Completed)",
    responsibilities: [
      "Selected for the Microsoft Elevate – AICTE national internship focused on Artificial Intelligence and Data Technologies",
      "Completed structured training in Artificial Intelligence, Machine Learning, Microsoft Azure, and Power BI",
      "Worked on guided projects, assessments, and real-world problem scenarios through Microsoft-aligned learning platforms",
      "Developed a strong foundation in cloud-based analytics and AI-driven decision systems",
    ],
    systems: [
      "Artificial Intelligence & Machine Learning",
      "Microsoft Azure Cloud",
      "Power BI Analytics",
      "Enterprise Learning Systems",
    ],
  },
  {
    title: "Data Science Intern",
    organization: "Vinsup Infotech (P) Ltd",
    period: "Jul 2025 — Aug 2025",
    type: "Industry Internship",
    responsibilities: [
      "Built and contributed to web-based applications using Python, Django, and Streamlit",
      "Applied machine learning concepts to solve real-world, data-driven problems",
      "Collaborated with development teams following industry-level coding and documentation standards",
      "Gained hands-on exposure to debugging, deployment workflows, and version control using Git",
    ],
    systems: [
      "Machine Learning Pipelines",
      "Web Applications",
      "Data Analysis Workflows",
      "Version Control & Deployment",
    ],
  },
  {
    title: "Business Analyst & Retail Operations",
    organization: "Kanmani Readymades – Clothing & Lifestyle Store",
    period: "Jan 2017 — Present",
    type: "Business Ownership & Analytics",
    responsibilities: [
      "Analyze daily, weekly, and seasonal sales data to improve profitability and operational efficiency",
      "Perform root-cause analysis on profit/loss trends and propose data-backed business improvements",
      "Plan inventory and stock purchases using demand forecasting and customer behavior analysis",
      "Digitized record-keeping, sales tracking, and basic accounting processes for accuracy and insights",
      "Coordinate with staff and suppliers to ensure smooth retail operations and stock optimization",
    ],
    systems: [
      "Sales & Profit Analysis",
      "Demand Forecasting",
      "Inventory Management",
      "Operational Analytics",
    ],
  },
  {
    title: "Systems & Engineering Projects",
    organization: "Academic, Institutional & Personal Work",
    period: "2022 — Present",
    type: "Continuous System Development",
    responsibilities: [
      "Designed and built multiple end-to-end systems spanning web applications, analytics tools, and ML-driven solutions",
      "Developed institutional systems including communication platforms, tracking systems, and automation tools",
      "Implemented data pipelines, dashboards, and reporting systems for real-world decision-making",
      "Continuously build and iterate on new projects with a focus on scalability, clarity, and real-world usability",
    ],
    systems: [
      "Full-Stack Web Systems",
      "Data Engineering Pipelines",
      "Machine Learning Applications",
      "Automation & Analytics Platforms",
    ],
  },
];

const credentials = [
  {
    title: "Data Analysis with Python",
    issuer: "IBM Developer Skills Network",
    year: "2025",
  },
  {
    title: "Generative AI in Action",
    issuer: "IBM",
    year: "2025",
  },
  {
    title: "Tata Data Visualisation Job Simulation",
    issuer: "Forage (Tata Group)",
    year: "2025",
  },
  {
    title: "Building RAG Systems using LlamaIndex",
    issuer: "Analytics Vidhya",
    year: "2025",
  },
  {
    title: "Programming in Java (Elite)",
    issuer: "NPTEL",
    year: "2025",
  },
  {
    title: "Natural Language Processing",
    issuer: "SRM Institute of Science and Technology",
    year: "2025",
  },
];

const Work = () => {
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
            <p className="section-title">Work & Exposure</p>
            <h1 className="heading-xl mb-6">
              Execution in{" "}
              <span className="text-primary">Real Environments</span>
            </h1>
            <p className="body-lg">
              My experience spans institutional systems, industry internships,
              long-term business operations, and continuous engineering projects—
              where decisions have real-world impact.
            </p>
          </motion.div>

          {/* Work Experiences */}
          <div className="space-y-12 mb-20">
            {workExperiences.map((exp, index) => (
              <motion.article
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {exp.type}
                    </span>
                    <h2 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h2>
                    <p className="text-muted-foreground">{exp.organization}</p>
                  </div>
                  <span className="text-primary font-medium">{exp.period}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 body-md">
                          <span className="text-primary mt-1">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Systems & Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.systems.map((system) => (
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

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-border/30 pt-12"
          >
            <h2 className="heading-md mb-8 line-accent pb-4">
              Credentials & Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="flex items-center justify-between p-4 bg-card border border-border/50 rounded-lg"
                >
                  <div>
                    <h3 className="text-foreground font-medium">
                      {credential.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {credential.issuer}
                    </p>
                  </div>
                  <span className="text-sm text-primary font-medium">
                    {credential.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Work;
