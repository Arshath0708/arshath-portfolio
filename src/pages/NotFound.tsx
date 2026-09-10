import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="bg-glow-blob -z-10 w-96 h-96 top-1/3 left-1/2 -translate-x-1/2 animate-drift" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <p className="section-title justify-center">Error</p>
        <h1 className="font-mono text-7xl md:text-8xl font-bold text-primary text-glow mb-4 tracking-tight">
          404
        </h1>
        <p className="body-lg mb-2">This route doesn't exist in the system.</p>
        <p className="font-mono text-sm text-muted-foreground/70 mb-10">
          {location.pathname}
        </p>
        <Link to="/" className="btn-primary group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Return Home
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
