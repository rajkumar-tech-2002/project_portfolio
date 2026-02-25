import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HiArrowRight, HiDownload } from "react-icons/hi";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Full Stack Developer", "Creative Problem Solver"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 3000,
  });

  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white" />

        {/* Modern Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(at 0% 0%, hsla(220,100%,95%,1) 0, transparent 50%), 
                                 radial-gradient(at 50% 0%, hsla(260,100%,98%,1) 0, transparent 50%), 
                                 radial-gradient(at 100% 0%, hsla(210,100%,95%,1) 0, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Floating Glowing Orbs - Softer for light theme */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-50/50 blur-[100px] rounded-full pointer-events-none"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Profile Image with Ring Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", damping: 15 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden glass-dark">
            <img
              src="/assets/images/rk-6.png"
              alt="Rajkumar Anbazhagan"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border-2 border-dashed border-blue-500/20 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-blue-100 bg-blue-50/50 group cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="text-sm font-semibold text-blue-600/80">Available for Opportunities</span>
          <HiArrowRight className="text-xs text-blue-400 group-hover:translate-x-1 transition-transform" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tighter"
        >
          Welcome to my <span className="text-gradient">portfolio</span> <br />
          <span className="text-slate-900">Showcasing my</span> journey & expertise
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl font-medium mb-12 min-h-[40px]"
        >
          <span className="text-slate-500">I'm Rajkumar Anbazhagan, a </span>
          <span className="text-blue-600 font-bold">{text}</span>
          <Cursor cursorColor="#2563eb" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={() => window.location.href = '#projects'}
            className="btn-premium group w-full sm:w-auto"
          >
            Explore Projects
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="btn-primary-light group w-full sm:w-auto"
          >
            <HiDownload className="group-hover:translate-y-1 transition-transform" />
            Download Resume
          </button>
        </motion.div>

        {/* Social Proof/Skills Ticker style thing (optional but trending) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 pt-10 border-t border-slate-100 w-full hidden md:block"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 mb-8">Specialized in modern tech</p>
          <div className="flex justify-center items-center gap-12 text-slate-400/60 transition-all">
            {["React", "Node.js", "Tailwind", "MySQL", "JavaScript"].map((tech) => (
              <span key={tech} className="text-sm font-black tracking-widest hover:text-blue-500 cursor-default">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - trending style */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-slate-200 flex justify-center pt-2">
          <motion.div
            animate={{ height: [4, 12, 4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1 bg-blue-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
