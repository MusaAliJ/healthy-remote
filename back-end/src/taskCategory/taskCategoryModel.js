import mongoose from "mongoose"

const taskCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

export const TaskCategory = mongoose.model("taskCategory", taskCategorySchema)
