import mongoose from "mongoose"

const companySchema = new mongoose.Schema(
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
    }
  },
  { timestamps: true }
)

export const Company = mongoose.model("company", companySchema)
