import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-mode": "url('/2.png')",
        "dark-mode": "url('/1.jpg')",
        "light-mobile": "url('/3.png')",
        "dark-mobile": "url('/4.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient( at 50% 100%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
