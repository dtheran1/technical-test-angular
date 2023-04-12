/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        youtube: "hsl(348, 97%, 39%)",
        instagramTo: "hsl(37, 97%, 70%)",
        instagramFrom: "hsl(329, 70%, 58%)",
        veryDarkBlue: "hsl(230, 17%, 14%)",
        darkCard: "hsl(228, 28%, 20%)",
        textDark: "hsl(228, 34%, 66%)",
        textWhite: "hsl(0, 0%, 100%)",
        topPatterDark: "hsl(232, 19%, 15%)",
        hoverCard: "hsl(228, 30%, 30%)",
        topPatterLigth: "hsl(225, 100%, 98%)",
        themeLigth: "hsl(0, 0%, 100%)",
        switchDarkTo: "hsl(210, 78%, 56%)",
        switchDarkFrom: "hsl(146, 68%, 55%)",
      },
      screens: {
        xs: "375px"
      },
    },
  },
  plugins: [],
}

