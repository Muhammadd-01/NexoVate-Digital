import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// ================================================
// FADE IN WHEN VISIBLE
// ================================================
export const FadeInWhenVisible = ({ children, delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// SLIDE IN FROM DIRECTION
// ================================================
export const SlideIn = ({ children, direction = "left", delay = 0, duration = 0.6 }) => {
  const directions = {
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
    up: { x: 0, y: 80 },
    down: { x: 0, y: -80 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// GRADIENT TEXT WITH ANIMATION
// ================================================
export const GradientText = ({ children, className = "", animate = true }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-nexovate-blue-400 via-accent-cyan to-accent-purple bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
      initial={animate ? { opacity: 0, backgroundPosition: "0% 50%" } : {}}
      animate={animate ? { opacity: 1, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
      transition={animate ? {
        opacity: { duration: 0.5 },
        backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" }
      } : {}}
    >
      {children}
    </motion.span>
  );
};

// ================================================
// STAGGER CONTAINER FOR CHILDREN
// ================================================
export const StaggerContainer = ({ children, delay = 0, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// TEXT REVEAL ANIMATION
// ================================================
export const TextReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

// ================================================
// MAGNETIC BUTTON EFFECT
// ================================================
export const MagneticButton = ({ children, className = "", strength = 0.3 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// FLOATING ELEMENT
// ================================================
export const FloatingElement = ({ children, className = "", duration = 6, distance = 20 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// GLOW ON HOVER
// ================================================
export const GlowOnHover = ({ children, className = "", glowColor = "rgba(14, 165, 233, 0.5)" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// SCALE ON SCROLL
// ================================================
export const ScaleOnScroll = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// ROTATING BORDER
// ================================================
export const RotatingBorder = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative p-[2px] rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(90deg, #0ea5e9, #a855f7, #22d3ee, #0ea5e9)",
        backgroundSize: "300% 100%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="bg-gray-900 rounded-2xl h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

// ================================================
// PARALLAX WRAPPER
// ================================================
export const ParallaxWrapper = ({ children, className = "", speed = 0.5 }) => {
  const y = useMotionValue(0);

  return (
    <motion.div
      className={className}
      style={{ y }}
      whileInView={{
        y: [0, -20 * speed],
      }}
      transition={{
        duration: 1,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// HOVER LIFT CARD
// ================================================
export const HoverLiftCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(14, 165, 233, 0.2)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// COUNTER ANIMATION
// ================================================
export const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(value);
          const incrementTime = (duration * 1000) / end;
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
          }, incrementTime);
        }
      }}
    >
      {count}{suffix}
    </motion.span>
  );
};

// ================================================
// ICON BOUNCE
// ================================================
export const IconBounce = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: [0, -8, 0],
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// PULSE RING
// ================================================
export const PulseRing = ({ children, className = "", color = "rgba(14, 165, 233, 0.5)" }) => {
  return (
    <div className={`relative inline-flex ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      {children}
    </div>
  );
};

// ================================================
// TEXT SCRAMBLE EFFECT
// ================================================
export const TextScramble = ({ text, className = "", duration = 2 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <motion.span
      className={`font-mono ${className}`}
      onMouseEnter={scramble}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={scramble}
    >
      {displayText}
    </motion.span>
  );
};

// ================================================
// SPLIT TEXT REVEAL - LETTER BY LETTER
// ================================================
export const SplitTextReveal = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-2">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -90 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    delay: delay + wordIndex * 0.1 + charIndex * 0.03,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// ================================================
// WAVE TEXT - WAVY HOVER EFFECT
// ================================================
export const WaveText = ({ text, className = "" }) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default"
          whileHover={{
            y: -10,
            color: "#0ea5e9",
            transition: { duration: 0.2 },
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

// ================================================
// BLUR REVEAL - BLUR TO CLEAR
// ================================================
export const BlurReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// SPOTLIGHT CARD - FOLLOW MOUSE
// ================================================
export const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

// ================================================
// PARALLAX IMAGE
// ================================================
export const ParallaxImage = ({ src, alt, className = "", speed = 0.5 }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const scrolled = window.innerHeight - rect.top;
    setOffset(scrolled * speed * 0.1);
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y: offset }}
      />
    </div>
  );
};

// ================================================
// REVEAL ON SCROLL - MASK REVEAL
// ================================================
export const RevealOnScroll = ({ children, className = "", direction = "up" }) => {
  const directions = {
    up: { y: "100%" },
    down: { y: "-100%" },
    left: { x: "100%" },
    right: { x: "-100%" },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ ...directions[direction], opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// ================================================
// ELASTIC BUTTON
// ================================================
export const ElasticButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

// ================================================
// GRADIENT FOLLOW BUTTON
// ================================================
export const GradientFollowButton = ({ children, className = "" }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, #0ea5e9, #a855f7)`,
      }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// ================================================
// MARQUEE TEXT
// ================================================
export const MarqueeText = ({ text, className = "", speed = 30 }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
      </motion.div>
    </div>
  );
};

