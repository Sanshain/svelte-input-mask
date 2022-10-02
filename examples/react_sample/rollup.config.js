//@ts-check

// import nodeResolve from 'rollup-plugin-node-resolve';
// import buble from 'rollup-plugin-buble';

import resolve from "@rollup/plugin-node-resolve";
import buble from "@rollup/plugin-buble";
import svelte from 'rollup-plugin-svelte';

import alias from '@rollup/plugin-alias';

import css from 'rollup-plugin-css-only';
import linaria from '@linaria/rollup';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'



const options = {
    prerender: false,
    target: {
        dirname: 'build',
    }
}


export default [
    {
        input: 'app.jsx',
        output: {
            sourcemap: true,
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

                // ensure that extra attributes are added to head
                // elements for hydration (used with ssr: true)
                // hydratable: true,

                // Optionally, preprocess components with svelte.preprocess:
                // https://svelte.dev/docs#svelte_preprocess
                // preprocess: {
                //   style: ({ content }) => {
                //     return transformStyles(content);
                //   }
                // },

                // Emit CSS as "files" for other plugins to process
                emitCss: true,

            }),

            alias({
                entries: [
                    { find: 'react', replacement: 'preact/compat' },
                    { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
                    { find: 'react-dom', replacement: 'preact/compat' }
                ]
            }),

            buble({
                jsx: 'h',                
                objectAssign: 'Object.assign',                
                // extensions: ['.js', '.ts'],
                transforms: {
                    dangerousTaggedTemplateString: true,
                    forOf: false,                    
                    
                    /// important for linaria:
                    templateString: false,

                    /// another:
                    // dangerousForOf: true,
                    // asyncAwait: false
                },
            }),            

            linaria({
                sourceMap: process.env.NODE_ENV !== 'production',
                // include: ['*.js']
            }),

            // postcss({
            //     extract: "build/bundle.css",
            //     modules: true,
            //     plugins: [],
            //     minimize: false,

            //     extensions: ['.css'],
            //     // sourceMap: true,
            //     // Or with custom file name
            //     // extract: path.resolve('dist/my-custom-file-name.css')
            // }),

            resolve({
                // modules: true,
                // jsnext: true
                browser: true,
                dedupe: [
                    'svelte',
                    // 'jsx'
                ],
                // extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'css']
            }),

            
            // commonjs(),

            

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





    // {
    //     input: 'src/app.js',
    //     output: {
    //         file: 'build/bundle.js',
    //         format: 'iife',
    //         name: 'createMaskInput'
    //     },
    //     plugins: [
    //         css({ output: "css/app.css" }),
    //         svelte({
    //             // By default, all .svelte and .html files are compiled
    //             // extensions: ['.my-custom-extension'],

    //             // You can restrict which files are compiled
    //             // using `include` and `exclude`
    //             include: 'src/**/*.svelte',

    //             // By default, the client-side compiler is used. You
    //             // can also use the server-side rendering compiler
    //             // generate: 'ssr',

    //             // ensure that extra attributes are added to head
    //             // elements for hydration (used with ssr: true)
    //             // hydratable: true,

    //             // Optionally, preprocess components with svelte.preprocess:
    //             // https://svelte.dev/docs#svelte_preprocess
    //             // preprocess: {
    //             //   style: ({ content }) => {
    //             //     return transformStyles(content);
    //             //   }
    //             // },

    //             // Emit CSS as "files" for other plugins to process
    //             emitCss: true,

    //             // You can optionally set 'customElement' to 'true' to compile
    //             // your components to custom elements (aka web elements)
    //             // customElement: false,

    //             // Extract CSS into a separate file (recommended).
    //             // See note below
    //             // css: function (css) {
    //             //   console.log(css.code); // the concatenated CSS
    //             //   console.log(css.map); // a sourcemap

    //             //   // creates `main.css` and `main.css.map`
    //             //   // using a falsy name will default to the bundle name
    //             //   // — pass `false` as the second argument if you don't want the sourcemap
    //             //   css.write('main.css');
    //             // },

    //             // Warnings are normally passed straight to Rollup. You can
    //             // optionally handle them here, for example to squelch
    //             // warnings with a particular code
    //             onwarn: (warning, handler) => {
    //                 // e.g. don't warn on <marquee> elements, cos they're cool
    //                 if (warning.code === 'a11y-distracting-elements') return;

    //                 // let Rollup handle all other warnings normally
    //                 handler(warning);
    //             }
    //         }),
    //         resolve({
    //             browser: true,
    //             dedupe: ['svelte']
    //         }),
    //         commonjs(),
    // },