import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, MapPin, Database, Briefcase, Code } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import portrait from "@/assets/portrait.jpeg";

const coreCompetencies = [
  {
    category: "BUSINESS ANALYSIS",
    icon: Briefcase,
    skills: [
      { name: "Business Requirements", desc: "Understanding stakeholder needs" },
      { name: "Process Analysis", desc: "Mapping operational flows" },
      { name: "Workflow Analysis", desc: "Optimizing system interactions" },
      { name: "Root Cause Analysis", desc: "Identifying core constraints" },
      { name: "Stakeholder Collaboration", desc: "Bridging tech & business" },
    ],
  },
  {
    category: "DATA & BUSINESS INTELLIGENCE",
    icon: Database,
    skills: [
      { name: "SQL", desc: "Data extraction & modeling" },
      { name: "Power BI", desc: "Interactive dashboards" },
      { name: "Excel", desc: "Ad-hoc analysis & forecasting" },
      { name: "Data Analysis", desc: "Identifying trends" },
      { name: "KPI Analysis", desc: "Tracking performance metrics" },
    ],
  },
  {
    category: "TECHNOLOGY",
    icon: Code,
    skills: [
      { name: "REST APIs", desc: "System-to-system communication" },
      { name: "Webhooks", desc: "Real-time event integration" },
      { name: "System Integration", desc: "Connecting platforms" },
      { name: "Database Concepts", desc: "Relational architecture" },
      { name: "Python", desc: "Automation & analysis" },
    ],
  },
];

const AbstractNetwork = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,168,9,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
      
      {/* Abstract lines and nodes */}
      <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated connection lines */}
        <motion.path 
          d="M 100 200 C 300 200, 400 400, 600 300 S 800 100, 1000 200" 
          fill="none" 
          stroke="rgba(230,168,9,0.2)" 
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.circle cx="100" cy="200" r="3" fill="rgba(230,168,9,0.5)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
        <motion.circle cx="600" cy="300" r="3" fill="rgba(230,168,9,0.5)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} />
        <motion.circle cx="1000" cy="200" r="3" fill="rgba(230,168,9,0.5)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3 }} />
      </svg>
    </div>
  );
};

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <PageTransition>
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20">
          <AbstractNetwork />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6 inline-flex"
                >
                  <span className="badge-hud">
                    Business Analyst • Business Systems & Technology
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="heading-xl mb-6 text-foreground"
                >
                  Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary/60">Business Needs</span>, Data & Technology.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="body-lg max-w-2xl mb-8 leading-relaxed"
                >
                  I analyze business processes, understand requirements, extract insights from data, and collaborate on technology solutions to turn real-world problems into practical outcomes.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-10"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  Chennai • Open to Opportunities
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/projects" className="btn-primary group">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a href="/resume/ARSHATH ABDULLA A.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                    <Download className="mr-2 h-4 w-4" />
                    View Resume
                  </a>
                </motion.div>
              </div>

              {/* Right: Portrait */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ y }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
              >
                <div className="relative rounded-xl p-1 border border-border/40 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={portrait}
                      alt="Arshath Abdulla A - Business Systems Analyst"
                      className="w-72 md:w-80 lg:w-[400px] aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Differentiator Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">
                Business Understanding. <span className="text-primary/90">Technical Depth.</span> Analytical Thinking.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="card-dark group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-primary font-mono text-sm tracking-widest uppercase">01</div>
                  <div className="w-10 h-[1px] bg-primary/30 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">9+ Years of Retail Business Experience</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hands-on experience through Kanmani Readymades across customers, sales, inventory, purchasing, profitability, and daily operations.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="card-dark group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-primary font-mono text-sm tracking-widest uppercase">02</div>
                  <div className="w-10 h-[1px] bg-primary/30 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Production Technology Experience</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Web development experience at Spirezen working with business-driven enhancements, workflows, APIs, integrations, and production systems.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="card-dark group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-primary font-mono text-sm tracking-widest uppercase">03</div>
                  <div className="w-10 h-[1px] bg-primary/30 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Data & Business Intelligence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Experience using SQL, Power BI, Excel, and data analysis to understand performance, extract insights, and support business decisions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="py-24 border-t border-border/40 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <p className="section-title">Capabilities</p>
              <h2 className="heading-lg">Core Competencies</h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {coreCompetencies.map((group, idx) => (
                <motion.div 
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-card/30 border border-border/50 rounded-xl p-8 hover:bg-card/50 transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <group.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-foreground">{group.category}</h3>
                  </div>
                  
                  <ul className="space-y-6">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="group/item flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover/item:bg-primary transition-colors shrink-0" />
                          <span className="font-semibold text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground ml-3.5">{skill.desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;
