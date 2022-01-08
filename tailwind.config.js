module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 1s linear",
			},
		},
		colors: {
			primary: "#161616",
			secondary: "#424242",
			tertiary: "#252525",
			white: "#ffffff",
			grey: "#a2a2a2",
			action: "#0080ff",
			hover: "#8e8e92",
			black: "#000000",
			purple: "#BF40BF",
			danger: "#ff001f",
			success: "#4bb543",
		},
	},
	variants: {
		extend: {
			borderWidth: ["hover"],
		},
	},
	plugins: [],
};
