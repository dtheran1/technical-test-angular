/** @type {import('tailwindcss').Config} */
module.exports = {
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
        bluePrimary: "#2b4ec3",
        blueShadow: "#4ea5ff",
        blueComplementary: "#698df4",
        purpleComplementary: "#a14deb",
        blueTooltips: "#4976F8",
        colorBorders: "#C1C9D8",
        colorShadow: "#F1F3F8",
        colorShadowPrincipal: "#fcaec0",
        orange: "#F6F6E4",
        textRed: "#C56C3D",
        colorBackgroundShadow: "#c4d2fb"
      },
    },
  },
  plugins: [],
}

