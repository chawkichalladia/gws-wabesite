const path = require('path');

module.exports = {
  '*.{ts,tsx}': ["yarn workspace website run lint", "yarn format"],
};
