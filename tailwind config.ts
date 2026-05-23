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
        surface: {
          body: "#121212",
          section: "#1a1a1a",
          card: "#222222",
          elevated: "#2a2a2a",
        },
        border: {
          DEFAULT: "#333333",
          light: "#3d3d3d",
        },
        red: {
          brand: "#e83030",
          dim: "rgba(232, 48, 48, 0.12)",
        },
        blue: {
          brand: "#2563eb",
          light: "#60a5fa",
          dim: "rgba(37, 99, 235, 0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
