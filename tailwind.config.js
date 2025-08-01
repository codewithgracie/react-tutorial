/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
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
        }
      }
    },
  },
  plugins: [],
}

