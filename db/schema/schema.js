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

const CommunityCollegeType = new GraphQLObjectType({
  name: 'Community College',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    CommunitCollegeContact: {
      type: new GraphQLList(CommunitCollegeContactType),
      resolve (parent, args) {
        return CommunitCollegeContact.find({CommunityCollegeID: parent.id})
      }
    },
    TopCode2: {
      type: new GraphQLList(TopCode2Type),
      resolve (parent, args) {
        let toReturn = [];
        for (var i = 0; i < parent.offered2Codes.length; i++) {
          TopCode2.findOne({code: parent.offered2Codes[i]}, (err, docs) => {
            if (err) return err
            else {
              toReturn.push(docs)
              if (toReturn.length === parent.offered2Codes.length) {
                return toReturn
              }
            }
          })
        }
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
  // mutation: Mutation
})

