module.exports = {
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "es5",
	"printWidth": 100,
    "tailwindConfig": "./tailwind.config.cjs",
    "plugins": [
        [require('prettier-plugin-svelte')],
        [require('prettier-plugin-tailwindcss')]
    ],
}
