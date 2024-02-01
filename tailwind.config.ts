import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan":"hsl(186, 14%, 43%)",
        "gray-cyan":"hsl(184, 14%, 56%)",
        "light-cyan":" hsl(189, 41%, 97%)",
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark":"hsl(183, 100%, 15%)",
        "very-light-gray": "hsl(189, 41%, 97%)"
      }
    },
  },
  plugins: [],
};
export default config;
