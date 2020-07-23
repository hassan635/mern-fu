const { urlencoded } = require('express')
const router = express.Router()

router.use(express.json())
router.use(urlencoded({extended: false}))

router.get("/calc", (req,res) => {
    res.send("add")
})