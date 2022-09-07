//@ts-check

// import nodeResolve from 'rollup-plugin-node-resolve';
// import buble from 'rollup-plugin-buble';

import resolve from "@rollup/plugin-node-resolve";
import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';


import commonjs from '@rollup/plugin-commonjs';


const options = {
    prerender: false,
    target: {
        dirname: 'build',
    }
}

export default [
    {
        input: 'app.js',
        output: {
            file: './build/bundle.js',
            format: 'iife',
            globals: {
                // '@emotion/react': 'preact',			
            }
        },
        external: [],
        plugins: [

            css({ output: 'bundle.css' }),
            svelte({
                // By default, all .svelte and .html files are compiled
                // extensions: ['.my-custom-extension'],

                // You can restrict which files are compiled
                // using `include` and `exclude`
                // include: 'src/**/*.svelte',
                include: 'node_modules/**/*.svelte',

                // Emit CSS as "files" for other plugins to process
                emitCss: true,

            }),
            resolve({
                // modules: true,                
                browser: true,
            }),
            commonjs()

            // uglify({
            // 	output: { comments: false },
            // 	mangle: {
            // 		toplevel: true,
            // 		properties: { regex: /^_/ }
            // 	}
            // }),
            // es3()

        ]
    }
];

