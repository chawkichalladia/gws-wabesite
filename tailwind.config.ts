import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: {
        primary: "#0037DC",
        secondary: "#36AEFF",
        alternative: "#0137DC"
      },
      grey: {
        1: "#FAFAFA",
        2: "#F5F5F5",
        3: "#F0F0F0",
        4: "#D9D9D9",
        5: "#BFBFBF",
        6: "#8C8C8C",
        7: "#595959",
        8: "#434343",
        9: "#262626",
        10: "#1F1F1F",
        11: "#141414",
      },
      black: "#000",
      white: "#fff",
      "secondary-red": "#ED706B",
      "secondary-green": "#6ECFBC",
      "secondary-yellow": "#F2BA46",
      "secondary-salmon": "#F7CBCA",
      "secondary-purple": "#8E59FF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
