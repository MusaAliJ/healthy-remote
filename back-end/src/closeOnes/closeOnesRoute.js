import { Router } from "express"
import controllers from "./closeOneController"

const router = Router()

router.route("/").post(controllers.createOne).get(controllers.createOne)
router.route("/get-close-ones").put(controllers.getMany)
router.route("/update-close-one/:id").put(controllers.updateOne)
router.route("/delete-close-one/:id").put(controllers.removeOne)
router.route("/get-close-details/:id").put(controllers.getOne)

export default router
