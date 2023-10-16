import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "top-left-right":
          "0px -6px 6px -6px rgba(0, 0, 0, 0.25), 6px 0px 6px -6px rgba(0, 0, 0, 0.25), -6px 0px 6px -6px rgba(0, 0, 0, 0.25)",
        bottom: "0px 8px 8px -6px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
