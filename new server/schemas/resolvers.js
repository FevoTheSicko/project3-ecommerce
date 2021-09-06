const { Category, Product, User } = require('../models')
const db = require('../config/connection')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')
const { createWriteStream } = require('fs')
const path = require('path')
const files = []

const resolvers = {
    Query: {
        Products: async () => {
            console.log('working')
            const data = Product.find()
            return data
        }

    },
    Mutation: {
        addProduct: async (parent, args) => {
            const newProduct = await Product.create(args)
        },
        login: async (parent, { username, password }) => {
            console.log('reached resolvers for login')

            const finduser = await User.findOne({ username, password })
            console.log(finduser)

            if (!finduser) {
                console.log('user not found')
                throw new AuthenticationError('Incorrect credentials')
            }



            /*if (!correctpassword) {
                console.log('password incorect')
                throw new AuthenticationError('Incorrect credentials')
            }*/
            const token = signToken(finduser)
            console.log("made return")
            return { token, finduser }

        },
        signup: async (parent, args) => {
            const newUser = await User.create(args)

            const token = signToken({ newUser })
            console.log('at sign up')
            return { token, newUser }
        },
        uploadFile: async (_, { file }) => {
            const { createReadStream, filename } = await file

            await new Promise(res =>
                createReadStream()
                    .pipe(createWriteStream(path.join(__dirname, "../uploads", filename)))
                    .on("close", res)
            )
            files.push(filename)

            return true
        }
    }
}




module.exports = resolvers
