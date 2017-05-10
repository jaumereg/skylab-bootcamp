var pathToList = process.argv[2]
var extensionToFind = process.argv[3]

var myModule = require('./exercise6-mymodule.js')

myModule(pathToList, extensionToFind, function(err, filteredFiles) {
    if (err) throw err
    filteredFiles.forEach(function(fileName) {
        console.log(fileName)
    })
})
