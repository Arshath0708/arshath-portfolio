import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const RESUME_URL = "/resume/Arshath_Abdulla_Resume.pdf";

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
            <p className="section-title">Resume</p>
            <h1 className="heading-xl mb-6">
              Professional <span className="text-primary">Profile</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              A formal representation of my experience and systems I have owned.
              For deeper context, explore the Projects and About sections.
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 md:p-12 mb-12"
          >
            {/* Identity */}
            <div className="text-center mb-12 pb-8 border-b border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                ARSHATH ABDULLA A
              </h2>
              <p className="text-primary font-medium mb-4">
                AI & Data Science Engineer
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>a.arshathabdulla@gmail.com</span>
                <span className="hidden md:inline">|</span>
                <span>+91 84288 58856</span>
                <span className="hidden md:inline">|</span>
                <span>LinkedIn: arshath0708</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Professional Summary
              </h3>
              <p className="body-md">
                AI & Data Science undergraduate with hands-on experience in
                building production-ready systems across machine learning,
                analytics, and full-stack platforms. Known for ownership,
                disciplined execution, and converting ideas into usable systems.
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
                    Data Science Intern — Vinsup Infotech (P) Ltd
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Jul 2025 – Aug 2025 | Madurai
                  </p>
                  <p className="body-md">
                    Worked on real datasets involving cleaning, feature
                    engineering, exploratory analysis, and basic predictive
                    modeling using Python and Pandas.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Operations & Systems Assistant — Kanmani Readymades
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Apr 2022 – Present | Madurai
                  </p>
                  <p className="body-md">
                    Independently managed billing, customer handling, and
                    inventory workflows. Later engineered a custom payment
                    tracking system to improve operational clarity.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Key Systems Built
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">
                    SRM Relay — Institutional Communication Platform
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Role-based system with admin controls, persistent inbox,
                    audio messages, and real deployment within SRM Madurai.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Smart Health Prediction System
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ML-based disease prediction engine using RandomForest across
                    55+ conditions with guidance output.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    GPA / CGPA Calculator (Anna University)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Streamlit application with semester logic and downloadable
                    PDF reports.
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
            This resume reflects real systems, real responsibility, and verified work.
          </motion.p>
        </div>
      </main>
    </PageTransition>
  );
};

export default Resume;
