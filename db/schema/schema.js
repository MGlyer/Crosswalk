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

const K12HighSchoolType = new GraphQLObjectType({
  name: 'K12 High School',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    SchoolContact: {
      type: SchoolContactType,
      resolve(parent, args) {
        return SchoolContact.findOne({schoolID: parent.id})
      }
    }
  })
})

const SchoolContactType = new GraphQLObjectType({
  name: 'School Contact',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    phone: {type: GraphQLString},
    email: {type: GraphQLString},
    title: {type: GraphQLString},
    address: {type: GraphQLString},
    K12HighSchool: {
      type: K12HighSchoolType,
      resolve(parent, args) {
        return K12HighSchool.findById(parent.SchoolID)
      }
    }
  })
})

const TopCode2Type = new GraphQLObjectType({
  name: 'TopCode2',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    code: {type: GraphQLString},
    TopCode4: {
      type: new GraphQLList(TopCode4Type),
      resolve(parent, args) {
        return TopCode4.find({Top2Parent: parent.code})
      }
    }
  })
})

const TopCode4Type = new GraphQLObjectType({
  name: 'TopCode4',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    code: {type: GraphQLString},
    pathway: {
      type: new GraphQLList(PathwayType),
      resolve(parent, args) {
        let toReturn = []
        for (var i = 0; i < parent.pathwaysUsedIn.length; i++) {
          Pathway.findOne({code: parent.pathwaysUsedIn[i]}, (err, docs) => {
            if (err) return err
            else {
              toReturn.push(docs)
              if (toReturn.length === parent.pathwaysUsedIn.length) {
                return toReturn
              }
            }
          })
        }
      }
    },
    TopCode2: {
      type: TopCode2Type,
      resolve(parent, args) {
        let code2 = parent.code.slice(0,2)
        return TopCode2.findOne({code: code2})
      }
    }
  })
})

const PathwayType = new GraphQLObjectType({
  name: 'Pathway',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    code: {type: GraphQLString},
    descriptor: {type: GraphQLString},
    //industry type
    //K12 type
    //top code 4
    //top code 2
    //k12 type
    //district contact
    //college contact
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pathway: {
      type: PathwayType,
      args: {code: {type: GraphQLString}},
      resolve(parent, args) {
        return Pathway.find({code: args.code})
      }
    },
    topCode4: {
      type: TopCode4Type,
      args: {code: {type: GraphQLString}},
      resolve(parents, args) {
        return TopCode4.find({code: args.code})
      }
    },
    topCode2: {
      type: TopCode2Type,
      args: {code: {type: GraphQLString}},
      resolve(parents, args) {
        return TopCode2.find({code: args.code})
      }
    },
    K12HighSchool: {
      type: K12HighSchoolType,
      args: {name: {type: GraphQLString}},
      resolve(parents, args) {
        return K12HighSchool.findOne({name: args.name})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
  // mutation: Mutation
})

