import http from "./httpService";
import config from "./config.json";

export const registerUser = user =>{
   return  http.post(`${config.ciademyUrl}/api/register`, JSON.stringify(user))
}