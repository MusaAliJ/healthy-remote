import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    whatsappNo: {
      type: String,
      required: true
    },
    who: {
      type: String,
      required: true,
      enum: ["employee", "employer"]
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true
    }
  },
  { timestamps: true }
)

export const User = mongoose.model("closeOnes", userSchema)
