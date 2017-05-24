const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const fileStore = require('session-file-store')(session)

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))

app.set('view engine', 'pug')

app.use(session({
  name: 'james-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true,
  store: new fileStore()
}))

app.use((req, res, next) => {
  req.session.list = req.session.list || []
  next()
})

app.get('/list', (req, res) => {
	res.render('list', { list: req.session.list })
})

app.post('/list', (req, res) => {
  const { item } = req.body
  const newItem = { item }
  newItem.id = req.session.list.length + 1

	req.session.list.push(newItem)
	res.render('list', { list: req.session.list })
})

app.delete('/list/:id', (req, res) => {
  const id = +req.params.id

  req.session.list = req.session.list.filter(item => {
    return item.id !== id
  })

  res.status(200).send('Item was removed succesfully!')
})


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))