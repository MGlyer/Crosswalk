const mongoose = require('mongoose')
const dbURL = require('./dbconfig.js')

mongoose.connect(dbURL)
let db = mongoose.connection

db.once('open', () => {
  console.log('connected to mlab')
})