const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
}

type Category {
    _id: ID!
    categoryName: String!
}

type Product {
    _id: ID!
    title: String!
    price: String!
    imgUrl: String!
    postedBy: [User]
    category: String!
}



type productPostResponse {
    success: Boolean
    Product: String
}

type Query {
    Products: [Product]
    
}
type Auth {
    token: ID
    user: User
}

type Mutation {
    addProduct(
        title: String!
        price: String!
        imgUrl: String!
        postedBy: ID
        category: String!
    ): Product
    
    login(
        username: String!
        password: String!
    ): Auth
    signup(
        username: String!
        email: String!
        password: String!
    ): Auth
    uploadFile(file: Upload!): Boolean
}

`
module.exports = typeDefs
