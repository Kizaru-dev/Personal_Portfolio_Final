/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Dark blue-gray like the image background
        secondary: "#1E293B", // Slightly lighter for cards
        accent: "#38BDF8", // Light blue for text highlights
        textMain: "#F8FAFC", // White/off-white for main text
        textSub: "#94A3B8", // Gray for subtext
        btnBlue: "#3B82F6", // Blue button
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
