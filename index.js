var fs = require('fs')
var exec = require('child_process').exec
var byline = require('byline')
var readEachLineSync = require('read-each-line-sync')

module.exports = Historia

function Historia () {
    if (!(this instanceof Historia)) return new Historia()
}

Historia.prototype.setup = function (history) {
    var outArr = []
    var startFlag = false
    readEachLineSync(history, function (line) {
        if (line === "historia start") {
            startFlag = true
            return
        }
        if (line === "historia end") {
            startFlag = false
            return
        }

        if (startFlag && line.match(/^yum (install|remove) .*?/)) {
            outArr.push(line)
        }
    })
    return outArr.join('\n')
}
