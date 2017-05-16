var fs = require('fs')
var path = require('path')

function myModule(directoryName, extension, callback) {
    fs.readdir(directoryName, function(err, listFiles) {
        if (err) {
            return callback(err)
        }
        var filteredFiles = listFiles.filter(function(fileName) {
            return path.extname(fileName) === '.' + extension
        })
        callback(null, filteredFiles)
    })
}

module.exports = myModule
