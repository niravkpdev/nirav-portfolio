import { motion } from "framer-motion";

const skills = [
  { category: "Core Frontend", items: ["React", "JavaScript", "HTML5 & CSS3"] },
  { category: "Design & Animation", items: ["Tailwind CSS", "Framer Motion"] },
  { category: "Backend as a Service", items: ["Supabase", "Firebase"] },
  { category: "Tools & Deployment", items: ["Git & GitHub", "Vercel"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4 max-w-5xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h3>
        <p className="text-white/60">The technologies I use to build premium experiences.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl group hover:border-white/20 transition-colors"
          >
            <h4 className="text-lg font-semibold mb-6 text-white/90">{skillGroup.category}</h4>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map(item => (
                <span 
                  key={item} 
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
