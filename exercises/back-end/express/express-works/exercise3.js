var express = require('express')
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.set('view engine', 'pug')

var date = new Date().toDateString()

app.get('/home', function(req, res) {
	res.render('index', {date})
    res.end('Hello World!')


})

app.listen(process.argv[2])


