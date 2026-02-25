import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills.jsx";

const Skills = () => {

  return (
    <section id="skills" className="py-32 px-6 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            Core <span className="text-gradient">Stack</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full mb-12"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`bento-card ${category.bg} ${category.border} h-full flex flex-col justify-between hover:border-blue-200 transition-colors group`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">{category.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100 hover:border-blue-300 transition-all duration-300 group/skill shadow-sm"
                    >
                      <div className="text-3xl mb-3 group-hover/skill:scale-110 transition-transform duration-500">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-black tracking-widest text-slate-400 group-hover/skill:text-blue-600 uppercase text-center transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative background number */}
              <div className="absolute top-4 right-8 text-slate-200/40 text-8xl font-black italic pointer-events-none group-hover:text-blue-100/50 transition-colors">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
