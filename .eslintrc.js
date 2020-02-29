module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: `./tsconfig.json`
	},
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'airbnb-typescript/base'
	],
	rules: {
		'@typescript-eslint/indent': ['error', 4],
		'import/no-extraneous-dependencies': 'off'
	}
};