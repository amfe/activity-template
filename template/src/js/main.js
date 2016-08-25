// Dependencies (remember `npm i -S <name>`)
// import koa from 'koa'

// Modules
// import {$} from './common/utils'

function foo (data) {
    // eslint-disable-next-line
    console.log(data)
}

function init () {
    const data = window.appData
    foo(data)
}

document.addEventListener('DOMContentLoaded', init)
