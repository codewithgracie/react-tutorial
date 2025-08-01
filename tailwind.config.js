/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: "#10b981",
        info: "#3b82f6",
        error: "#ef4444",
        lightgray: "#f59e0b",
        primary: {
          DEFAULT: "#6366f1",
          focus: "#4338ca",
        },
        accent: {
          DEFAULT: "#5f5af6",
          focus: "#4d47f5"
        },
        navy: {
          50: "#e7e9ef", 
          100: "#c2c9d6",
          200: "#a5f3fc",
          300: "#697a9b",
          400: "#5c6b8a",
          450: "#465675",
          500: "#384766",
          600: "#0891b2",
          700: "#26334d",
          800: "#202b40",
          900: "#192132",
        },
      }
    },
  },
  plugins: [],
}

