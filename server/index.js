const express = require('express')
const server = express()

//depreciated imports
// const gqlServer = express()
// const cors = require('cors')
// const graphqlHTTP = require('express-graphql')
// const schema = require('../db/schema/schema')

//db and populate code
const {db, populateIndustry, populatePathways, populate2Code, populate4Code, populateK12HighSchool, populateSchoolContact} = require('../db/index')
const {industrySearch, quickPathwaySearch, pathwayDataSearch, schoolSearch, contactRetrieval} = require('../db/index')


//APP SECTION
//MiddleWare
const parser = require('body-parser')
server.use(parser.json())

server.use(express.static(`${__dirname}/../client/dist`))

db.once('open', () => {
  // populatePathways()
  // populate2Code()
  // populate4Code()
  // populateK12HighSchool()
  // populateSchoolContact()
  // populateIndustry()
  console.log('connected to mlab!')
})

server.get('/initialSearch', (req, res) => {
  let {code} = req.query
  industrySearch(code, (err, data) => {
    if (err) console.log(err)
    else {
      // console.log(data)
      res.send(data)
    }
  })
})

server.get('/quickPathwaySearch', (req, res) => {
  let {title} = req.query
  quickPathwaySearch(title, (err, data) => {
    err ? console.log(err) : res.send(data)
  })
})

server.get('/fullPathwaySearch', (req, res) => {
  let {pathwayCodes} = req.query
  pathwayDataSearch(pathwayCodes, (err, data) => {
    if (err) console.log(err)
    else {
      res.send(data)
    }
  })
})

server.get('/schoolSearch', (req, res) => {
  let {pathwayCode} = req.query
  schoolSearch(pathwayCode, (err, schools) => {
    if (err) console.log(err)
    else {
      contactRetrieval(schools, (err, data) => {
        if (err) console.log(err)
        else {
          let information = {schools, contacts: data}
          res.send(information)
        }
      })
    }
  })
})

const port = 8086
server.listen(port, () => console.log('server now listening on ', port))


//GRAPHQL
// gqlServer.use(cors())
// gqlServer.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }))

// gqlServer.listen(8087, () => console.log('GraphQL now listening on 8087'))