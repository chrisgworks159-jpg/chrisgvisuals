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
  safelist: [
    "bg-clip-text",
    "text-transparent",
    { pattern: /from-(cyan|zinc|white)-\d+/ },
    { pattern: /via-(cyan|zinc|white)-\d+/ },
    { pattern: /to-(cyan|zinc|white)-\d+/ },
    { pattern: /bg-gradient-to-(r|b|t|l|br|bl|tr|tl)/ },
    { pattern: /text-cyan-\d+/ },
    { pattern: /border-cyan-\d+/ },
    { pattern: /shadow-cyan-\d+/ },
    { pattern: /bg-cyan-\d+/ },
  ],
  plugins: [],
};
export default config;
