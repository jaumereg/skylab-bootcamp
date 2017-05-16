const express = require('express')
const app = express()
const PORT = 3000

let counter = 0

console.log('Express is progress!')

app.get('/', (req, res) => {
	res.send("Main Page")
})

app.get('/hello', (req, res) => {
	res.send("Hello World!")
})

app.get('/bye', (req, res) => {
	res.send("Bye World!")
})


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

//npm install
//npm init -y
//npm start