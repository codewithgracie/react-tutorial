/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',       // blue for buttons, tags
        success: '#10B981',       // green for status badges
        background: '#F3F4F6',    // light background (cards, page)
        border: '#E5E7EB',        // borders, dividers
        text: {
          DEFAULT: '#111827',     // primary text
          muted: '#6B7280',       // secondary/descriptive text
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

