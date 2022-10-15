import { Router } from "express"
import controllers from "./taskController"

const router = Router()

router.route("/createTask").post(controllers.createOne)

router.route("getTask/:id").get(controllers.getOne)

router.route("updateTask/:id").put(controllers.updateOne)

router.route("removeTask/:id").delete(controllers.removeOne)

export default router
