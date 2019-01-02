const express = require('express')
const server = express()
const gqlServer = express()
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('../db/schema/schema')
const {db, populateIndustry, populatePathways, populate2Code, populate4Code, populateK12HighSchool, populateSchoolContact} = require('../db/index')
const {industrySearch} = require('../db/index')


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
  console.log(code, req.query)
  industrySearch(code, (err, data) => {
    if (err) console.log(err)
    else {
      console.log(data)
      res.send(data)
    }
  })
})

const port = 8086
server.listen(port, () => console.log('server now listening on ', port))


//GRAPHQL
gqlServer.use(cors())
gqlServer.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

gqlServer.listen(8087, () => console.log('GraphQL now listening on 8087'))