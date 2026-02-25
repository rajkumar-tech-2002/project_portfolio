import { motion } from "framer-motion";

const SectionTitle = ({ title, highlight }) => {
    return (
        <div className="flex flex-col items-center text-center mb-24">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
            >
                {title} <span className="text-gradient">{highlight}</span>
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "160px" }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full"
            />
        </div>
    );
};

export default SectionTitle;
