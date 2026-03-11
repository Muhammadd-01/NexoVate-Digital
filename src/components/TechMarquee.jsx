import { motion } from "framer-motion";

const TechMarquee = ({ items }) => {
    // Duplicate the items array to create a seamless loop
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="relative w-full py-10 overflow-hidden bg-black/5 border-y border-white/5">
            {/* Side Vignette/Fade Effects */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                            rotateY: 10,
                            rotateX: -5,
                            z: 50
                        }}
                        className="flex items-center gap-4 px-8 py-4 mx-4 rounded-2xl glass-strong border border-white/5 group transition-all duration-300 cursor-pointer"
                        style={{
                            "--hover-color": item.color,
                        }}
                    >
                        {/* Hover Border Glow - using CSS variable for performance */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--hover-color)] transition-colors duration-500 pointer-events-none opacity-50" />

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-[var(--hover-color)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none" />

                        <motion.div
                            className="relative p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors"
                            style={{ color: item.color }}
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        >
                            <item.icon className="w-8 h-8 filter drop-shadow-sm group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" />
                        </motion.div>
                        <span className="relative text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300">
                            {item.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
