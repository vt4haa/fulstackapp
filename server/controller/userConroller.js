const { request, response } = require('express')
const ApiError = require('../error/apiError')
class userController {
    async registration(req, res) {

    }
    async login(req, res) {

    }
    async check(req,res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('не задан id'))
        }
        res.json(id)
    }
}
module.exports = new userController
