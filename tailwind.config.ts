/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/views/**/*.{html,ejs}"],
  theme: {
    extend: {
      screens: {
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-2lg": { max: '1300px' },
        "max-lg": { max: "1024px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xs": { max: "425px" },
        "max-2xs": { max: "320px" },
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};

export default config;