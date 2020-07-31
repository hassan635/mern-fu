const router = express.Router()
const puppeteer = require('puppeteer')

router.use(express.json())
router.use(urlencoded({extended: false}))

router.get("scrape", (req, res, next) => {
    console.log("Scarper initiated")
    next();
})