import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#050816",
        surface: "#0B1023",
        accent: {
          DEFAULT: "#7C3AED",
          soft: "#A78BFA"
        },
        secondary: {
          DEFAULT: "#06B6D4",
          soft: "#67E8F9"
        }
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        xl2: "24px"
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.45)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.45)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(124,58,237,0.15), transparent 60%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(1.5deg)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", filter: "blur(40px)" },
          "50%": { opacity: "1", filter: "blur(60px)" }
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        blob: "blob 12s infinite ease-in-out"
      }
    }
  },
  plugins: []
};

export default config;
