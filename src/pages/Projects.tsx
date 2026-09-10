import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const caseStudies = [
  {
    title: "Kanmani Readymades",
    subtitle: "Retail Business Operations & Analytics",
    duration: "9+ Years",
    context: "Physical Retail Operations",
    problem: "Managing inventory, tracking profitability, and understanding seasonal demand in a fast-moving physical retail environment without formalized digital systems.",
    role: "Business Analyst & Operations",
    approach: "Analyzed daily sales, tracked expenses, and digitized operational records to gain visibility into profit margins and customer buying patterns.",
    solution: "Designed and implemented a practical system for tracking payments, optimizing stock placement, and driving data-backed purchasing decisions.",
    outcome: "Improved operational clarity, reduced inventory waste, and established a formalized system for understanding seasonal retail trends.",
    systems: ["Operational Analytics", "Demand Forecasting", "Sales Analysis", "Inventory Management"],
  },
  {
    title: "Spirezen Enterprises",
    subtitle: "Production E-Commerce Systems & Workflow Optimization",
    duration: "Ongoing",
    context: "Live Digital Commerce Platform",
    problem: "Scaling a live e-commerce platform required bridging complex business requirements with robust technical infrastructure and data consistency.",
    role: "Web Developer",
    approach: "Collaborated with business stakeholders to map out functional requirements for order processing and logistics. Conducted root-cause analysis on production bottlenecks.",
    solution: "Delivered business-driven enhancements, engineered REST APIs and webhooks for third-party integrations, and optimized backend workflow automation.",
    outcome: "Improved data consistency across the platform, automated manual logistics workflows, and resolved critical production issues to ensure smooth operations.",
    systems: ["REST APIs", "Workflow Analysis", "System Integration", "Root Cause Analysis"],
  },
  {
    title: "Global Superstore Analytics",
    subtitle: "Business Intelligence & Performance Analysis",
    duration: "Microsoft Elevate",
    context: "Executive Reporting",
    problem: "Business leaders needed visibility into regional performance, overall profitability, and underperforming products to make strategic decisions.",
    role: "Data Analyst",
    approach: "Performed extensive KPI analysis on a large-scale global dataset, identifying critical metrics for profitability and sales volume.",
    solution: "Designed an executive-grade Power BI dashboard translating raw data into clear, actionable business insights for both technical and non-technical stakeholders.",
    outcome: "Successfully identified loss-making products and regions, providing a data-backed foundation for operational adjustments.",
    systems: ["Power BI", "KPI Analysis", "Data Visualization", "Business Intelligence"],
  },
  {
    title: "SRM Relay",
    subtitle: "Requirements, Workflow & Stakeholder Collaboration",
    duration: "6+ Months",
    context: "Academic Institution",
    problem: "Inefficient internal communication and announcement distribution among institutional leadership, faculty, and staff.",
    role: "System Designer & Developer",
    approach: "Gathered requirements directly from the Principal and HODs. Mapped out role-based workflows to ensure controlled information flow.",
    solution: "Built an institutional communication platform with robust role-based access, secure broadcasting, and a persistent inbox.",
    outcome: "Deployed for real operational use within SRM Madurai. Recognized by the Principal with a Certificate of Appreciation for solving a genuine institutional bottleneck.",
    systems: ["Requirements Gathering", "Stakeholder Management", "Workflow Design", "System Architecture"],
  },
];

const ondriNaiPhases = [
  { step: "Vision", desc: "Identify community need & define goals" },
  { step: "Team", desc: "Coordinate 7-member execution team" },
  { step: "Organize", desc: "Establish operations & digital presence" },
  { step: "Engage", desc: "Build partnerships & outreach" },
  { step: "Execute", desc: "Active community action & support" },
];

const secondaryProjects = [
  {
    title: "Walmart Weekly Sales Prediction",
    description: "Built a Random Forest regression model on 421K+ records to forecast demand, addressing the business problem of inventory holding costs.",
  },
  {
    title: "Digital Library (AI Document-to-Audio)",
    description: "Designed a cloud-deployed platform to convert documents to speech, demonstrating strong full-stack technical capability.",
  },
  {
    title: "Academic Compass",
    description: "Contributed to an AI-powered academic risk intelligence system focused on student success metrics.",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <main className="pt-28 md:pt-32 pb-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-20"
          >
            <p className="section-title">Case Studies</p>
            <h1 className="heading-xl mb-6 text-foreground">
              Impact Through <span className="text-primary">Analysis</span>
            </h1>
            <p className="body-lg">
              A detailed look at how I approach business problems, gather requirements, analyze data, and implement technical solutions in real-world environments.
            </p>
          </motion.div>

          {/* Flagship Case Studies */}
          <div className="space-y-16 mb-32">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="card-dark group"
              >
                <div className="mb-10 pb-6 border-b border-white/5 relative">
                  <div className="absolute top-0 right-0 font-mono text-5xl font-bold text-primary/5 select-none pointer-events-none transition-colors duration-500 group-hover:text-primary/10">
                    0{index + 1}
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                      {study.title}
                    </h2>
                    <p className="text-xl text-primary/80 font-medium mb-4">{study.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-mono tracking-widest uppercase text-muted-foreground">
                      <span className="text-primary">{study.context}</span>
                      <span>•</span>
                      <span>{study.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mb-10">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-primary/40"></span> Context & Problem
                    </h3>
                    <p className="body-md text-foreground/90">{study.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-primary/40"></span> My Role
                    </h3>
                    <p className="body-md font-medium text-foreground">{study.role}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-primary/40"></span> Analysis & Approach
                    </h3>
                    <p className="body-md text-foreground/90">{study.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-primary/40"></span> Solution & Outcome
                    </h3>
                    <p className="body-md mb-3 text-foreground/90">{study.solution}</p>
                    <p className="body-md text-foreground font-semibold">{study.outcome}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {study.systems.map((system) => (
                      <span
                        key={system}
                        className="px-4 py-1.5 text-xs font-mono tracking-wider uppercase bg-primary/5 text-primary/80 rounded border border-primary/20"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Leadership & Initiatives */}
          <section id="leadership" className="mb-32 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "0px" }}
            >
              <div className="mb-12 text-center">
                <p className="section-title justify-center">Leadership</p>
                <h2 className="heading-lg text-foreground">Initiative & Operations</h2>
              </div>
              
              <div className="card-dark p-10 lg:p-14 text-center relative overflow-hidden">
                <div className="hidden md:flex absolute top-0 right-0 p-8 items-center justify-center opacity-80 mix-blend-screen">
                  {/* ONDRINAI Logo */}
                  <img src="/ondrinai-logo.jpeg" alt="ONDRINAI Logo" className="w-24 h-24 object-contain rounded-full shadow-[0_0_20px_rgba(230,168,9,0.15)]" />
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-6">
                    Founder & Initiative Lead
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-4">ONDRINAI</h3>
                  <p className="body-lg max-w-3xl mx-auto text-muted-foreground">
                    Building and coordinating a community initiative focused on helping people in need, environmental action, and meaningful local impact.
                  </p>
                </div>

                {/* Team Structure Info */}
                <div className="mt-8 text-sm text-primary/80 font-mono flex flex-wrap justify-center gap-x-6 gap-y-2 uppercase tracking-widest">
                  <span>Active Initiative</span>
                  <span className="text-muted-foreground">•</span>
                  <span>7-Member Team</span>
                  <span className="text-muted-foreground">•</span>
                  <span>Community & Environment</span>
                  <span className="text-muted-foreground">•</span>
                  <span>Digital Presence</span>
                </div>

                {/* Horizontal Process Visualization */}
                <div className="mt-16 relative">
                  {/* Connecting line */}
                  <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-border/50" />
                  <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-primary/50 to-transparent w-[100%]" />
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {ondriNaiPhases.map((phase, i) => (
                      <div key={phase.step} className="relative z-10 flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-mono text-sm font-bold bg-card mb-4 border-primary text-primary shadow-[0_0_15px_rgba(230,168,9,0.2)]`}>
                          0{i + 1}
                        </div>
                        <h4 className="text-foreground font-semibold mb-2">{phase.step}</h4>
                        <p className="text-xs text-muted-foreground text-center">{phase.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Digital Presence CTA */}
                <div className="mt-16 text-center">
                  <a 
                    href="https://instagram.com/ondrinai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
                  >
                    View Initiative on Instagram
                    <span className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors ml-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Secondary Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="pt-16 border-t border-white/5"
          >
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Technical & Analytical Foundations
              </h2>
              <p className="text-muted-foreground mt-2">Secondary projects demonstrating technical depth.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {secondaryProjects.map((proj) => (
                <div key={proj.title} className="p-8 bg-card/30 border border-border/40 rounded-xl hover:border-primary/30 transition-colors duration-500">
                  <h3 className="text-foreground font-semibold mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
