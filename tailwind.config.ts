import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#9387f7',
          hover: '#897fe1'
        },
      },
      fontFamily: {
        primary: "var(--font-jestbrainsMono)",  // Reference the variable correctly
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1400px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
