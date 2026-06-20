import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-white/80">Available for new opportunities</span>
        </motion.div>
        
        <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Niravkumar Prajapati
        </motion.h1>
        
        <motion.h2 variants={item} className="text-xl md:text-3xl text-gradient font-medium tracking-tight mb-8">
          Front-End Developer | React Developer | SaaS Web App Builder
        </motion.h2>
        
        <motion.p variants={item} className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building modern business applications with React, JavaScript, Supabase and Vercel. 
          Focusing on premium user experiences, clean architecture, and dynamic interfaces.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#project" className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors w-full sm:w-auto">
            View Featured Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto">
            Get in touch
          </a>
        </motion.div>
        
        {/* Secondary Social / Action Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8">
          <a 
            href="https://github.com/niravkpdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
          <a 
            href="#" 
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a 
            href="#" 
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-white/40 hover:text-white/80 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
