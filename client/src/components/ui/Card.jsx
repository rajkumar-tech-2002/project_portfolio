import { motion } from "framer-motion";

const Card = ({ children, className = "", ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/90 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
