const {buildSchema} = require("graphql")

module.exports = buildSchema( `

type Post{
  _id: String!
  userName: String!
  email: String!
  creationDate: String!
  likes

}

type Event{
  
}

type HomeInitial{
  
}
type RootQuery{
  homeQuery: 
}
  schema{
    query: RootQuery
  }
`)