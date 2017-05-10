var fs = require('fs')
var path = require('path')

var files = fs.readdir(process.argv[2], function(err, files) {
    if (err) throw err
	files.filter(function(items) {
		return (path.extname(items)) = process.argv[3]
	})
})
