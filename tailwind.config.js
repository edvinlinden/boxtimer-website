/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.1)",
      },
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
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: false,
    themes: [
      {
        boxtimer: {
          primary: "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#18181b",
          "base-100": "#fafafa",
          "base-content": "#71717a",
        },
      },
    ],
  },
};
