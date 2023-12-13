import express from "express";
import CourseController from "../controllers/courseController.js";

const routes = express.Router();

routes.get("/course", CourseController.listCourse);
routes.get("/course/:id", CourseController.listCourseById);
routes.post("/course", CourseController.addCourse);
routes.put("/course/:id", CourseController.updateCourse);
routes.delete("/course/:id", CourseController.removeCourse);

export default routes;