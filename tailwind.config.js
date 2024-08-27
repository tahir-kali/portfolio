/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,,vue}",
  ],
  theme: {
   
    extend: {
      colors: {
        black:{
          900: "#282828",
          800: "#3f3f3f"
        }
      },
    },
  },
  plugins: [],
}

