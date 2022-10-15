import { Router } from "express"
import controllers from "./companyController"

const router = Router()

router.route("/createCompany").post(controllers.createOne)

router.route("/getCompany/:id").get(controllers.getOne)

router.route("/updateCategory").put(controllers.updateOne)
router.route("/deleteCategory").delete(controllers.removeOne)

export default router