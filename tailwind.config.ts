import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      black: {
        DEFAULT: "#3c3c3c",
        600: "#232323",
        700: "#191919",
        800: "#101010",
        900: "#000",
      },
      "black-transparent": "rgba(19, 19, 19, 0.6)",
      white: {
        100: "#fff",
        200: "#fefefe",
        DEFAULT: "#f5f5f5",
      },
      blue: {
        100: "#b6cbde",
        DEFAULT: "#094e86",
        600: "#3D3BFF",
        800: "#2d2a3a",
      },
      red: "#bc4749",
      "white-transparent": "rgba(255, 255, 255, 0.3)",
      toxic: "#d3ff24",
      gray: {
        300: "#ddd",
        DEFAULT: "#c4c4c4",
      },
    },
    fontFamily: {
      urbanist: "'Urbanist', sans-serif",
    },
    borderWidth: {
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "920px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      backdropBlur: {
        lg: "5px",
      },
    },
  },
  plugins: [],
};
export default config;
