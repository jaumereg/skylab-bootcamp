const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const PORT = 3000
const output = 'data.json'

let aNames = require('./data.json')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/hello', (req, res) => {
	res.send('Hello World')
})

app.get('/users', (req, res) => {
	res.render('users', {names: aNames})
})

app.post('/users', (req, res) => {
	const userName = req.body.username
	aNames.push(userName)
	const jsonListNames = JSON.stringify(aNames)
	fs.writeFile(output, jsonListNames, err => {
		if (err) throw err
		res.redirect('/users')
	})	
})

app.listen(PORT, () => console.log(`Listening from PORT ${PORT}`))
