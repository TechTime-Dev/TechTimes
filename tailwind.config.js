/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#fac564",
        secondary: "#2563eb",
        dark: "#121618",
        light: "#f9fafb",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        ptsans: ["PT Sans", "sans-serif"],
      },
      screens: {
        sm: "576px", // => @media (min-width: 576px) { ... }
        md: "768px", // => @media (min-width: 768px) { ... }
        lg: "1024px", // => @media (min-width: 1024px) { ... }
        xl: "1280px", // => @media (min-width: 1280px) { ... }
        "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      },
    },
  },
  darkMode: false,
  plugins: [require("flowbite/plugin")],
};
