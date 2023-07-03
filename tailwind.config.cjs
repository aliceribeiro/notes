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
      primary: "#2B4F71",
      secondary: "#657A97",
      white: "#FFF",
      dark: {
        heavy: "#2F2E41",
        soft: "#3F3D56"
      },
      gray: {
        heavy: "#6F6E77",
        soft: "#C9CFDF",
        light: "#E9EDF8"
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
      },
      background: {
        darkLight: "#00000070",
        clearSoft: "#EFEFEF",
        clearLight: "#FCFBFC"
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
