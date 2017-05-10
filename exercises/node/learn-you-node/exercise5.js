var fs = require('fs')
var path = require('path')

var pathToList = process.argv[2]
var extensionToFind = '.' + process.argv[3]

fs.readdir(pathToList, function(err, listFile) {
    if (err) throw err
    listFile
        .forEach(function(fileName) {
            if (path.extname(fileName) === extensionToFind) {
                console.log(fileName)
            }
        })
})
