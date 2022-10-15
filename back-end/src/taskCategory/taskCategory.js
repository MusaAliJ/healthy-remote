import mongoose from "mongoose"

const taskCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tasks: {
    type: [mongoose.SchemaTypes.ObjectId],
    red: "user"
  }
})

export const TaskCategory = mongoose.model("taskCategory", taskCategorySchema)
