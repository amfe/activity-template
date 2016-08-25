import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

const config = {
    entry: 'src/js/main.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    sourceMap: true,
    treeshake: false,
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: [
                ['es2015', {modules: false}]
            ],
            plugins: [
                'external-helpers',
                'transform-object-rest-spread'
            ]
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.sourceMap = false
}

export default config
