/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#818181",
          "200": "#1d1d1d",
          "300": "#171717",
          "400": "#111",
          "500": "rgba(255, 255, 255, 0.1)",
        },
        dimgray: "#6a6a6a",
        black: "#000",
        goldenrod: "#e3b748",
        gainsboro: {
          "100": "#e4e4e4",
          "200": "#d9d9d9",
        },
        "pure-white": "#fff",
        darkslategray: {
          "100": "#2e2e2e",
          "200": "rgba(71, 71, 71, 0.5)",
        },
        "text-black": "#373737",
        floralwhite: "#fffbf2",
      },
      spacing: {},
      fontFamily: {
        "helvetica-now-display": "'Helvetica Now Display'",
        inter: "Inter",
      },
      borderRadius: {
        sm: "14px",
        "4xl-5": "23.5px",
        "24xl": "43px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      "35xl": "54px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
