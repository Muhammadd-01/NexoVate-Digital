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

// ================================================
// ANIMATED BORDER / SHINE CARD
// ================================================
export const AnimatedBorderCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated rotating gradient border */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #a855f7, #22d3ee, #0ea5e9)",
          backgroundSize: "300% 300%",
          animation: "gradient-shift 3s ease infinite",
        }}
      />
      <div className="relative rounded-2xl bg-black/90 backdrop-blur-sm z-10">
        {children}
      </div>
    </div>
  );
};

// ================================================
// GLOW PULSE CARD
// ================================================
export const GlowCard = ({ children, className = "", color = "blue" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const glowColors = {
    blue: "rgba(14,165,233,0.4)",
    purple: "rgba(168,85,247,0.4)",
    cyan: "rgba(34,211,238,0.4)",
    pink: "rgba(236,72,153,0.4)",
  };
  return (
    <motion.div
      className={`relative rounded-2xl ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        boxShadow: isHovered
          ? `0 0 40px ${glowColors[color]}, 0 0 80px ${glowColors[color]}`
          : "0 0 0px transparent",
      }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

// ================================================
// ANIMATED PROGRESS BAR
// ================================================
export const AnimatedProgressBar = ({ label, percentage, color = "from-nexovate-blue-400 to-accent-cyan", delay = 0 }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="text-sm font-bold text-nexovate-blue-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
};

// ================================================
// PULSING BADGE
// ================================================
export const PulsingBadge = ({ text, color = "bg-nexovate-blue-500" }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
      <span className="relative flex h-2.5 w-2.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${color}`}></span>
      </span>
      <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">{text}</span>
    </div>
  );
};

// ================================================
// SCROLL REVEAL TEXT (word by word)
// ================================================
export const ScrollRevealText = ({ text, className = "" }) => {
  const words = text.split(" ");
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.04 } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

// ================================================
// FLOATING BUBBLES (decorative bg element)
// ================================================
export const FloatingBubbles = ({ count = 6, className = "" }) => {
  const bubbles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    x: Math.random() * 100,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-gradient-to-br from-nexovate-blue-500/10 to-accent-purple/10 border border-white/5"
          style={{ width: b.size, height: b.size, left: `${b.x}%`, bottom: "-10%" }}
          animate={{ y: [0, -800], opacity: [0, 0.6, 0] }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

// ================================================
// ANIMATED TIMELINE ITEM
// ================================================
export const TimelineItem = ({ year, title, description, icon: Icon, index = 0 }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      className={`flex items-center gap-8 mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <span className="text-xs font-bold text-nexovate-blue-400 uppercase tracking-wider">{year}</span>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <p className="text-gray-400 mt-1 text-sm">{description}</p>
      </div>
      {/* Center dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <motion.div
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-nexovate-blue-600/30 to-accent-purple/30 border border-nexovate-blue-500/40 flex items-center justify-center"
          whileHover={{ scale: 1.15, rotate: 5 }}
        >
          {Icon && <Icon className="w-6 h-6 text-nexovate-blue-400" />}
        </motion.div>
        <div className="w-[2px] h-12 bg-gradient-to-b from-nexovate-blue-500/50 to-transparent mt-2" />
      </div>
      <div className="flex-1" />
    </motion.div>
  );
};

// ================================================
// SPARKLE EFFECT (decorative stars around element)
// ================================================
export const SparkleWrapper = ({ children, className = "" }) => {
  const sparkles = [
    { top: "-8px", left: "20%", size: 12, delay: 0 },
    { top: "10%", right: "-10px", size: 8, delay: 0.4 },
    { bottom: "10%", left: "-8px", size: 10, delay: 0.8 },
    { bottom: "-8px", right: "25%", size: 14, delay: 1.2 },
    { top: "40%", left: "-12px", size: 8, delay: 0.6 },
  ];
  return (
    <div className={`relative inline-block ${className}`}>
      {sparkles.map((s, i) => (
        <motion.svg
          key={i}
          style={{ position: "absolute", ...s, width: s.size, height: s.size }}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-nexovate-blue-400"
          animate={{ scale: [0, 1, 0], rotate: [0, 180, 360], opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: s.delay, repeat: Infinity, repeatDelay: 1 }}
        >
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </motion.svg>
      ))}
      {children}
    </div>
  );
};

// ================================================
// ANIMATED NUMBER TICKER
// ================================================
export const NumberTicker = ({ from = 0, to, suffix = "", prefix = "", duration = 2, delay = 0, className = "" }) => {
  const nodeRef = useRef(null);
  return (
    <motion.span
      className={className}
      ref={nodeRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {prefix}
      <motion.span>
        {to}{suffix}
      </motion.span>
    </motion.span>
  );
};

// ================================================
// GRADIENT BORDER BUTTON
// ================================================
export const GradientBorderButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative group ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Animated gradient border */}
      <span
        className="absolute inset-0 rounded-xl opacity-100"
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #a855f7, #22d3ee)",
          padding: "1.5px",
        }}
      />
      <span className="relative flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white group-hover:bg-black/80 transition-colors">
        {children}
      </span>
    </motion.button>
  );
};

// ================================================
// ROTATING GRADIENT RING (decorative)
// ================================================
export const RotatingRing = ({ size = 200, className = "" }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, #0ea5e9, #a855f7, #22d3ee, #0ea5e9)`,
          padding: "2px",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-black" />
      </motion.div>
    </div>
  );
};

// ================================================
// HOVER ZOOM IMAGE CARD
// ================================================
export const ZoomImageCard = ({ src, alt, title, description, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6"
        initial={{ y: 20, opacity: 0.8 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {title && <h3 className="text-xl font-bold text-white">{title}</h3>}
        {description && (
          <motion.p
            className="text-gray-300 text-sm mt-1"
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};
