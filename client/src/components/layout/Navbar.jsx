import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pt-6 px-6 pointer-events-none`}
    >
      <div className="container mx-auto max-w-7xl flex justify-center items-center pointer-events-auto">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className={`flex items-center gap-10 px-8 py-4 rounded-[2rem] transition-all duration-500 ${isScrolled
            ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-white/40"
            : "bg-white/10 backdrop-blur-md border border-white/20"
            }`}
        >
          {/* Logo */}
          <motion.div
            className="cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/assets/images/rk-logo-3.png"
              alt="RK Logo"
              className="h-10 md:h-12 w-auto"
            />
            {/* className="h-10 md:h-12 w-auto object-contain logo-navy" */}
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 hover:text-blue-600 transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Connect Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => window.location.href = '#contact'}
              className="py-2.5 px-6 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all text-[10px] font-bold tracking-widest uppercase text-blue-600"
            >
              Let's talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-slate-400 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu - Refined Modern Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white p-10 flex flex-col pointer-events-auto md:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-20">
              <img
                src="/assets/images/rk-logo-3.png"
                alt="RK Logo"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-all shadow-sm"
              >
                <HiX size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 pl-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-baseline gap-4"
                >
                  <span className="text-[10px] font-black text-blue-500/40 group-hover:text-blue-600 transition-colors">
                    0{index + 1}
                  </span>
                  <span className="text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-all uppercase tracking-[0.1em]">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pb-10"
            >
              <button
                onClick={() => { setIsMobileMenuOpen(false); window.location.href = '#contact'; }}
                className="w-full py-5 rounded-[2rem] bg-blue-600 text-white shadow-[0_20px_40px_rgba(37,99,235,0.25)] text-[10px] font-black tracking-[0.2em] uppercase hover:bg-blue-700 transition-all"
              >
                Start a project
              </button>

              <div className="mt-10 pt-10 border-t border-slate-100">
                <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Available for new opportunities</p>
                <p className="text-slate-500 text-sm mt-2 font-medium">rajkumaranbazhagan@email.com</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
