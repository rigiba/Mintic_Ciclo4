
const express = require("express")
const router = express.Router()
const parqueaderosController = require("../controllers/parqueaderos.controller")

router.get("/", parqueaderosController.find)
router.post("/", parqueaderosController.create)
router.get("/:id", parqueaderosController.findOne)
router.put("/:id", parqueaderosController.update)
router.delete("/:id", parqueaderosController.remove)


module.exports = router
