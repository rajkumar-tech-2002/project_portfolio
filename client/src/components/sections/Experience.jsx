import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../data/experience.jsx";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-32 px-6 overflow-hidden bg-slate-50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            Work <span className="text-gradient">History</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full mb-12"
          />
        </div>

        <div ref={containerRef} className="relative space-y-24">
          {/* Animated Center Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200/50 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600"
            />
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot - Properly centered */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-white shadow-lg text-slate-300 group-hover:text-blue-500 transition-all duration-500 z-10 overflow-hidden">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className={`w-3 h-3 rounded-full ${exp.isCurrent ? "bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" : "bg-current grayscale group-hover:grayscale-0"}`}
                />
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bento-card p-10 group-hover:bg-white transition-all duration-500 ${exp.isCurrent ? "border-blue-200/60 shadow-[0_10px_40px_rgba(37,99,235,0.05)]" : ""}`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <h3 className={`text-2xl font-black ${exp.isCurrent ? "text-blue-600" : "text-slate-800"}`}>{exp.role}</h3>
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mt-1">{exp.company}</p>
                  </div>
                  <time className={`font-black text-[10px] tracking-widest uppercase py-1 px-3 rounded-full border transition-all ${exp.isCurrent ? "border-blue-200 bg-blue-50 text-blue-600" : "border-slate-100 bg-slate-50/50 text-slate-400"}`}>
                    {exp.duration}
                  </time>
                </div>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
