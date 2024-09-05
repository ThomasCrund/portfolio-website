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
        "dark": "#1F2421",
        "current": "#216869",
        "jungle": "#49A078",
        "light-green": "#9CC5A1",
        "platinum": "#DCE1DE",
      }
    }
  },
  plugins: [],
};
export default config;
