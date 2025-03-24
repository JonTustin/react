// tailwind.config.js
export default {
  darkMode: 'class', // Enable dark mode via the 'class' strategy
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure Tailwind looks at your React files
  ],
  theme: {
    extend: {
      // Your theme customizations here (colors, fonts, etc.)
    },
  },
  plugins: [],
};
