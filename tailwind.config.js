const { join } = require('path');

module.exports = {
	content: [join(__dirname, 'src/**/*.{html,ts}')],
	theme: {
		extend: {},
	},
	plugins: [],
};
