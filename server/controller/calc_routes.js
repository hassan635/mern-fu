const { urlencoded } = require('express')
const router = express.Router()

router.use(express.json())
router.use(urlencoded({extended: false}))

router.get("/add", (req,res) => {
    res.send("add")
})

router.get("/subtract", (req,res) => {
    res.send("/subtract")
})