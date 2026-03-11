import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

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
                    className="fixed bottom-8 right-8 z-50 group"
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

export default { ScrollToTop, PageLoader };
