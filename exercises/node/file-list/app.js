var fs = require('fs')
var files = fs.readdirSync('./');
stats = fs.lstatSync('./');

files.map(function(file) {
    if (stats.isFile()) {
    	console.log('FILE: ' + file)
    } else if (stats.isDirectory()){
    	console.log('DIRECTORY: ' + file)
    }
})

// console.log(files)

