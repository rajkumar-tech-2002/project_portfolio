import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { projects } from "../../data/projects.jsx";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative bento-card p-6 rounded-[2.5rem] group transition-all duration-500 overflow-hidden flex-shrink-0 w-[85vw] md:w-[450px]"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8 relative group/image border border-slate-100 shadow-sm">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover/image:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div className="flex space-x-4">
              <a href={project.github} className="w-12 h-12 glass hover:bg-white text-blue-600 rounded-2xl transition-all flex items-center justify-center shadow-lg">
                <FaGithub size={20} />
              </a>
              <a href={project.demo} className="w-12 h-12 glass hover:bg-white text-blue-600 rounded-2xl transition-all flex items-center justify-center shadow-lg">
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-2 flex-grow">
          <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{project.title}</h3>
          <p className="text-slate-500 font-medium leading-relaxed text-sm group-hover:text-slate-700 transition-colors line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-100 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 pt-8 mt-auto px-2">
          <button className="text-blue-600 text-xs font-black tracking-widest flex items-center gap-2 uppercase group-hover:translate-x-1 transition-transform">
            Live Demo <HiArrowRight />
          </button>
          <button className="text-slate-300 hover:text-slate-500 text-xs font-black tracking-widest flex items-center gap-2 uppercase transition-all">
            Details
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const innerCarousel = useRef();
  const x = useMotionValue(0);

  useEffect(() => {
    if (innerCarousel.current && carousel.current) {
      setWidth(innerCarousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const scroll = (direction) => {
    const scrollAmount = 480;
    const currentX = x.get();
    let targetX = direction === 'left' ? currentX + scrollAmount : currentX - scrollAmount;

    // Constraints
    if (targetX > 0) targetX = 0;
    if (targetX < -width) targetX = -width;

    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  const projectsList = projects;

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden bg-slate-50 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
            >
              Recent <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "160px" }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full"
            />
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              aria-label="Previous Project"
            >
              <HiChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              aria-label="Next Project"
            >
              <HiChevronRight size={24} />
            </button>
          </div>
        </div>

        <motion.div
          ref={carousel}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div
            ref={innerCarousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-8"
          >
            {projectsList.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </motion.div>

        {/* Swipe/Drag Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="px-6 py-3 rounded-full bg-white border border-slate-100 shadow-sm text-[10px] font-black tracking-widest text-slate-400 uppercase flex items-center gap-3">
            <span>Drag or use arrows to explore</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center gap-1"
            >
              <HiChevronLeft />
              <HiChevronRight />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
