import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const journeySteps = [
  {
    title: "Imaging Technology Graduate",
    description: "Completed a Bachelor's degree in Imaging Technology, building a strong analytical and problem-solving foundation."
  },
  {
    title: "3 Years in the United Kingdom",
    description: "Lived in the UK for three years, gaining international exposure and adapting to different environments and cultures."
  },
  {
    title: "Transition into Software Development",
    description: "Developed a passion for modern web technologies and began focusing on React, JavaScript and user experience."
  },
  {
    title: "Building Trinetr Business Suite",
    description: "Currently developing Trinetr Business Suite, a modern SaaS platform for business management featuring inventory, customers, suppliers, employee management and reporting."
  },
  {
    title: "Growing as a Front-End Developer",
    description: "Continuously learning and improving in React, Supabase, Tailwind CSS, Framer Motion and modern UI design."
  },
  {
    title: "Future Goal – Full-Stack Developer",
    description: "Expanding knowledge into backend technologies and building scalable products with a focus on exceptional user experiences."
  }
];

export function JourneyTimeline() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate the height of the active line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-32 px-4 max-w-5xl mx-auto scroll-mt-24" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">My Journey</h3>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          An unconventional path from Imaging Technology to building modern software. 
          Every step has shaped my approach to problem-solving and design.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {/* Background Line */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full" />
        
        {/* Animated Active Line */}
        <motion.div 
          className="absolute left-[20px] md:left-1/2 top-4 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent md:-translate-x-1/2 rounded-full origin-top z-0"
          style={{ height: lineHeight }}
        />

        <div className="space-y-12 md:space-y-24">
          {journeySteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Node Glow & Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-black border-2 border-purple-400 relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-[8px] scale-[2.5]" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 w-full pl-12 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass-card p-6 md:p-8 rounded-[2rem] hover:border-white/20 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[40px] group-hover:bg-purple-500/10 transition-colors" />
                    
                    <h4 className="text-xl md:text-2xl font-bold mb-4 text-white/90 group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-white/60 leading-relaxed text-[15px] md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
