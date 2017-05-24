const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = Promise

const app = express()

const urlDB = 'mongodb://localhost:27017/test'
const PORT = 3000

const Restaurant = require('./models/Restaurant')

mongoose.connect(urlDB)

app.use((req, res, next) => {
    const { show, hide, page=1, limit=5 } = req.query
    let projection = {}

    if (show) {
        const fieldsProjection = show.split(',') // ["name","cuisine"]
        fieldsProjection.forEach(field => projection[field] = 1)
    }
    if (hide) {
        const fieldsProjection = hide.split(',') // ["name","cuisine"]
        fieldsProjection.forEach(field => projection[field] = 0)
    }
    req.projection = projection
    req.page = page
    req.limit = limit

    next()
})
// /restaurants?limit=5&page=2
app.get('/restaurants', (req, res) => {
    const {projection, page, limit} = req

    Restaurant
        .find(null, projection)
        .limit(+limit)
        .skip(+limit * (+page - 1))
        .then(restaurants => {
            res.json(restaurants)
        })
})

app.get('/restaurants/borough/:borough', (req, res) => {
    const {projection, page, limit} = req
    const {borough} = req.params

    Restaurant
        .find({borough}, projection)
        .limit(+limit)
        .skip(+limit * (+page - 1))
        .then(restaurants => {
            res.json(restaurants)
        })
})

app.get('/restaurants/:id', (req, res) => {
    const {projection, page, limit} = req
    const id = req.params.id

    Restaurant
        .findById(id, projection)
        .limit(+limit)
        .skip(+limit * (+page - 1))
        .then(restaurants => {
            res.json(restaurants)
        })
})


app.get('/restaurant/:id/around/:km', (req, res) => {
    const {projection, page, limit} = req
    const id = req.params.id
    const km = req.params.km

    Restaurant
        .findById(id, projection)
        .limit(+limit)
        .skip(+limit * (+page - 1))
        .then(restaurants => {
            res.json(restaurants)
        })
})


app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);
