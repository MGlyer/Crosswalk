const graphql = require('graphql')
const db = require('')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, 
        GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull} = graphql

const { 
  CommunityCollege,
  CommunitCollegeContact,
  K12HighSchool,
  SchoolContact,
  DistrictContact,
  TopCode2,
  TopCode4,
  IndustrySector,
  Pathway
} = require('../models/models.js')



