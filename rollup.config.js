const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const packageJson = require("./package.json");
const { default: terser } = require("@rollup/plugin-terser");
const scss = require('rollup-plugin-scss');
const css = require('rollup-plugin-import-css');

module.exports = [
    {
        input: "src/components/index.ts",
        external: [
            'react',
            'react-dom'
        ],
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            scss(),
            resolve(),
            typescript({
                tsconfig: "./rollup.tsconfig.json",
            }),
            commonjs(),
            terser(),
        ],
    }
];