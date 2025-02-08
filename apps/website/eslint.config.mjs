import { nextConfigs } from '@packages/eslint-config/next';

/** @type {import("eslint").Linter.Config} */
export default [...nextConfigs, {ignores: ["*.js"]}];
