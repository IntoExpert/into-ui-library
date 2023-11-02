import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";
import postcss from 'rollup-plugin-postcss';
import dts from "rollup-plugin-dts";
import image from "@rollup/plugin-image";
import autoprefixer from "autoprefixer";

const rollUpSettings = [
    {
        input: "src/index.ts",
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
            commonjs(),
            typescript({
                tsconfig: "./rollup.tsconfig.json",
            }),
            postcss({
                plugins: [autoprefixer()],
                sourceMap: true,
                extract: true,
                minimize: true
            }),
            terser(),
            image()
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],

        external: [/\.css$/, /\.scss$/], // telling rollup anything that is .css aren't part of type exports 
    },
    {
        input: "dist/esm/index.css",
        output: [{ file: "dist/styles.css" }],
        plugins: [postcss({
            plugins: [autoprefixer()],
            sourceMap: true,
            extract: true,
            minimize: true,
        }),]
    },

];

export default rollUpSettings;