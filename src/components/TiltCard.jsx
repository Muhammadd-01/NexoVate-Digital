import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const TiltCard = ({
    children,
    className = "",
    tiltAmount = 15,
    glareEnabled = true,
    scaleOnHover = 1.02
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springConfig = { stiffness: 300, damping: 30 };
    const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), springConfig);
    const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), springConfig);

    // Glare effect position
    const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
    const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
    const glareOpacity = useSpring(0, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width;
        const yPos = (e.clientY - rect.top) / rect.height;
        x.set(xPos);
        y.set(yPos);
        if (glareEnabled) glareOpacity.set(0.15);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
        glareOpacity.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            whileHover={{ scale: scaleOnHover }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 0.2 }}
        >
            {/* Card Content */}
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>

            {/* Glare Overlay */}
            {glareEnabled && (
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
                    style={{
                        opacity: glareOpacity,
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                    }}
                />
            )}
        </motion.div>
    );
};

export default TiltCard;

// ================================================
// SIMPLE 3D CARD VARIANT
// ================================================
export const Card3D = ({
    children,
    className = "",
    hoverGlow = true
}) => {
    return (
        <TiltCard
            className={`
        bg-gradient-to-br from-white/10 to-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        overflow-hidden
        ${hoverGlow ? "hover:shadow-glow" : ""}
        ${className}
      `}
            tiltAmount={10}
            scaleOnHover={1.03}
        >
            {children}
        </TiltCard>
    );
};

// ================================================
// SERVICE CARD WITH 3D EFFECT
// ================================================
export const ServiceCard3D = ({
    icon: Icon,
    title,
    description,
    className = ""
}) => {
    return (
        <TiltCard
            className={`
        p-6 
        bg-gradient-to-br from-white/10 to-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl
        cursor-pointer
        ${className}
      `}
            tiltAmount={8}
            scaleOnHover={1.02}
        >
            <div className="flex flex-col gap-4">
                {Icon && (
                    <div className="w-12 h-12 rounded-xl bg-nexovate-blue-600/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-nexovate-blue-400 icon-glow" />
                    </div>
                )}
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
        </TiltCard>
    );
};

// ================================================
// PRICING CARD WITH 3D EFFECT
// ================================================
export const PricingCard3D = ({
    name,
    price,
    features,
    cta,
    popular = false,
    onClick,
    className = ""
}) => {
    return (
        <TiltCard
            className={`
        relative
        p-8
        bg-gradient-to-br from-white/10 to-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-3xl
        ${popular ? "ring-2 ring-nexovate-blue-500 shadow-glow" : ""}
        ${className}
      `}
            tiltAmount={6}
            scaleOnHover={popular ? 1.05 : 1.03}
        >
            {popular && (
                <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-nexovate-blue-500 to-accent-purple rounded-full text-xs font-bold text-white"
                    animate={{
                        boxShadow: ["0 0 10px rgba(14,165,233,0.5)", "0 0 20px rgba(14,165,233,0.8)", "0 0 10px rgba(14,165,233,0.5)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Popular
                </motion.div>
            )}

            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <div className="text-4xl font-bold gradient-text">{price}</div>
            </div>

            <ul className="space-y-3 mb-8">
                {features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="text-nexovate-blue-400">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <motion.button
                onClick={onClick}
                className={`
          w-full py-3 rounded-xl font-semibold transition-all
          ${popular
                        ? "bg-gradient-to-r from-nexovate-blue-500 to-accent-purple text-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }
        `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {cta}
            </motion.button>
        </TiltCard>
    );
};
