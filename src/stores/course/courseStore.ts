import { action, observable } from "mobx";
import courseService from "../../services/course/courseService";
import CourseDto from "../../services/course/dto/courseDto";

class CourseStore {
  @observable courses: CourseDto[] = [];

  @action
  async getAll() {
    let result = await courseService.getCourses();
    this.courses = result;
    return result;
  }
}
export default CourseStore;
