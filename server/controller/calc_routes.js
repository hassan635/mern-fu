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

router.get("/multiply", (req,res) => {
    res.send("multiply")
})

router.get("/divide", (req,res) => {
    res.send("divide")
})

router.get("/memory", (req,res) => {
    res.send("result saved in memory"
})

router.post("/postadd", (req,res) => {
    res.send("add with post"
})