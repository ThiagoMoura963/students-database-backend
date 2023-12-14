import express from "express";
import CourseController from "../controllers/courseController.js";
import pagination from "../middleware/pagination.js";

const router = express.Router();

router
  .get("/courses", CourseController.listCourse, pagination)
  .get("/courses/:id", CourseController.listCourseById)
  .post("/courses", CourseController.addCourse)
  .put("/courses/:id", CourseController.updateCourse)
  .delete("/courses/:id", CourseController.removeCourse);

export default router;