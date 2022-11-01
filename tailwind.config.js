/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1100px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        nav: { max: "900px" },
      },
      colors: {
        main: "#2E2E2E",
        secondary: "#191919",
        "benefits-green": "rgba(0, 221, 168, 0.5)",
        "benefits-blue": "rgba(0, 88, 221, 0.6)",
        "benefits-red": "rgba(207, 41, 41, 0.6)",
      },
      gridAutoColumns: {
        aa: "grid-template-columns: repeat(12, minmax(300px, 1fr))",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        marquee: "marquee 20s infinite linear",
        marquee2: "marquee2 20s infinite linear",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("all-child", "& *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
