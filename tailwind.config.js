/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      'main-background-1': "url('@/images/Home/main-backgrounds/01.jpeg')",
      'main-background-2': "url('@/images/Home/main-backgrounds/02.jpg')",
      'main-background-3': "url('@/images/Home/main-backgrounds/03.jpg')",
    }
  },
  plugins: [],
};
