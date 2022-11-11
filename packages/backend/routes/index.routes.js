const express = require("express");
const router = express.Router();


router.get('/home', (req, res) => {
    res.send("Hola  mundo")
})

router.get('/park', (req, res) => {
    res.send('<h1>ssss</h1>')
})

router.get('/about', (req, res) => {
    res.send("Acerca de Parking ")
})


module.exports = router
