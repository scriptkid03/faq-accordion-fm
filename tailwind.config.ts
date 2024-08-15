import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-pattern": "url('/svgs/background-pattern-desktop.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightPink: "hsl(275, 100%, 97%)",
        darkPurple: "hsl(292, 42%, 14%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        lightPurple: "#AD28EB",
      },
    },
  },
  plugins: [],
};
export default config;
