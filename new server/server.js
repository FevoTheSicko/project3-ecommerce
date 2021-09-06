const express = require('express')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const db = require('./config/connection')
const { resolvers, typeDefs } = require('./schemas')
const { authMiddleware } = require('./utils/auth')

const files = []

const app = express()

const PORT = 3001
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
})



async function start() {
    await server.start();

    server.applyMiddleware({ app })

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use('/uploads', express.static(path.join(__dirname, './uploads')))

}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`)
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
})

start();