const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const babel = require('@rollup/plugin-babel');
const packageJson = require("./package.json");
const { default: terser } = require("@rollup/plugin-terser");

module.exports = [
    {
        input: "src/components/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            typescript({
                tsconfig: "./rollup.tsconfig.json",
            }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            terser()
        ],
    }
];