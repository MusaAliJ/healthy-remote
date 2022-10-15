import { Router } from "express"
import controllers from "./taskController"

const router = Router()

router.route("/").post(controllers.createOne)

router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
