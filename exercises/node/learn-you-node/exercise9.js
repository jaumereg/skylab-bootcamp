var http = require('http')
var bl = require('bl')

var urls = [process.argv[2], process.argv[3], process.argv[4]]
var results = []
var count = 0

function getUrlString(i) {
    http.get(urls[i], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) throw err
            results[i] = data.toString()
            count++
            if (count === 3) {
                results.forEach(function(result) { console.log(result) })
            }
        }))
    })
}

for (var j = 0; j < 3; j++) {
    getUrlString(j)
}