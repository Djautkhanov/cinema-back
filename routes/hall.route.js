const Router = require('express')
const { hallController } = require('../controller/hall.controller')

const router = Router()

router.post("/hall/seans" , hallController.addHall)
router.get("/hall" , hallController.getHall)
router.patch("/hall/:id" , hallController.bookingTicket)
router.delete("/hall/:id" , hallController.deleteHall)

module.exports = router 