import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  courseName: { type: String },
  courseDuration: {
    type: Number,
    required: [true, "O tempo do curso(em horas) é obrigatório"]
  }
}, { versionKey: false });

const course = mongoose.model("courses", courseSchema);

export default course;