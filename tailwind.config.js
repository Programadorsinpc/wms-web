/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-header': '#0F7CC1',
        'blue-hover-header': '#5F9EC6',
        'blue-hover-navbar': '#DCF1FF',
        'gray-hover-button-filters': '#ECECEC'
      },
    },
  },
  plugins: [],
}

