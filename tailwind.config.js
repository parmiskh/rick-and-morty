import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json",
  ],
  theme: {
    extend: {
      colors: [
        {
          primary: ["#11B0C8"],
          Primary2: ["#42B4CA"],
          secondary: ["#BFDE42"],
          dark1: ["#1A1A1A"],
          darkest: ["#1E1E20"],
          darkGray: ["#313234"],
        },
      ],
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [flowbiteReact],
};
