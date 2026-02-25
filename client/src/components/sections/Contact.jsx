import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured yet. Please add your EmailJS keys to the .env file.");
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Rajkumar Anbazhagan",
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-blue-500" />, label: "Email", value: "rajkumaranbazhagan98@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajkumaranbazhagan98@gmail.com" },
    { icon: <FaLinkedin className="text-blue-600" />, label: "LinkedIn", value: "rajkumar-anbazhagan", href: "https://www.linkedin.com/in/rajkumar-anbazhagan-425519297?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { icon: <FaGithub className="text-slate-800" />, label: "GitHub", value: "github.com/rajkumar-tech-2002", href: "https://github.com/rajkumar-tech-2002" },
    { icon: <FaMapMarkerAlt className="text-pink-500" />, label: "Location", value: "Erode, Tamil Nadu, India", href: "https://www.google.com/maps/search/Nandha+Engineering+College+Erode+Perundurai+Main+Road+Vaikkaalmedu" },
  ];

  return (
    <section id="contact" className="py-32 px-6 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full mb-12"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, border: "1px solid rgba(59,130,246,0.2)" }}
                className="bento-card p-8 group flex flex-col justify-between hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-white">
                  <div className="text-2xl text-slate-400 group-hover:text-blue-600 transition-colors">
                    {info.icon}
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-2 group-hover:text-blue-500 transition-colors">{info.label}</p>
                  <p className="text-lg font-black text-slate-800 break-words">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* CTA/Status Bento */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sm:col-span-2 bento-card p-10 bg-blue-50/50 border-blue-100 flex flex-col md:flex-row justify-between items-center gap-10 shadow-sm"
            >
              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-3xl font-black text-slate-900">Looking for a <span className="text-gradient">freelancer</span>?</h4>
                <p className="text-slate-500 font-medium text-sm max-w-sm">I am currently available for new projects and collaborations. Let's make something amazing together.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-widest text-green-500 uppercase">Available Now</span>
              </div>
            </motion.div>
          </div>

          {/* Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bento-card p-12 bg-white relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.03)] border-blue-100"
          >
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4 group/input">
                  <label htmlFor="name" className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1 transition-colors group-focus-within/input:text-blue-600">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-blue-600 transition-all text-xl font-bold text-slate-900 placeholder-slate-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-4 group/input">
                  <label htmlFor="email" className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1 transition-colors group-focus-within/input:text-blue-600">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-blue-600 transition-all text-xl font-bold text-slate-900 placeholder-slate-300"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-4 group/input">
                <label htmlFor="message" className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1 transition-colors group-focus-within/input:text-blue-600">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 focus:outline-none focus:border-blue-600 transition-all text-lg font-medium text-slate-700 placeholder-slate-300 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-premium w-full py-5 text-lg font-black tracking-widest uppercase group/btn ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <FaPaperPlane className="text-sm group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                )}
              </button>
            </form>

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 blur-[100px] rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/40 blur-[100px] rounded-full z-0 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
