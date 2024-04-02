/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "colors-neutral-white": "#fff",
        deepskyblue: {
          "100": "#38b5fe",
          "200": "#37b5ff",
          "300": "#31b8ff",
          "400": "rgba(56, 181, 254, 0.43)",
        },
        silver: {
          "100": "#c4c4c4",
          "200": "#c7c0c0",
          "300": "rgba(196, 196, 196, 0)",
        },
        gray: {
          "100": "#fffdfd",
          "200": "#0e0d0d",
          "300": "rgba(255, 255, 255, 0.43)",
        },
        dimgray: {
          "100": "#6e6e6e",
          "200": "#696969",
          "300": "#676767",
          "400": "#5d5d5d",
          "500": "#555",
          "600": "#515151",
          "700": "#4d4d4d",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        darkgray: "#a9a9a9",
        red: "#ff0404",
        "colors-neutral-gray-3": "#999",
        lightgreen: "#42c85f",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        inherit: "inherit",
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "17xl": "36px",
        "3xs": "10px",
        "12xs": "1px",
        "9xl": "28px",
        "6xs": "7px",
        "10xs": "3px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      xs: "12px",
      mini: "15px",
      "13xl": "32px",
      "5xl": "24px",
      sm: "14px",
      "3xl": "22px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
