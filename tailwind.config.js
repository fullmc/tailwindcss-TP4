/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		fontSize: {
			little: "8px",
			big: "45px",
			normal: "17px",
			reduced: "12px",
		},
		extend: {
			colors: {
				blue: "#EAF1FA",
				blackish: "#131313",
				grayish: "#F7F7F7",
				darkbg: "#4f4f4f",
				darkcard: "#393939",
				darkbutton: "#282828",
			},
			backgroundImage: {
				banner:
					"url('https://unsplash.com/fr/photos/femme-buvant-a-la-bouteille-YoUmTMW0FJA')",
			},
			lineHeight: {
				12: "3rem",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
