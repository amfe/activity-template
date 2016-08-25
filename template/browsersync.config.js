var config = {
    "server": true,
    "port": 3000,
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },
    "files": [
        "dist/*.css",
        "dist/*.js"
    ],
    "open": "local",
    "startPath": "src/index.html"
}

module.exports = config