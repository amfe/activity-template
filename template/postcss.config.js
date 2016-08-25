var config = {
    "use": [
        "postcss-px2rem",
        "autoprefixer",
    ],
    "output": "dist/bundle.css",
    "local-plugins": true,
    "autoprefixer": {
        "browsers": [
            "> 1%",
            "last 2 versions"
        ]
    },
    "postcss-px2rem": {
    },
    "cssnano": {
    }
}

if (process.env.NODE_ENV === 'production') {
    config.use.push('cssnano')
}

module.exports = config
