const mongoose = require('mongoose')

let CollegeSchema = mongoose.Schema({
  name: String,
  address: String,
  offered2Codes: Array
})

let CollegeContactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  title: String,
  address: String,
  CollegeID: String,
  Top4Codes: Array
})

let K12HighSchoolSchema = mongoose.Schema({
  name: String, 
  address: String,
  pathwaysOffered: Array,
  lat: String,
  long: String
})

let SchoolContactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  title: String,
  address: String,
  SchoolID: String
  //pathway ??
})

let DistrictContactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  title: String,
  address: String
})

let TopCode2Schema = mongoose.Schema({
  name: String,
  code: String
})

let TopCode4Schema = mongoose.Schema({
  name: String,
  code: String,
  Top2Parent: String,
  pathwaysUsedIn: Array
})

let IndustrySectorSchema = mongoose.Schema({
  name: String,
  descriptor: String,
  top4CodesUsed: Array,
  code: String,
  pathways: Array
})

let PathwaySchema = mongoose.Schema({
  name: String,
  code: String,
  descriptor: String,
  Top4Codes: Array
})

let College = mongoose.model('CommunityCollege', CollegeSchema)
let CollegeContact = mongoose.model('CommunitCollegeContact', CollegeContactSchema)
let K12HighSchool = mongoose.model('K12HighSchool', K12HighSchoolSchema)
let SchoolContact = mongoose.model('SchoolContact', SchoolContactSchema)
let DistrictContact = mongoose.model('DistrictContact', DistrictContactSchema)
let TopCode2 = mongoose.model('TopCode2', TopCode2Schema)
let TopCode4 = mongoose.model('TopCode4', TopCode4Schema)
let IndustrySector = mongoose.model('IndustrySector', IndustrySectorSchema)
let Pathway = mongoose.model('Pathway', PathwaySchema)

module.exports = {
  College,
  CollegeContact,
  K12HighSchool,
  SchoolContact,
  DistrictContact,
  TopCode2,
  TopCode4,
  IndustrySector,
  Pathway
}