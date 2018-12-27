const mongoose = require('mongoose')
const dbURL = require('./dbconfig.js')
const { pathways, topCode2, topCode4, K12HighSchools } = require('./dummyData.js')

const { 
  College,
  CollegeContact,
  K12HighSchool,
  SchoolContact,
  DistrictContact,
  TopCode2,
  TopCode4,
  IndustrySector,
  Pathway
} = require('../models/models.js')

mongoose.connect(dbURL)
let db = mongoose.connection

const populatePathways = () => {
  pathways.forEach((pathway) => {
    let {name, code, descriptor, Top4Codes} = pathway
    let toSave = new Pathway({
      name,
      code,
      descriptor,
      Top4Codes
    })
    toSave.save()
  })
}

db.once('open', () => {
  console.log('connected to mlab')
})