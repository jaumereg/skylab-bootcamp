const express = require ('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Task = require('../models/Task')

const dbUrl = 'mongodb://localhost:27017/test'
const PORT = 3000

const app = express()

mongoose.Promise = Promise
mongoose.connect(dbUrl)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/list', (req, res) => {

  Task
    .find()
    .then( tasks => {
      res.json(tasks)
    })
})

app.post('/list', (req, res) => {

  const { title, createdAt, completed } = req.body

  const newTask = new Task({ title, createdAt })

  newTask.save()
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))