const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type data{
    name: String!
  }
  type RootQuery{
    data: data!
  }
  schema{
    query: RootQuery
  }
`)