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
					"url('https://images.unsplash.com/photo-1624480376260-403eae38dda8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
			},
			lineHeight: {
				12: "3rem",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
