

import http from "./httpCommon";
class CoachInputDataService {

    registerCoach(data){
        return http.post("/register_coach", data);
    }


    getAll() {
        return http.get("/trainer");
    }
    get(id) {
        return http.get(`/tutorials/${id}`);
    }
    create(data) {
        return http.post("/tutorials", data);
    }
    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }
    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }
    deleteAll() {
        return http.delete(`/tutorials`);
    }
    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}
export default new CoachInputDataService();