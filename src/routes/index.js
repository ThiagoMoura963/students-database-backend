import express from "express";
import students from "./studentRoutes.js";
import course from "./courseRoutes.js";

const routes = (app) => {
  app.route("/").get((_, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), students, course);
};

export default routes;