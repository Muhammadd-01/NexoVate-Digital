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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}