import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				inter: ["var(--font-inter)", "sans-serif"],
				nunito: ["var(--font-nunito)", "sans-serif"],
				poppins: ["var(--font-poppins)", "sans-serif"],
			},
      colors: {
        black: {
					DEFAULT: '#000',
					100: '#000319',
				},
				red: {
					button: '#BD7E7E',
				},
				gray: {
					main: '#D9D9D9',
				}
      },
    },
  },
  plugins: [],
} satisfies Config;
