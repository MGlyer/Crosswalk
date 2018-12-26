const mongoose = require('mongoose')
const dbURL = require('./dbconfig.js')
const { pathways, topCode2, topCode4, K12HighSchools } = require('./dummyData.js')

mongoose.connect(dbURL)
let db = mongoose.connection

db.once('open', () => {
  console.log('connected to mlab')
})