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
        codGray: "#131313",
        traceAsh: "#0f0f0f",
        demoSmoke: "#efefef",
        grunge90: "#202020",
        grunge80: "#2d2d2d",
        grunge70: "#585c65",
        grunge50: "#909298",
        grunge20: "#d2d3d6",
        hardLime: "#a6ff00",
        softLime: "#d1ff77",
        hardPink: "#ff007b",
        softPink: "#ff48c9",
        hardBlue: "#501cff",
        softBlue: "#6d77ff",
      },
    },
  },
  plugins: [],
};
export default config;
