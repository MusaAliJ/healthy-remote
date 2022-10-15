import { Router } from "express"
import controllers from "./taskCategoryController"

const router = Router()

router
  .route("/taskCategory")
  .get(controllers.getMany)
  .post(controllers.createOne)

router
  .route("/taskCategory/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
