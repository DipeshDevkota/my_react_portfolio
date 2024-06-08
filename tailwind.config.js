/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('/path/to/image1.png')",
        'image2': "url('/path/to/image2.png')",
        'image3': "url('/path/to/image3.png')",
      },
    },
  },
  plugins: [],
};

