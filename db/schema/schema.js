const graphql = require('graphql')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, 
        GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull} = graphql

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

const CollegeType = new GraphQLObjectType({
  name: 'College',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    CollegeContact: {
      type: new GraphQLList(CollegeContactType),
      resolve (parent, args) {
        return CollegeContact.find({CollegeID: parent.id})
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

const CollegeContactType = new GraphQLObjectType({
  name: 'College Contact',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    phone: {type: GraphQLString},
    email: {type: GraphQLString},
    title: {type: GraphQLString},
    address: {type: GraphQLString},
    Top4Codes: {type: GraphQLList},
    collegeID: {type: GraphQLString},
    College: {
      type: CollegeType,
      resolve (parent, args) {
        return College.findById(parent.collegeID)
      }
    },
    TopCode4: {
      type: newGraphQLList(TopCode4Type),
      resolve (parent, args) {
        let manages = parent.Top4Codes
        let toReturn = []
        for (var i = 0; i < manages.length; i++) {
          Top4Code.findOne({code: manages[i]}, (err, docs) => {
            if (err) return err
            else {
              toReturn.push(docs)
              if (toReturn.length === manages.length) {
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

