import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3590F3",
      },
      animation: {
        "slide-in-left": "slide-in-left 1s ease-out",
        "slide-in-right": "slide-in-right 1s ease-out",
      },
      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" }, // Ensure opacity is a string
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" }, // Ensure opacity is a string
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      condensed: ["'Roboto Condensed'", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
