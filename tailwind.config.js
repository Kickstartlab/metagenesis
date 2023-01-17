/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "100": "#090823",
      },
      black: {
        "100": "#010208",
      },
      white: {
        "100": "#fff",
        "50": "rgba(255, 255, 255, 0.8)"
      },
      pink: {
        "100": "#FFE7DB",
        "200": "#FA7436"
      },
      purple: {
        "50": "#75C3F6",
        "100": "#D10ED1",
        "200": "#10A3DA"
      },
    },
    fontFamily: {
      'orbitron': ["'Orbitron', sans-serif;"],
      'poppins': ["'Poppins', sans-serif;"],
    }
  },
  plugins: [],
}
