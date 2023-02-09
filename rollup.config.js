const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts");
const terser = require("@rollup/plugin-terser");
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

const packageJson = require("./package.json");

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
                tsconfig: "./rollup.tsconfig.json"
            }),
            commonjs({
                include: ["node_modules/**"],
                namedExports: {
                    "node_modules/react/react.js": [
                        "Children",
                        "Component",
                        "PropTypes",
                        "createElement"
                    ],
                    "node_modules/react-dom/index.js": ["render"]
                }
            })
        ]
    }
];