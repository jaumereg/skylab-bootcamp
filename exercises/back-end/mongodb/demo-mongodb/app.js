const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017/test' // test is the DB

// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {

  if (err) throw err
  console.log('Connected correctly to server')

  // db.users.find()
  db.collection('restaurants')
      .find({ cuisine: 'American' }, { name:1,  cuisine: 1, "grades.score": 1, _id:0 }) // return 'cursor'
      .limit(20)
      .toArray( (err, docs) => {
        const myJsonResults = JSON.stringify(docs, null, 2)
        console.log ( myJsonResults )
        db.close()
      })
      //.forEach(doc => console.log(doc))

})