import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
