import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "golden-blue": "#0037DC",
      blue2: "#5C7FE9",
      black: "#000",
      white: "#fff",
      "grey-1": "#FAFAFA",
      "grey-2": "#F5F5F5",
      "grey-3": "#F0F0F0",
      "grey-4": "#D9D9D9",
      "grey-5": "#BFBFBF",
      "grey-6": "#8C8C8C",
      "grey-7": "#595959",
      "grey-8": "#434343",
      "grey-9": "#262626",
      "grey-10": "#1F1F1F",
      "grey-11": "#141414",
      "secondary-blue": "#36AEFF",
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
