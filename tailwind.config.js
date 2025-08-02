/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#fdf6f0",
        darkBg: "#1e1e1e",
        primary: "#f4a261",
        secondary: "#2a9d8f",
        textLight: "#1f1f1f",
        textDark: "#fdfdfd"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem"
      }
    },
  },
  plugins: [],
}
