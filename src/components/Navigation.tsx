import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/work" },
  { name: "Case Studies", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const navHeight = useTransform(scrollY, [0, 120], [80, 60]);
  const navBgOpacity = useTransform(scrollY, [0, 120], [0.3, 0.85]);
  const navBg = useMotionTemplate`hsl(var(--background) / ${navBgOpacity})`;

  return (
    <motion.nav
      style={{ backgroundColor: navBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 transition-all duration-300"
    >
      {/* Glowing scroll progress line */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute top-0 left-0 right-0 h-[1.5px] origin-left bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_8px_rgba(230,168,9,0.5)]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          style={{ height: navHeight }}
          className="flex items-center justify-between md:h-auto h-16"
        >
          {/* Logo */}
          <Link
            to="/"
            className="group relative font-sans text-xl font-bold tracking-tight text-foreground transition-colors flex items-center gap-1"
          >
            <span className="relative z-10 tracking-widest uppercase text-sm font-semibold">
              Arshath <span className="text-primary font-normal">|</span> BSA
            </span>
            <span className="absolute inset-0 -z-10 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-primary/20 rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-[13px] uppercase tracking-widest font-medium transition-all duration-500 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1, duration: 0.4 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-sm uppercase tracking-widest font-medium transition-colors border-b border-white/5 ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:pl-2"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
