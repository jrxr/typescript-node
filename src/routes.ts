import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Diego",
    duration: 20,
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Junior"
  });


  return response.send();
}
