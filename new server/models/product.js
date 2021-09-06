const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    postedBy: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    category: {
        type: String,
        required: true
    }
})

const Product = model('product', productSchema)

module.exports = Product