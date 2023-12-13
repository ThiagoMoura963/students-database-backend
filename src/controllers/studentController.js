import student from "../models/Students.js";
import course from "../models/Course.js";

class StudentController {
  static listStudents = async (_, res) => {
    try {
      const students = await student.find();

      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: "Ocorreu um interno no servidor" });
    }
  };

  static listStudentById = async (req, res) => {
    try {
      const id = req.params.id;

      const foundStudent = await student.findById(id);

      res.status(200).json(foundStudent);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
    }
  };

  static addStudent = async (req, res) => {
    try {
      const newStudent = req.body;

      const foundCourse = await course.findById(newStudent.course);

      if(foundCourse !== null) {
        const studentResult = { ...newStudent, course: { ...foundCourse._doc } };

        const createStudent = await student.create(studentResult);
  
        res.status(201).json({ message: "criado com sucesso", course: createStudent });
      }

    } catch (error) {
      res.status(500).json({ message: "Ocorreu um erro interno no servidor"});
      console.log(error);
    }
  };

  static updateStudent = async (req, res) => {
    try {
      const id = req.params.id;

      await student.findByIdAndUpdate(id, req.body);

      res.status(200).json({ messsage: "cadastro do aluno atualizado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Oocrreu um erro interno no servidor" });
    }
  };

  static removeStudent = async (req, res) => {
    try {
      const id = req.params.id;

      await student.findByIdAndDelete(id);
      
      res.status(200).json({ message: "cadastro do aluno deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
    }
  };
}

export default StudentController;