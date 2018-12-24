const mongoose = require('mongoose')

let CommunityCollegeSchema = mongoose.Schema({
  name: String,
  address: String
})

let CommunitCollegeContactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  title: String,
  address: String
})

let K12HighSchoolSchema = mongoose.Schema({
  name: String, 
  address: String
})

let SchoolContactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  title: String,
  address: String,
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
  code: String
})

let IndustrySectorSchema = mongoose.Schema({
  name: String
})

let PathwaySchema = mongoose.Schema({
  name: String,
  code: String
})