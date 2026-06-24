import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1024px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
