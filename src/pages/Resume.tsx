import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const RESUME_URL = "/resume/ARSHATH ABDULLA A.pdf";

const Resume = () => {
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
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Resume</p>
            <h1 className="heading-xl mb-6">
              Professional <span className="text-primary">Profile</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              A formal representation of my experience bridging business, data, and technology.
              For deeper context, explore the Case Studies and About sections.
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border/80 rounded-xl p-8 md:p-12 mb-12 shadow-sm"
          >
            {/* Identity */}
            <div className="text-center mb-12 pb-8 border-b border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                ARSHATH ABDULLA A
              </h2>
              <p className="text-primary font-medium mb-4">
                Business Systems Analyst &amp; Web Developer
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>a.arshathabdulla@gmail.com</span>
                <span className="hidden md:inline">|</span>
                <span>+91 84288 58856</span>
                <span className="hidden md:inline">|</span>
                <span>LinkedIn: arshath0708</span>
                <span className="hidden md:inline">|</span>
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Professional Summary
              </h3>
              <p className="body-md text-muted-foreground leading-relaxed">
                Analytical and technically proficient undergraduate with 9+ years of hands-on retail business experience and active production engineering experience. Currently working as a Web Developer at Spirezen Enterprises, specializing in bridging business requirements with technical execution. Proven ability to analyze workflows, extract insights from data using SQL and Power BI, and collaborate across teams to deliver practical solutions.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Experience
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-foreground">
                    Web Developer — Spirezen Enterprises Pvt Ltd
                  </p>
                  <p className="text-sm text-primary font-medium mb-2">
                    May 2026 – Present
                  </p>
                  <p className="body-md text-muted-foreground leading-relaxed">
                    Collaborate with business stakeholders to translate functional requirements into scalable production features. Deliver backend services, REST APIs, and workflow automation for a live e-commerce platform, resolving operational bottlenecks through root-cause analysis.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Retail Operations & Analytics — Kanmani Readymades
                  </p>
                  <p className="text-sm text-primary font-medium mb-2">
                    Jan 2017 – Present
                  </p>
                  <p className="body-md text-muted-foreground leading-relaxed">
                    Independently manage retail operations, tracking profitability and analyzing seasonal demand. Designed a custom operational tracking system to improve business clarity, reduce inventory waste, and drive data-backed purchasing decisions.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    AI Intern (Data & BI Focus) — Microsoft Elevate
                  </p>
                  <p className="text-sm text-primary font-medium mb-2">
                    Dec 2025 – Jan 2026
                  </p>
                  <p className="body-md text-muted-foreground leading-relaxed">
                    Delivered a Consultant-Level Power BI dashboard to analyze profitability and regional performance across a Global Superstore dataset. Built a Random Forest sales-prediction model trained on 421K+ records to support inventory forecasting.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Key Case Studies
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">
                    SRM Relay — Institutional Communication Platform
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Gathered requirements from institutional leadership to map out role-based workflows. Built and deployed a secure communication platform recognized by the Principal for solving a genuine operational bottleneck.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Digital Library — AI Document-to-Audio Platform
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Designed system architecture and integrated AI-based text-to-speech functionality deployed on cloud infrastructure, handling robust API communication and multi-format document processing.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Consultant-Level Business Insights Dashboard
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Structured KPI-driven Power BI reports for both technical and non-technical stakeholders, translating raw data into actionable recommendations to identify loss-making products.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={RESUME_URL}
              download
              className="btn-primary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume (PDF)
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Open Resume
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            This resume reflects genuine business experience, real engineering responsibility, and verified work.
          </motion.p>
        </div>
      </main>
    </PageTransition>
  );
};

export default Resume;
