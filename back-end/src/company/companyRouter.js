import { Router } from "express"
import controllers from "./companyController"

const router = Router()

router.route("/").post(controllers.createOne).get(controllers.getOne)

router.route("/:companyId").put(controllers.updateOne)
router.route("/deleteCategory").delete(controllers.removeOne)

export default router
