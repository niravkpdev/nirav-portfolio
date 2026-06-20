import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 px-4 max-w-5xl mx-auto scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h3>
        <div className="space-y-6 text-white/70 text-lg leading-relaxed relative z-10">
          <p>
            My journey into software development is unconventional. After earning a Bachelor's degree in Imaging Technology and spending three formative years living in the United Kingdom, I discovered my true calling in building digital experiences.
          </p>
          <p>
            The analytical foundation from my degree translates perfectly into engineering software. Today, my focus is entirely on modern web technologies—specifically React, JavaScript, Supabase, Tailwind CSS, and Framer Motion—to craft intuitive, premium user interfaces.
          </p>
          <p>
            Currently, I am developing Trinetr Business Suite, leveraging these tools to build a comprehensive SaaS application that solves real-world business challenges through clean design and robust architecture.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
