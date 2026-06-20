import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/5 bg-[#030303]/60 backdrop-blur-2xl">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-10 md:py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Brand & Identity */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight text-white/90">
              Niravkumar Prajapati
            </h3>
            <p className="text-white/50 text-xs md:text-sm max-w-sm leading-relaxed">
              Front-End Developer <span className="mx-1 opacity-50">|</span> React Developer <span className="mx-1 opacity-50">|</span> SaaS Web App Builder
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-col md:items-end justify-start">
            <div className="flex flex-col md:items-end gap-3 mt-4 md:mt-0">
              <a href="https://github.com/niravkpdev" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-all w-fit">
                GitHub
                <span className="block w-0 h-[1px] bg-white/50 group-hover:w-4 transition-all duration-300" />
              </a>
              <a href="#" className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-all w-fit">
                LinkedIn
                <span className="block w-0 h-[1px] bg-white/50 group-hover:w-4 transition-all duration-300" />
              </a>
              <a href="mailto:hello@example.com" className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-all w-fit">
                Email
                <span className="block w-0 h-[1px] bg-white/50 group-hover:w-4 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © 2026 All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center justify-center text-center md:text-right font-medium">
            Built with React, Tailwind CSS and Framer Motion.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
