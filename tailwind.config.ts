import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "50rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: ".3rem",
          sm: ".5rem",
          lg: "4rem",
          xl: "2rem",
          "2xl": "2rem",
        },
        screens: {
          sm: "1200px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
