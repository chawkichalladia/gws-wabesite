import fs from 'fs';

import PackageJson from './package.json' assert { type: 'json' };

fs.writeFile(
  './dist/package.json',
  JSON.stringify({ ...PackageJson, scripts: {}, devDependencies: {} }),
  (err) => {
    if (err) throw err;

    console.log('success');
  }
);
