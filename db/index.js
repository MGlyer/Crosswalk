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
} = require('./models/models.js')

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
    console.log('saving pathway: ', toSave)
    toSave.save()
  })
}

const populate2Code = () => {
  topCode2.forEach((topCode2) => {
    let {name, code} = topCode2
    let toSave = new TopCode2({
      name,
      code
    })
    console.log('saving TopCode2: ', toSave)
    toSave.save()
  })
}

const populate4Code = () => {
  topCode4.forEach((topCode4) => {
    let {name, code, Top2Parent, pathwaysUsedIn} = topCode4
    let toSave = new TopCode4({
      name,
      code,
      Top2Parent,
      pathwaysUsedIn
    })
    console.log('saving topCode4: ', toSave)
    toSave.save()
  })
}

const populateK12HighSchool = () => {
  K12HighSchools.forEach((school) => {
    let {name, address, pathwaysOffered} = school
    let toSave = new K12HighSchool({
      name,
      address,
      pathwaysOffered
    })
    console.log('saving K12 School: ', toSave)
    toSave.save()
  })
}

module.exports = {
  db,
  populatePathways,
  populate2Code,
  populate4Code,
  populateK12HighSchool
}