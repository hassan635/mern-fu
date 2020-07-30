const router = express.Router()

router.use(express.json())
router.use(urlencoded({extended: false}))

router.get("scrape", (req, res) => {
    res.send("Scarper initiated")
})