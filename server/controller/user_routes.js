const express = require('express')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.get("/about", (req, res) => {
    res.send("OK")
})

module.exports = router