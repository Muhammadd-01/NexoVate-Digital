/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "nexovate-blue": {
          50: "var(--nexovate-blue-50)",
          100: "var(--nexovate-blue-100)",
          200: "var(--nexovate-blue-200)",
          300: "var(--nexovate-blue-300)",
          400: "var(--nexovate-blue-400)",
          500: "var(--nexovate-blue-500)",
          600: "var(--nexovate-blue-600)",
          700: "var(--nexovate-blue-700)",
          800: "var(--nexovate-blue-800)",
          900: "var(--nexovate-blue-900)",
          950: "var(--nexovate-blue-950)",
        },
        accent: {
          purple: "#a855f7",
          cyan: "#22d3ee",
          pink: "#ec4899",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-premium": "linear-gradient(135deg, #0ea5e9 0%, #a855f7 50%, #22d3ee 100%)",
        "gradient-dark": "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        "mesh-gradient": `
          radial-gradient(at 40% 20%, hsla(200, 100%, 50%, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(280, 100%, 60%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(190, 100%, 50%, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(240, 100%, 60%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(200, 100%, 50%, 0.15) 0px, transparent 50%)
        `,
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
        "shimmer": "shimmer 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(14, 165, 233, 0.8), 0 0 60px rgba(14, 165, 233, 0.4)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow": "0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.2)",
        "glow-lg": "0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.3)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)",
        "inner-glow": "inset 0 0 20px rgba(14, 165, 233, 0.2)",
        "3d": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      },
      dropShadow: {
        "glow": "0 0 10px rgba(14, 165, 233, 0.5)",
        "glow-lg": "0 0 20px rgba(14, 165, 233, 0.7)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        "400": "400ms",
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
      },
    },
  },
  plugins: [],
};