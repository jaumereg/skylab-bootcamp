const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const app = express()
const PORT = 3000

app.use(session({
  name: 'james-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}))

app.use((req, res, next) => {
  req.session.counter = ++req.session.counter || 0
  next()
})

app.get('/', (req, res) => {
  res.send(`You have visited this site ${req.session.counter} times`)
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))