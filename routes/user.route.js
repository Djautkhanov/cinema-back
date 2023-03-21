const {Router} = require("express")
const { userController } = require("../controller/auth.controller")
const router = Router()

router.post('/user',userController.addUser )
router.delete('/user', userController.deleteUser )
router.post('/login', userController.login )
router.get('/user', userController.getUser )

module.exports = router