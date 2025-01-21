/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "growhub-red": {
          50: "var(--growhub-red-50)",
          100: "var(--growhub-red-100)",
          200: "var(--growhub-red-200)",
          300: "var(--growhub-red-300)",
          400: "var(--growhub-red-400)",
          500: "var(--growhub-red-500)",
          600: "var(--growhub-red-600)",
          700: "var(--growhub-red-700)",
          800: "var(--growhub-red-800)",
          900: "var(--growhub-red-900)",
          950: "var(--growhub-red-950)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

