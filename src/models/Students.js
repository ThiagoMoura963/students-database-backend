import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const studentsSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: {
    type: String,
    required: [true, "O nome do aluno(a) é obrigatório"]
  },
  age: {
    type: Number,
    required: [true, "A idade do aluno(a) é obrigatório(a)"]
  },
  date: {
    type: Date,
    required: [true, "A data de nascimento do aluno(a) é obrigatório(a)"]
  },
  cpf: {
    type: String,
    required: [true, "O CPF de nascimento do aluno(a) é obrigatório(a)"]
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: [true, "A escolha do curso é obrigatório"],
    autopopulate: true
  }
}, { versionKey: false });

studentsSchema.plugin(autopopulate);
const student = mongoose.model("students", studentsSchema);

export default student;