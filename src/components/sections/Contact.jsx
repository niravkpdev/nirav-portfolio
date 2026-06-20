import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 max-w-3xl mx-auto text-center relative z-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 rounded-[3rem]"
      >
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8">
          <Mail className="w-8 h-8 text-white/80" />
        </div>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Let's work together</h3>
        <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          I'm currently available for freelance work and new opportunities.
          Whether you have a project in mind or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:hello@example.com"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-black bg-white rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all"
        >
          Say Hello
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
