import { Router } from "express"
import controllers from "./companyController"

const router = Router()

router.route("/").post(controllers.createOne).get(controllers.getOne)

router.route("/getCompany/:id").get(controllers.getOne)

router.route("/updateCompany").put(controllers.updateOne)
router.route("/deleteCompany").delete(controllers.removeOne)

export default router
