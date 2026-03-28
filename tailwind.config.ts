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
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#7A2325',
          700: '#5A1B1B',
          800: '#4A1515',
          900: '#3A1010',
        }
      }
    },
  },
  plugins: [],
};

export default config;
