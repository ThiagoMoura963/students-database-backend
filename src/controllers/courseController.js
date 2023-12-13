import course from "../models/Course.js";

class CourseController {
  static listCourse = async (_, res) => {
    try {
      const foundCourse = await course.find();

      res.status(200).json(foundCourse);
    } catch (error) {
      res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
    }
  };

  static listCourseById = async (req, res) => {
    try {
      const id = req.params.id;

      const foundCourse = course.findById(id);

      res.status(200).json(foundCourse);
    } catch (error) {
      res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
    }
  };

  static addCourse = async (req, res) => {
    try {
      const newCourse = req.body;
  
      const createCourse = await course.create(newCourse);

      res.status(201).json({ message: "curso criado com sucesso", createCourse });
    } catch (error) {
      res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
    }
  };

  static updateCourse = async (req, res) => {
    try {
      const id = req.params.id;

      await course.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "curso atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
    }
  };

  static removeCourse = async (req, res) => {
    try {
      const id = req.params.id;

      await course.findByIdAndDelete(id);

      res.status(200).json({ message: "curso deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
    }
  };
}

export default CourseController;