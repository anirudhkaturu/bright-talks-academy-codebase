import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  }
}, { timestamps: true });

// user can enroll in a course only once
enrollmentSchema.index({user: 1, course: 1}, {unique: true});

export default mongoose.model("Enrollment", enrollmentSchema);
