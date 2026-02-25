import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "BE Computer Science and Engineering",
      college: "Nandha Engineering College",
      duration: "2020 – 2024",
      description: "Focused on core computer science subjects, including Algorithms, Data Structures, Software Engineering, and Database Management Systems.",
    }
  ];

  return (
    <section id="education" className="py-32 px-6 overflow-hidden bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            Academic <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full mb-12"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bento-card p-12 md:p-16 relative overflow-hidden group hover:bg-white transition-all duration-500"
            >
              {/* Decorative background icon */}
              <div className="absolute top-10 right-10 text-slate-100/50 group-hover:text-blue-50 transition-colors duration-1000">
                <FaGraduationCap size={240} />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
                <div className="w-20 h-20 rounded-[2rem] bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-700 shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
                  <FaGraduationCap size={40} />
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h3 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">{edu.degree}</h3>
                    <span className="font-black text-[10px] tracking-widest text-slate-400 uppercase py-1 px-4 rounded-full border border-slate-100 bg-slate-50/50">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-xl font-bold text-blue-600/80 tracking-tight">{edu.college}</p>

                  <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-medium">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
