const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const userController = require('../controller/userConroller')

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)

module.exports = router