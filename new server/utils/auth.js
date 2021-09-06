const jwt = require('jsonwebtoken')

const secret = 'secret'

const expire = '2h'

module.exports = {
    authMiddleware({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization

        if (req.headers.authoization) {
            token = token.split(' ').pop().trim()
        }
        if (!token) {
            return req
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expire })
            req.user = data
        } catch (err) {
            console.error(err)
            console.log('token not valid')
        }
        return req
    },
    signToken({ username, email, _id }) {
        const payload = { username, email, _id }

        return jwt.sign({ data: payload }, secret, { expiresIn: expire })
    }
}