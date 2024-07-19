/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About: ["Playfair Display", "serif"]
      },
      colors: {
        AAprimary: "#DDD0C8", // Beige
        AAsecondary: "#323232", // Dark Grey
        AAtertiary: "#F5F5F5", // Light Grey for contrast
        ResumeButtonHover: "#2E2E2E", // Slightly darker grey for hover effect
        MobileNavBarColor: "#323232", // Dark Grey
        StartupBackground: "#DDD0C8", // Beige
      },
    },
  },
  plugins: [],
  variants: {
    scrollbar: ["rounded"],
  },
};
