/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      keyframes: {
        "hero-1": {
          "0%": { transform: "translate(50px, 100px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        "hero-2": {
          "0%": { transform: "translate(-50px, 100px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        "hero-fade-in": {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "button-pulse": {
          "0%": { "box-shadow": "0px 0px 0px 0px rgba(37,99,235,0.7)" },
          "50%": { "box-shadow": "0px 0px 0px 20px rgba(37,99,235,0)" },
          "100%": { "box-shadow": "0px 0px 0px 20px rgba(37,99,235,0)" },
        },
      },
      animation: {
        "hero-1": "hero-1 700ms ease-in-out",
        "hero-2": "hero-2 700ms ease-in-out",
        "hero-fade-in": "hero-fade-in 750ms ease-in-out",
        "fade-in": "fade-in 750ms ease-in-out forwards",
        "button-pulse": "button-pulse 4000ms ease-in infinite",
      },
      backgroundImage: {
        "topo-pattern": "url('/images/topo-pattern.svg')",
        "topo-pattern-dark": "url('/images/topo-pattern-dark.svg')",
      },
    },
  },
  plugins: [],
};
