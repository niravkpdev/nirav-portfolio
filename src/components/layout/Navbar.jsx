import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8 pointer-events-auto shadow-lg shadow-black/20">
        <a href="#" className="font-semibold text-lg tracking-tight text-white/90 hover:text-white transition-colors">
          NP.
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}
