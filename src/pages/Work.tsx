import { motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const workExperiences = [
  {
    title: "Web Developer",
    organization: "Spirezen Enterprises Pvt Ltd.",
    period: "May 2026 — Present",
    type: "Production Technology",
    responsibilities: [
      "Deliver business-driven enhancements for a production-scale digital commerce platform, bridging business requirements with technical implementation",
      "Lead analysis and optimization of order processing, logistics integration, and data-consistency workflows",
      "Implement secure backend services, REST APIs, webhook integrations, and third-party platform connectivity",
      "Resolve production issues through root-cause analysis, system debugging, and performance optimization",
      "Collaborate with business stakeholders to turn functional requirements into scalable, production-ready solutions",
    ],
    systems: [
      "REST APIs & Webhooks",
      "Business Requirements",
      "Workflow Automation",
      "Production Debugging",
    ],
  },
  {
    title: "Retail Operations & Analytics",
    organization: "Kanmani Readymades",
    period: "Jan 2017 — Present",
    type: "Business Operations",
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
    title: "AI Intern (Data & BI Focus)",
    organization: "Microsoft Elevate – AICTE (Edunet Foundation)",
    period: "Dec 2025 — Jan 2026",
    type: "Data Analytics",
    responsibilities: [
      "Completed structured training focused on Artificial Intelligence, Machine Learning, Microsoft Azure, and Power BI",
      "Delivered a Consultant-Level Power BI dashboard analyzing profitability and regional performance across a Global Superstore dataset",
      "Built a Random Forest sales-prediction model trained on 421K+ records to support inventory and demand forecasting",
      "Contributed to Academic Compass — an AI-driven academic risk intelligence system",
    ],
    systems: [
      "Power BI Analytics",
      "Microsoft Azure Cloud",
      "Machine Learning",
      "KPI Dashboards",
    ],
  },
  {
    title: "AI Full Stack Application Development Intern",
    organization: "Gevinst Technologies",
    period: "Dec 2025 — Jan 2026",
    type: "Technical Experience",
    responsibilities: [
      "Designed and developed a Digital Library converting PDF, DOCX, and TXT documents into natural-sounding speech",
      "Implemented file upload, document parsing, and multi-format content-extraction pipelines",
      "Integrated AI-based text-to-speech functionality deployed on cloud infrastructure",
    ],
    systems: [
      "Systems Architecture",
      "Document Processing",
      "API Integration",
    ],
  },
  {
    title: "Data Science Intern",
    organization: "HEXCENT PVT LTD",
    period: "Jun 2026 — Jul 2026",
    type: "Data Science",
    responsibilities: [
      "Built predictive models for layoff risk, customer churn, and loan approval utilizing real-world datasets",
      "Developed a deep learning–based Brain Tumor MRI Detection system using CNNs with TensorFlow/Keras",
      "Ran complete data pipelines including preprocessing, feature engineering, and model evaluation",
    ],
    systems: [
      "Predictive Modeling",
      "Data Processing",
      "Python Analytics",
    ],
  },
  {
    title: "Data Science Intern",
    organization: "Vinsup Infotech (P) Ltd",
    period: "Jul 2025 — Aug 2025",
    type: "Technical Experience",
    responsibilities: [
      "Built web-based applications using Python, Django, and Streamlit to solve data-driven problems",
      "Collaborated with development teams following industry-level coding and documentation standards",
    ],
    systems: [
      "Web Applications",
      "Version Control",
    ],
  },
];

const credentials = [
  { title: "Career Management Essentials", issuer: "IBM", year: "Feb 2026" },
  { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", year: "Feb 2026" },
  { title: "Dataset to Model — Sustainable AI Mini Hackathon", issuer: "SRM MCET", year: "Feb 2026" },
  { title: "Digital Skills Certification", issuer: "Tamil Nadu Skill Development", year: "Nov 2025" },
  { title: "Data Analysis with Python", issuer: "IBM Developer Skills Network", year: "Dec 2025" },
  { title: "Generative AI in Action", issuer: "IBM", year: "Dec 2025" },
  { title: "Tata Data Visualisation Job Simulation", issuer: "Forage (Tata Group)", year: "Dec 2025" },
  { title: "Programming in Java (Elite)", issuer: "NPTEL", year: "Jul 2025" },
];

const Work = () => {
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
            <p className="section-title">Experience</p>
            <h1 className="heading-xl mb-6 text-foreground">
              Execution in <span className="text-primary">Real Environments</span>
            </h1>
            <p className="body-lg">
              My experience spans a live production role, institutional systems,
              data-driven internships, and nine years of continuous retail business
              operations — where decisions have tangible impacts.
            </p>
          </motion.div>

          {/* Timeline Work Experiences */}
          <div className="relative mb-32">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-[39px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-border to-transparent z-0" />

            <div className="space-y-16">
              {workExperiences.map((exp, index) => (
                <motion.article
                  key={exp.title + exp.organization}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-12 md:pl-28 group"
                >
                  {/* Timeline node */}
                  <div className="absolute left-2 md:left-[35px] top-6 w-5 h-5 rounded-full border-[3px] border-background bg-primary z-10 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_10px_rgba(230,168,9,0.5)]" />

                  <div className="card-dark p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8 border-b border-white/5 pb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="badge-hud">
                            {exp.type}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h2>
                        <p className="text-lg text-primary/80 font-medium">{exp.organization}</p>
                      </div>
                      <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground bg-secondary/50 px-4 py-2 rounded border border-border/50 shrink-0">
                        {exp.period}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-[1fr_250px] gap-10">
                      <div>
                        <h3 className="text-xs font-bold text-primary/70 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <span className="w-4 h-px bg-primary/40"></span> Context & Responsibilities
                        </h3>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 body-md text-foreground/90">
                              <span className="text-primary/60 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xs font-bold text-primary/70 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <span className="w-4 h-px bg-primary/40"></span> Focus Areas
                        </h3>
                        <div className="flex flex-col gap-2">
                          {exp.systems.map((system) => (
                            <div
                              key={system}
                              className="px-4 py-2 text-xs font-mono tracking-wider uppercase bg-primary/5 text-primary/80 rounded border border-primary/20 text-center"
                            >
                              {system}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 card-dark p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_0_30px_rgba(230,168,9,0.05)] border-primary/30"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Certificate of Appreciation — SRM Relay Institutional Deployment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Awarded by the Principal (Nov 2025) for gathering requirements, designing workflows, and deploying an institutional communication app used by the Principal, Vice Principal, HODs, and staff.
              </p>
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-t border-white/5 pt-16"
          >
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Credentials & Certifications
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="flex flex-col gap-2 p-5 bg-card/30 border border-border/40 rounded-xl hover:border-primary/40 hover:bg-card/60 transition-all duration-300"
                >
                  <span className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-1">
                    {credential.year}
                  </span>
                  <h3 className="text-foreground font-semibold text-sm leading-snug">
                    {credential.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-auto">
                    {credential.issuer}
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

export default Work;
