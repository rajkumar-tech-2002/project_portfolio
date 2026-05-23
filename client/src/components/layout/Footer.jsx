import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-14 px-6 border-t border-slate-100">

      <div className="container mx-auto max-w-7xl">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14">

          {/* Left Content */}
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

              Full Stack Developer focused on building scalable web applications,
              backend systems, and modern digital solutions for real-world platforms.

            </p>

          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">

            {/* Navigation */}
            <div className="space-y-5">

              <h4 className="text-xs font-black tracking-[0.2em] uppercase text-slate-900">

                Navigation

              </h4>

              <ul className="flex flex-col gap-3">

                {[
                  "Home",
                  "About",
                  "Projects",
                  "Skills",
                  "Experience",
                  "Contact"
                ].map((item) => (

                  <li key={item}>

                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-300 font-medium"
                    >

                      {item}

                    </a>

                  </li>

                ))}

              </ul>

            </div>

            {/* Socials */}
            <div className="space-y-5">

              <h4 className="text-xs font-black tracking-[0.2em] uppercase text-slate-900">

                Socials

              </h4>

              <div className="flex items-center gap-5">

                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/rajkumar-tech-2002"
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/rajkumar-anbazhagan-425519297"
                  },
                  {
                    icon: FaEnvelope,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajkumaranbazhagan98@gmail.com"
                  }
                ].map((social, index) => (

                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                  >

                    <social.icon size={20} />

                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-400 text-sm font-medium">

            © {new Date().getFullYear()} Rajkumar Anbazhagan. All rights reserved.

          </p>

          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">

            <span>

              Built and designed by Rajkumar Anbazhagan

            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;