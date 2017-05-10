var fs = require('fs')
var http = require('http')
var PORT = process.argv[2]
var file = process.argv[3]

var readableStream = fs.createReadStream(file)

readableStream.setEncoding('utf-8')

var server = http.createServer()

server.on('request', function (req, res) {
	readableStream.pipe(res)
})

server.listen(PORT)
