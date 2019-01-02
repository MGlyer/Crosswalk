const { gql } = require('apollo-boost')

const codeQuery = gql`
query($code: code) {
  K12WithPath(code: $code){
    id
    name
    address
    SchoolContact{
      name
      title
      phone
      email
    }
  }
}
`

module.exports = {
  codeQuery
}