#!/usr/bin/env node

var pkg = require('./package.json')
var fs = require('fs')
var Historia = require('./')

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
    boolean: [
        'help',
        'versions'
    ],
    alias: {
        h: 'help',
        V: 'versions'
    }
})

if (argv.V) console.log(pkg.version)

if (argv.h) {
    console.log('Usage: historia setup shell-history-file-path');
    console.log('');
    console.log('Options:');
    console.log('');
    console.log('  -V, --versions    output the version number');
    console.log('  -h, --help        output usage information');
}

if (argv._[0] === 'setup') {
    var historia = new Historia()
    var output = historia.setup(argv._[1])
    fs.writeFile('setup.sh', output, function (err) {
        if (err) throw err
    })
}

if (argv._[0] === 'start') {
    console.log('historia start')
}

if (argv._[0] === 'end') {
    console.log('historia end')
}
