import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-poppins)", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        'base': ['14px', '1.5'], // Mobile
        'md': ['16px', '1.5'],   // Tablet
        'lg': ['18px', '1.5'],   // Desktop
      },
    },
  },
  plugins: [],
};

export default config;
