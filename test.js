var fs = require('fs')
var Historia = require('./')
var historia = new Historia()
var test = require('tape')

test('setup', function (t) {
    var actual = historia.setup('sample-history')
    var expected = "yum install php\nyum install php-mysql\nyum install httpd"
    t.same(actual, expected)
    t.end()
})
