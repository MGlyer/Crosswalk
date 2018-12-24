const express = require('express')
const server = express()

//MiddleWare
const parser = require('body-parser')
server.use(parser.json())

server.use(express.static(`${__dirname}/../client/dist`))


const port = 8086
server.listen(port, () => console.log('server now listening on ', port))