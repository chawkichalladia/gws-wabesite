const path = require('path');

const buildEslintCommand = (filenames) => {
  return `yarn workspace website run lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
};

module.exports = {
  '*.{ts,tsx}': ["yarn workspace website run lint --"],
};
