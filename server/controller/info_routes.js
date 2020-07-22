const express = require('express')
const { urlencoded } = require('express')
const router = express.Router()

router.use(express.json())
router.use(urlencoded({extended: false}))

router.get("/info", (req,res) => {
    res.send("Info")
})