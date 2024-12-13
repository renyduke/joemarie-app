/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the index.html file for Vite
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all React component files in the src directory
  ],
  theme: {
    extend: {}, // Add custom theme extensions here
  },
  plugins: [], // Add plugins if needed
};
