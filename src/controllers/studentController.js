import student from "../models/Students.js";
import course from "../models/Course.js";
import NotFound from "../error/NotFound.js";

class StudentController {
  static listStudents = async (req, res, next) => {
    try {
      const students = await student.find();

      res.status(200).json(students);
    } catch (error) {
      next(error);
    }
  };

  static listStudentById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const foundStudent = await student.findById(id);

      if(foundStudent !== null) {
        res.status(200).json(foundStudent);
      } else {
        next(new NotFound("O Id do aluno(a) não foi encontrado"));
      }
    } catch (error) {
      next(error);
    }
  };

  static addStudent = async (req, res, next) => {
    try {
      const newStudent = req.body;

      const foundCourse = await course.findById(newStudent.course);

      if(foundCourse !== null) {
        const studentResult = { ...newStudent, course: { ...foundCourse._doc } };

        const createStudent = await student.create(studentResult);
  
        res.status(201).json({ message: "criado com sucesso", course: createStudent });
      } else {
        next(new NotFound("O Id do curso não foi encontrado"));
      }

    } catch (error) {
      next(error);
    }
  };

  static updateStudent = async (req, res, next) => {
    try {
      const id = req.params.id;
      const foundStudent = await student.findByIdAndUpdate(id, req.body);

      if(foundStudent === null) {
        next(new NotFound("O Id do aluno(a) não foi encontrado"));
        return;
      }

      const foundCourse = await course.findById(foundStudent.course);

      if(foundCourse === null) {
        next(new NotFound("O Id do curso não foi encontrado"));
        return;
      }

      res.status(200).json({ messsage: "cadastro do aluno atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  };

  static removeStudent = async (req, res, next) => {
    try {
      const id = req.params.id;
      const foundStudent = await student.findByIdAndDelete(id);

      if(foundStudent !== null) {
        res.status(200).json({ message: "cadastro do aluno deletado com sucesso" });
      } else {
        next(new NotFound("O Id do aluno(a) não foi encontrado"));
      }
      
    } catch (error) {
      next(error);
    }
  };
}

export default StudentController;