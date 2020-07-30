const router = express.Router()

router.use(express.json())
router.use(urlencoded({extended: false}))

router.get("scrape", (req, res, next) => {
    console.log("Scarper initiated")
    next();
})