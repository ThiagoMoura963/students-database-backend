import course from "../models/Course.js";
import NotFound from "../error/NotFound.js";

class CourseController {
  static listCourse = async (_, res, next) => {
    try {
      const foundCourse = await course.find();

      res.status(200).json(foundCourse);
    } catch (error) {
      next(error);
    }
  };

  static listCourseById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const foundCourse = await course.findById(id);

      if(foundCourse !== null) {
        res.status(200).json(foundCourse);
      } else {
        next(new NotFound("O Id do curso não foi encontrado"));
      }

    } catch (error) {
      next(error);
    }
  };

  static addCourse = async (req, res, next) => {
    try {
      const newCourse = req.body;
  
      const createCourse = await course.create(newCourse);

      res.status(201).json({ message: "curso criado com sucesso", createCourse });
    } catch (error) {
      next(error);
    }
  };

  static updateCourse = async (req, res, next) => {
    try {
      const id = req.params.id;
      const foundCourse = await course.findByIdAndUpdate(id, req.body);

      if(foundCourse !== null) {
        res.status(200).json({ message: "curso atualizado com sucesso" });
      } else {
        next(new NotFound("O Id do curso não foi encontrado"));
      }

    } catch (error) {
      next(error);
    }
  };

  static removeCourse = async (req, res, next) => {
    try {
      const id = req.params.id;
      const foundCourse = await course.findByIdAndDelete(id);

      if(foundCourse !== null) {
        res.status(200).json({ message: "curso deletado com sucesso" });
      } else {
        next(new NotFound("O Id do curso não foi encontrado"));
      }

    } catch (error) {
      next(error);
    }
  };
}

export default CourseController;