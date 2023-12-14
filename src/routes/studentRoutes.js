import express from "express";
import StudentController from "../controllers/studentController.js";

const routes = express.Router();

routes.get("/students", StudentController.listStudents);
routes.get("/students/busca", StudentController.listStudentsByFilter);
routes.get("/students/:id", StudentController.listStudentById);
routes.post("/students", StudentController.addStudent);
routes.put("/students/:id", StudentController.updateStudent);
routes.delete("/students/:id", StudentController.removeStudent);

export default routes;