import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    description: String,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true
    },
    assignedTo: {
      type: mongoose.SchemaTypes.ObjectId,
      red: "user"
    },
    status: {
      isDone: Boolean
    },
    deadline: {
      type: String
    }
  },
  { timestamps: true }
)

export const Task = mongoose.model("task", taskSchema)
