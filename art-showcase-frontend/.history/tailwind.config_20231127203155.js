/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        profileDesktopGridCols: "400px auto",
      },
      colors: {
          'primaryD': '#eddcd9',
          'primaryL': '#f2ebe9',
          'secondary': '#de5499',
          'tertery': '#265153',
          '':'#e99',
         'text': '#333333',
      }

    },
  },
  plugins: [],
};
