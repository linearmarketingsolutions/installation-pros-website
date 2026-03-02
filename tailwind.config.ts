import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#CC0000",
          black: "#0A0A0A",
          dark: "#1A1A1A",
          gray: "#F5F5F5",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        counter: "counter 2s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px #CC0000" },
          to: {
            boxShadow: "0 0 25px #CC0000, 0 0 50px rgba(204, 0, 0, 0.4)",
          },
        },
      },
      boxShadow: {
        "brand-glow": "0 0 25px rgba(204, 0, 0, 0.4)",
        "brand-glow-lg": "0 0 40px rgba(204, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
