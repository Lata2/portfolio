/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Cabinet Grotesk'", "'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        gold: {
          100: "#f5edd6",
          200: "#e8d5a3",
          300: "#d4b87a",
          400: "#c8a96e",
          500: "#b8933a",
          600: "#9a7a2e",
        },
        void: {
          50: "#f0f0f8",
          100: "#c8c8d8",
          200: "#9999b8",
          300: "#666688",
          400: "#3a3a58",
          500: "#1a1a2e",
          600: "#111118",
          700: "#0a0a0f",
          800: "#060609",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s infinite",
        "border-flow": "borderFlow 3s ease-in-out infinite",
        typewriter: "typewriter 3s steps(30) infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        borderFlow: {
          "0%, 100%": { borderColor: "rgba(200,169,110,0.3)" },
          "50%": { borderColor: "rgba(200,169,110,0.8)" },
        },
      },
    },
  },
  plugins: [],
};
