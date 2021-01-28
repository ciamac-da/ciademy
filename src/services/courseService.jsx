import http from "./httpService.jsx";
import config from "./config.json";

export const getCourses = () => {
return http.get(`${config.ciademyUrl}/api/courses`)
}