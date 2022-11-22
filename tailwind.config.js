/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      seagreen: {
        "50": "#F5F9FF",
        "100": "#03E6B6",
        "200": "#00CEEA",
      },
      black: {
        "50": "#666",
        "100": "#222",
        "900": "#181F2B",
      },
      white: {
        "100": "#fff",
        "50": "#f5f5f5"
      },
      pink: {
        "100": "#FFE7DB",
        "200": "#FA7436"
      },
    },
    fontFamily: {
      'volkhov': ["'Volkhov', serif;"],
      'poppins': ["'Poppins', sans-serif;"],
    }
  },
  plugins: [],
}
