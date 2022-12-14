import express from "express"
import morgan from "morgan"
import cors from "cors"
import { connect } from "./util/db"
import companyRouter from "./company/companyRouter"
import closeOnesRouter from "./closeOnes/closeOnesRoute"
import taskRouter from "./task/taskRouter"
import taskCategoryRouter from "./taskCategory/taskCategoryRoutes"

import { signup, signin, protect } from "./util/auth"

export const app = express()
const PORT = 3001
app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.post("/signup", signup)
app.post("/signin", signin)

app.use("/api", protect)
app.use("/api/company", companyRouter)
app.use("/api/close-one", closeOnesRouter)
app.use("/api/task", taskRouter)
app.use("/api/taskCategory", taskCategoryRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(PORT, () => {
      console.log(`REST API on http://localhost:${PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}
