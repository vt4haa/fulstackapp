const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController')

router.post('/',typeController.create)
router.get('/',typeController.getALL)

module.exports = router