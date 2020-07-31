const router = express.Router()
const puppeteer = require('puppeteer')
const browser = await puppeteer.launch({
    headless: false,
  });

router.use(express.json())
router.use(urlencoded({extended: false}))

router.get("scrape", (req, res) => {
    res.send("Scarper initiated")
})