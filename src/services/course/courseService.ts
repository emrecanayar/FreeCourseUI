import axios from "axios";

class CourseService {
  public async getCourses() {
    let result = await axios.get("http://localhost:5011/api/v1/Course/GetAll");
    return result.data.data;
  }
}
export default new CourseService();
