const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  semi: false,
  printWidth: 100,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  bracketSameLine: true,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
