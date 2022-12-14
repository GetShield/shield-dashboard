module.exports = {
	content: ['./src/**/*.tsx'],
	darkMode: 'class', // or 'media' or 'class'
	important: true,
	corePlugins: {
		preflight: false
	},
	theme: {
		extend: {
			colors: {
				primary: '#2287C3',
				secondary: '#100B2E'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
