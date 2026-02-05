import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

// PREMIUM TECH CURSOR - Fast & Responsive
export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [cursorText, setCursorText] = useState('');

    // Fast spring for immediate response
    const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    // Slightly slower spring for trail
    const trailConfig = { damping: 30, stiffness: 200, mass: 0.5 };
    const trailX = useSpring(0, trailConfig);
    const trailY = useSpring(0, trailConfig);

    const handleMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        trailX.set(e.clientX);
        trailY.set(e.clientY);
        setIsVisible(true);
    }, [cursorX, cursorY, trailX, trailY]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', () => setIsVisible(true));
        document.addEventListener('mouseleave', () => setIsVisible(false));
        document.addEventListener('mousedown', () => setIsClicking(true));
        document.addEventListener('mouseup', () => setIsClicking(false));

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    // Track hover on interactive elements
    useEffect(() => {
        const handleHoverStart = (e) => {
            setIsHovering(true);
            const text = e.target.getAttribute('data-cursor');
            if (text) setCursorText(text);
        };
        const handleHoverEnd = () => {
            setIsHovering(false);
            setCursorText('');
        };

        const addListeners = () => {
            const elements = document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-hover, [data-cursor]');
            elements.forEach(el => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        addListeners();
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Main cursor - Tech crosshair design */}
            <motion.div
                className="fixed pointer-events-none z-[9999]"
                style={{ x: cursorX, y: cursorY }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                        rotate: isHovering ? 45 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                    {/* Tech crosshair */}
                    <div className={`relative ${isHovering ? 'w-8 h-8' : 'w-5 h-5'} transition-all duration-150`}>
                        {/* Center dot */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 ${isHovering ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />

                        {/* Crosshair lines */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-cyan-400" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-cyan-400" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400" />

                        {/* Corner brackets */}
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400" />
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-cyan-400" />
                        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-l border-b border-cyan-400" />
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-cyan-400" />
                    </div>

                    {/* Cursor text label */}
                    <AnimatePresence>
                        {cursorText && (
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-mono text-cyan-400 whitespace-nowrap bg-black/80 px-2 py-1 rounded"
                            >
                                {cursorText}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* Trail ring */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                style={{ x: trailX, y: trailY }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: isHovering ? 1.8 : 1,
                        opacity: isVisible ? 0.6 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                    <div className="w-8 h-8 rounded-full border border-cyan-500/50">
                        {/* Rotating ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-t-2 border-cyan-400"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Subtle glow */}
            <motion.div
                className="fixed pointer-events-none z-[9997] mix-blend-screen"
                style={{ x: trailX, y: trailY }}
                animate={{ opacity: isVisible ? 0.15 : 0 }}
            >
                <div className="w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-2xl" />
            </motion.div>

            {/* Hide default cursor */}
            <style>{`
        * { cursor: none !important; }
        @media (hover: none) and (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}</style>
        </>
    );
}

// SCROLL TO TOP with progress ring
export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = height > 0 ? (scrolled / height) * 100 : 0;

            setScrollProgress(progress);
            setIsVisible(scrolled > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group cursor-hover"
                    data-cursor="Top"
                >
                    {/* Progress ring */}
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                        <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                        <motion.circle
                            cx="28" cy="28" r="24" fill="none"
                            stroke="url(#scrollGradient)" strokeWidth="3" strokeLinecap="round"
                            strokeDasharray={2 * Math.PI * 24}
                            strokeDashoffset={2 * Math.PI * 24 * (1 - scrollProgress / 100)}
                        />
                        <defs>
                            <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-shadow">
                            <motion.svg
                                className="w-5 h-5 text-white"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </motion.svg>
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

// PAGE TRANSITION LOADER
export function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
        >
            <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
                <div className="w-16 h-16 rounded-full border-2 border-cyan-500/20" />
                <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400" />
            </motion.div>
        </motion.div>
    );
}

export default { CustomCursor, ScrollToTop, PageLoader };
