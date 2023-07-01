/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32
    },
    colors: {
      transparent: "transparent",
      white: "#FFF",
      black: {
        700: "#2F2E41",
        600: "#3F3D56",
        light: "#00000070"
      },
      gray: {
        700: "#8A8E9B",
        600: "#D9D9D9",
        500: "E9E9E9",
        400: "#F2F2F2"
      },
      caramel: {
        700: "#A96436",
        600: "#BE835B",
        200: "#DBBA87",
        "200-tp": "#DBBA87a3"
      },
      feedback: {
        successSoft: "#DDF3E4",
        successLight: "#CCEBD7",
        success: "#18794E",
        errorSoft: "#F9E6E5",
        errorLight: "#F5DAD8",
        error: "#B84036",
        graySoft: "#EEEDEF",
        grayLight: "#E9E8EA",
        gray: "#6F6E77",
        warningSoft: "#D8C8BE",
        warningLight: "#DABBA7",
        warning: "#C7692A"
      }
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
