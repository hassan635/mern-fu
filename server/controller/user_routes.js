const express = require('express')
const router = express.Router()

router.use(express.json())

router.get("/about", (req, res) => {
    res.send("OK")
})