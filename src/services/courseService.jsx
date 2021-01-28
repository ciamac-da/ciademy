import http from "./userService";
import config from "./config.json";

export const getCourses = () => {
http.get(`${config.ciademyUrl}/api/courses`)
}