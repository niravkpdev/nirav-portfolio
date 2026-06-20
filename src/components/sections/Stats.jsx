import { motion } from "framer-motion";

const stats = [
  { value: "1+", label: "Featured SaaS Project" },
  { value: "100+", label: "GitHub Contributions" },
  { value: "5+", label: "Core Modules Built" },
  { value: "2026", label: "Developer Journey Started" },
];

export function Stats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="px-4 max-w-5xl mx-auto -mt-10 md:-mt-16 mb-24 relative z-20">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="glass-card p-6 rounded-3xl text-center group hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 shadow-xl"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300 shadow-white/20 drop-shadow-md">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm font-medium text-white/50 group-hover:text-white/70 transition-colors leading-snug">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
