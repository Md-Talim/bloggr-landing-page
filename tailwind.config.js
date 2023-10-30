/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary
        lightRed: 'hsl(356, 100%, 66%)', // CTA text
        veryLightRed: 'hsl(355, 100%, 74%)', // CTA hover background
        veryDarkBlue: 'hsl(208, 49%, 24%)', // headings

        // Neutral
        white: 'hsl(0, 0%, 100%)', // text
        lightGray: '#efeff1',
        grayishBlue: 'hsl(240, 2%, 79%)', // footer text
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)', // body copy
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)', // footer background
      },
      backgroundImage: {
        hero: 'url("/images/bg-pattern-intro-desktop.svg")',
        'hero-mobile': 'url("/images/bg-pattern-intro-mobile.svg")',
      },
      fontFamily: {
        ubuntu: ['ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
