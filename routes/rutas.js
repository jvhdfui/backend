import{Router} from "express"
const router = Router()
router.get("/", function(req, res){
	res.render("home")
})

router.get("/info",function(req, res){
	res.render("información")
})

router.get("/contactanos",function(req, res){
	res.render("contactanos")
})
export default router