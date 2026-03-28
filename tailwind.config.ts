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
        heading: ["'ITC Garamond Std'", "Georgia", "serif"],
      },
      fontSize: {
        'base': ['14px', '1.5'], // Mobile
        'md': ['16px', '1.5'],   // Tablet
        'lg': ['18px', '1.5'],   // Desktop
      },
      colors: {
        red: {
          50: '#7A2325',
          100: '#7A2325',
          200: '#7A2325',
          300: '#7A2325',
          400: '#7A2325',
          500: '#7A2325',
          600: '#7A2325',
          700: '#7A2325',
          800: '#7A2325',
          900: '#7A2325',
        }
      }
    },
  },
  plugins: [],
};

export default config;
