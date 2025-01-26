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
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: {
          500: "#1fbc9d",
          600: "#319795",
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Add Montserrat here
      },
    },
  },
  plugins: [],
};
export default config;
