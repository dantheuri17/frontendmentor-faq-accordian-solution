/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      colors: {
        "light-pink": "var(--light-pink)",
        "grayish-purple": "var(--grayish-purple)",
        "dark-purple": "var(--dark-purple)"
      },
    },
	},
	plugins: [],
};

