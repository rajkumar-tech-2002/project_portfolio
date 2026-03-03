import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-6 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/images/rk-logo-3.png"
                alt="RK Logo"
                className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              Software Engineer passionate about building modern, pixel-perfect web applications that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">Navigation</h4>
              <ul className="flex flex-col gap-2">
                {["Home", "About", "Projects", "Skills", "Experience"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">Socials</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: "https://github.com/rajkumar-tech-2002" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/rajkumar-anbazhagan-425519297?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                  { icon: FaEnvelope, href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajkumaranbazhagan98@gmail.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Rajkumar Anbazhagan. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <span>Made with</span>
            <FaHeart className="text-red-500/80" />
            <span>by Rajkumar Anbazhagan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
