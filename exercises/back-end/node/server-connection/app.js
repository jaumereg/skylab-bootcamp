var http = require('http')

var server = http.createServer()
var PORT = process.env.PORT || 3000

server.on('request', function(req, res) {
	res.end("End of request")
})

server.listen(PORT, function () {
	console.log('Listening on PORT ' + PORT)
})