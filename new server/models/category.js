const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    categoryName: {
        type: String,
        unique: true
    }
})

const Category = model('category', categorySchema)

module.exports = Category