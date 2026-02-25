import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            Behind the <span className="text-gradient">Code</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full mb-12"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:grid-rows-2 auto-rows-min">

          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-4 bento-card flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl">
                <FaCode />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Software Engineer</h3>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                I am a passionate <span className="text-blue-600 font-bold">Software Engineer</span> currently working at
                <span className="text-indigo-600 font-bold"> Nandha Engineering College</span>.
                My focus is on creating responsive, high-performance web applications that provide seamless user experiences.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                Driven by a constant curiosity for new technologies and a desire to solve complex problems through clean and efficient code.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="py-2 px-5 rounded-full border border-blue-100 bg-blue-50/50 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-black tracking-widest text-blue-700">REACT</span>
              </div>
              <div className="py-2 px-5 rounded-full border border-purple-100 bg-purple-50/50 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-xs font-black tracking-widest text-purple-700">TAILWIND</span>
              </div>
              <div className="py-2 px-5 rounded-full border border-indigo-100 bg-indigo-50/50 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-black tracking-widest text-indigo-700">NODE.JS</span>
              </div>
            </div>
          </motion.div>

          {/* Location/Map Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 bento-card group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 text-xl">
                <FaMapMarkerAlt />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Based in</h4>
              <p className="text-slate-500 text-sm font-medium">Erode, Tamil Nadu, India</p>
            </div>
            <div className="mt-8 relative overflow-hidden rounded-2xl aspect-[4/3] opacity-80 group-hover:opacity-100 transition-all duration-700 border border-slate-100">
              <img
                src="/assets/images/pc-image.jpg"
                alt="Programming"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
            </div>
          </motion.div>

          {/* Experience/Education Card (Combined for Bento) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 bento-card group h-full flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 text-xl">
                <FaGraduationCap />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">BE CSE</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Nandha Engineering College <br />
                <span className="text-blue-500/30 font-black uppercase tracking-widest text-[10px]">2020 — 2024</span>
              </p>
            </div>
            <div className="mt-10 group-hover:translate-x-2 transition-transform duration-300">
              <button onClick={() => window.location.href = '#education'} className="text-blue-600 text-xs font-black tracking-widest flex items-center gap-2 uppercase">
                View Details <HiArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Contact/Connect Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 lg:col-span-4 bento-card relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-4 text-slate-900">Let's <span className="text-gradient">build</span> something extraordinary.</h4>
              <p className="text-slate-500 font-medium mb-10 max-w-md">I'm always open to new ideas and collaborations. Don't hesitate to reach out.</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rajkumaranbazhagan98@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white hover:border-blue-200 transition-all duration-300 shadow-sm"
                >
                  <FaEnvelope size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajkumar-anbazhagan-425519297?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white hover:border-blue-200 transition-all duration-300 shadow-sm"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/rajkumar-tech-2002/project_portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white hover:border-blue-200 transition-all duration-300 shadow-sm"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-600/10 blur-[80px] rounded-full z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
