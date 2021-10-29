const { ApolloServer, gql } = require('apollo-server')
// const mongoose = require('mongoose')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')



const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)
    .then(() => console.log('server running on'))