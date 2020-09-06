import axios from "axios";

export default {
  getAllRequests(payload) {
    return axios.get("http://localhost:3000/api/v1/requests/all/", payload);
  },
  getRequest(id, payload) {
    return axios.get(`http://localhost:3000/api/v1/requests/${id}/`, payload);
  },
  createRequest(payload) {
    return axios.post("http://localhost:3000/api/v1/requests/", { payload });
  },
  addVolunteer(id, payload) {
    return axios.patch(
      `http://localhost:3000/api/v1/requests/${id}/addVolunteer/`,
      payload
    );
  },
  approveRequest(id, payload) {
    return axios.patch(`http://localhost:3000/api/v1/requests/${id}/`, payload);
  },
};
