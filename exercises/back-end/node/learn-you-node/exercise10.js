var net = require('net')
var PORT = process.argv[2]



var date = new Date()

var year = date.getFullYear()
var month = date.getMonth() + 1     // starts at 0
var day = date.getDate()      // returns the day of month
var hour = date.getHours()
var minute = date.getMinutes()

var formattedDate = year + '-' + '0' + month + '-' + day + ' ' + hour + ':' + minute + '\n'

var server = net.createServer(function (socket) {
  socket.write(formattedDate)
  socket.end()                      
})
server.listen(PORT)                                               