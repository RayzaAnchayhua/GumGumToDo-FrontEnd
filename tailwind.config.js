/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acme: ['"Acme"', "sans-serif"],
      },
      colors: {
        primary: "#F8DE3C",
        "one-piece-color": "#C8472C",
      },
    },
    plugins: [],
  },
};
