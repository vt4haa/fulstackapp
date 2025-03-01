const Router = require('express')
const userConroller = require('../controller/userConroller')
const router = new Router()

router.post('/registration',userConroller.registration)
router.post('/login', userConroller.login)
router.get('/auth',userConroller.check)

module.exports = router