var http = require('http')
var bl = require('bl')
var urls = [process.argv[2], process.argv[3], process.argv[4]] //var urls = process.argv.slice(2)
var results = []
var count = 0

function getUrlString(i) {
    http.get(urls[i], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) throw err
            results[i] = data.toString()
            count++
            if (count === urls.length) {
                results.forEach(function(result) { console.log(result) })
            }
        }))
    })
}

for (var j = 0; j < urls.length; j++) {
    getUrlString(j)
} 

// better way...
//
// var http = require('http')
// var async = require('async')
// var bl = require('bl')
// var aUrls = process.argv.slice(2)

// var httpGets = aUrls.map(function (url) {
//   return function (callback) {
//     http.get(url, function (response) {
//       response.pipe(bl(function (err, wholeData) {
//         wholeData = wholeData.toString()
//         callback(null, wholeData)
//       }))
//     })
//   }
// })

// async.series(httpGets, function (err, results) {
//   results.forEach(function (text) {
//     console.log(text)
//   })
// })