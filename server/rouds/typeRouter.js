const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController')
const checkRole = require('../midlleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), typeController.create)
router.get('/',typeController.getALL)

module.exports = router