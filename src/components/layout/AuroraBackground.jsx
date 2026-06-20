import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function AuroraBackground({ children, className }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Disable excessive motion on mobile devices or if user prefers reduced motion
      setIsMobile(window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={cn("relative min-h-screen w-full bg-[#050505] text-foreground overflow-hidden selection:bg-purple-500/30", className)}>
      {/* Floating Blur Orbs Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden isolate opacity-50">
        
        {/* Orb 1: Top Left - Indigo / Blue */}
        <motion.div
          animate={isMobile ? {} : {
            x: ["0%", "30%", "0%"],
            y: ["0%", "20%", "0%"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vh] rounded-full bg-gradient-to-br from-indigo-600/40 to-blue-500/30 blur-[130px] mix-blend-screen will-change-transform"
        />
        
        {/* Orb 2: Center Right - Purple / Indigo */}
        <motion.div
          animate={isMobile ? {} : {
            x: ["0%", "-20%", "0%"],
            y: ["0%", "30%", "0%"],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[45vw] h-[55vh] rounded-full bg-gradient-to-bl from-purple-600/40 to-indigo-500/30 blur-[130px] mix-blend-screen will-change-transform"
        />
        
        {/* Orb 3: Bottom Left - Blue / Purple */}
        <motion.div
          animate={isMobile ? {} : {
            x: ["0%", "25%", "0%"],
            y: ["0%", "-25%", "0%"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[5%] w-[60vw] h-[50vh] rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-500/40 blur-[130px] mix-blend-screen will-change-transform"
        />

        {/* Orb 4: Bottom Right - Deep Purple (Desktop Only for Performance) */}
        <motion.div
          animate={isMobile ? {} : {
            x: ["0%", "-30%", "0%"],
            y: ["0%", "-10%", "0%"],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[0%] -right-[5%] w-[40vw] h-[40vh] rounded-full bg-gradient-to-tl from-purple-800/30 to-indigo-600/20 blur-[120px] mix-blend-screen will-change-transform hidden md:block"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
