import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

import dashboardImg from "../../assets/project-images/dashboard.png";
import customersImg from "../../assets/project-images/customers.png";
import inventoryImg from "../../assets/project-images/inventory.png";
import employeesImg from "../../assets/project-images/employees.png";

const screenshots = [
  { id: 1, title: "Dashboard Overview", src: dashboardImg },
  { id: 2, title: "Customer Management", src: customersImg },
  { id: 3, title: "Inventory Management", src: inventoryImg },
  { id: 4, title: "Employee Management", src: employeesImg },
];

export function FeaturedProject() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="project" className="py-32 px-4 max-w-6xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium w-fit mb-6">
          Featured Product
        </div>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Trinetr Business Suite</h3>
        <p className="text-white/60 text-lg leading-relaxed">
          A comprehensive SaaS platform designed for modern business management. Seamlessly integrating inventory, CRM, HRMS, and real-time analytics in one elegant interface.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-[3rem]" />
        
        {/* Glassmorphism Window Frame */}
        <div className="glass-card rounded-[2rem] p-2 md:p-4 overflow-hidden border border-white/10 shadow-2xl relative z-10 group">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 mb-2 md:mb-4 bg-white/5 rounded-t-[1.5rem] border border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </div>
            <div className="text-white/40 text-xs font-mono font-medium tracking-wider flex-1 text-center pr-8">
              {screenshots[currentIndex].title}
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
                className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % screenshots.length)}
                className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Bottom Indicators & Actions */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6 px-4 pb-4">
            <div className="flex gap-2">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all">
                Live Preview
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 text-white/60 hover:text-white bg-white/5 rounded-full border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
