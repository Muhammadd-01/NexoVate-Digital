/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "growhub-red": "#FF0000",
        "growhub-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
}

