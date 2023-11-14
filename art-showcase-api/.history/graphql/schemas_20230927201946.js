const {buildSchema} = require("graphql")

//Add creatore field in comment, like, post
module.exports = buildSchema( `

type Comment{
  _id: ID!
}

type Like{
  _id: ID!
}

type Post{
  _id: ID!
  creationDate: String!
  likesCount: Int!
  commentsCount: Int!
  saveCount: Int!
  title: String
  description: String
  likes: [Like!]!
  comments: [Comment]!
}

type Event{
  _id: ID!
  imgUrl: String!
}

type HomeInitial{
  events: [Event]!
  posts: [Post]!
}

type ProfileLoad
type RootQuery{
  homeLoadQuery: HomeInitial
  profileLoadQuery: (userId: ID!)
}
  schema{
    query: RootQuery
  }
`)