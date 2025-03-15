const Router = require('express')
const router = new Router()
const userConroller = require('../controller/userConroller')
const authMiddleware = require ('../midlleware/authMiddleware')


router.post('/registration',userConroller.registration)
router.post('/login', userConroller.login)
router.get('/auth', authMiddleware, userConroller.check)

module.exports = router