/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        260: "260px",
        350: "350px",
        620: "620px",
      },
      maxHeight: {
        210: "210px",
        260: "260px",
        350: "350px",
        450: "450px",
        620: "620px",
      },

      screens: {
        xsm: "365px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      lineHeight: {
        tight: '1.2', // Adjust the value as needed
      },
      colors: {
        darkGreen: "#020B10",
        mediumGreen: "#122D34",
        lightGreen: "#0EFE81",
        whiteColor: "#FFFFFF",
        lightPink: "#FEBBED",
        lightViolet: "#B977FE",
        lightGrey: "#C7C7C7",
        mediumGrey: '#36454F',
        darkBlue: '#20175E',
        
      },
    },
  },
  plugins: [],
};
