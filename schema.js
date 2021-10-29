const { gql } = require('apollo-server')

const typeDefs = gql`
    type Blog {
      author: String!
      authorEmail: String! 
      title: String!
      tags: [String!] 
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
        author: String
        authorEmail: String
        title: String
        tags: [String]
    }

    type Mutation {
        createBlog (input: NewBlogInput!) : Blog!
        updateBlog (input: UpdateBlogInput!) : Blog!
    }
`

module.exports = typeDefs