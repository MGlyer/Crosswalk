const express = require('express')
const server = express()
const gqlServer = express()
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('../db/schema/schema')

//APP SECTION
//MiddleWare
const parser = require('body-parser')
server.use(parser.json())

server.use(express.static(`${__dirname}/../client/dist`))


const port = 8086
server.listen(port, () => console.log('server now listening on ', port))


//GRAPHQL
gqlServer.use(cors())
gqlServer.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

gqlServer.listen(8087, () => console.log('GraphQL now listening on 8087'))