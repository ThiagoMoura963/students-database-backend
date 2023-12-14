import express from "express";
import StudentController from "../controllers/studentController.js";
import pagination from "../middleware/pagination.js";

const router = express.Router();

router
  .get("/students", StudentController.listStudents, pagination)
  .get("/students/busca", StudentController.listStudentsByFilter, pagination)
  .get("/students/:id", StudentController.listStudentById)
  .post("/students", StudentController.addStudent)
  .put("/students/:id", StudentController.updateStudent)
  .delete("/students/:id", StudentController.removeStudent);

export default router;