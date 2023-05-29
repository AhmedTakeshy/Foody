/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/src/assets/banner.jpg)",
      },
      colors: {
        primary: "#F4A460",
        secondary: "#F1823B",
        custom_bk: "#333",
      },
      keyframes: {
        slide_down: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -3rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, 0)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        slide_down: "slide_down 400ms ease-out forwards",
        rotate: "rotate 10s linear infinite",
      },
    },
  },
  plugins: [],
};
