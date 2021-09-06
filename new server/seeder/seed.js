
const db = require('../config/connection')
const { Category, Product, User } = require('../models')

db.once('open', async () => {
    await Category.deleteMany({})
    await Product.deleteMany({})
    await User.deleteMany({})

    const categories = await Category.insertMany(categoryData)
    const users = await User.insertMany(userData)
    const products = await Product.insertMany(productData)
    process.exit(0)
})












const productData = [
    {
        title: 'Red Shirt',
        price: 60,
        imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.target.com.au%2Fp%2Fshort-sleeve-cotton-school-t-shirts%2F62849883&psig=AOvVaw0wn0LIWK30hB7oNReGvKhS&ust=1628582002876000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMD91O-6o_ICFQAAAAAdAAAAABAK',
        category: 'Clothing'
    },
    {
        title: 'nintendo Switch',
        price: 400,
        imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bigw.com.au%2Fmedias%2Fsys_master%2Fimages%2Fimages%2Fh82%2Fh02%2F14106587955230.jpg&imgrefurl=https%3A%2F%2Fwww.bigw.com.au%2Fproduct%2Fnintendo-switch-console-neon%2Fp%2F60525%2F&tbnid=5ngLBGEbGt2XuM&vet=12ahUKEwjr9_H2uqPyAhVDMHIKHdR4DrUQMygAegUIARC5Ag..i&docid=gh3A7VWtHE0KEM&w=1200&h=1200&q=switch&ved=2ahUKEwjr9_H2uqPyAhVDMHIKHdR4DrUQMygAegUIARC5Ag',
        category: 'Entertainment'
    },
    {
        title: 'Electric Guitar',
        price: 200,
        imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.melbournemusiccentre.com.au%2Fessex-sc-style-electric-guitar-fiesta-red.html&psig=AOvVaw2kH92xwsnxYU1ARXkuP09a&ust=1628582028428000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiL4_u6o_ICFQAAAAAdAAAAABAF',
        category: 'Musical'
    },
    {
        title: 'holden commodore',
        price: 2000,
        imgurl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHolden_Commodore_(VF)&psig=AOvVaw2XY5MKFTk0of5S4-UyTucT&ust=1628582043939000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjz54O7o_ICFQAAAAAdAAAAABAD',
        category: 'Vehicle'
    },
    {
        title: 'cat',
        price: 4000,
        imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpets.webmd.com%2Fcats%2Fcat-vaccines&psig=AOvVaw3WokQMZIzwe8iplt-dINXw&ust=1628582055753000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjnjYq7o_ICFQAAAAAdAAAAABAD',
        category: 'Animal'
    },
]

const categoryData = [
    {
        categoryName: 'Entertainment'
    },
    {
        categoryName: 'Clothing'
    },
    {
        categoryName: 'Musical'
    },
    {
        categoryName: 'Vehicle'
    },
    {
        categoryName: 'Animals'
    }
]

const userData = [
    {
        username: 'user1',
        email: 'user1@gmail.com',
        password: 'password1'
    },
    {
        username: 'user2',
        email: 'user2@gmail.com',
        password: 'password2'
    },
    {
        username: 'user3',
        email: 'user3@gmail.com',
        password: 'password3'
    },
    {
        username: 'user4',
        email: 'user4@gmail.com',
        password: 'password4'
    },
    {
        username: 'user5',
        email: 'user5@gmail.com',
        password: 'password5'
    },
]



