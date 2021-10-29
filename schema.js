const { gql } = require('apollo-server')

const typeDefs = gql`
    type Blog {
      author: String!
      authorEmail: String! 
      title: String!
      tags: [String!] 
      likes: Int
      dislikes: Int
      comments: [String]
      reply: [String]
      banner: [String]
      id: Int!
    }

    type Query {
        blog(input: String!): Blog
    }

    input NewBlogInput {
        author: String!
        authorEmail: String!
        title: String!
        tags: [String!]
    }

    input UpdateBlogInput {
        id: Int!
        author: String
        authorEmail: String
        title: String
        tags: [String]
    }

    input DeleteBlogInput {
        id: Int!
    }

    type Mutation {
        createBlog (input: NewBlogInput!) : Blog!
        updateBlog (input: UpdateBlogInput!) : Blog!
        deleteBlog (input: DeleteBlogInput!) : Blog!
    }
`

module.exports = typeDefs