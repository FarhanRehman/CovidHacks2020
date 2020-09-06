import axios from "axios";

export default {
  signUp(payload) {
    return axios.post("http://localhost:4000/api/v1/users/signup/", payload);
  },
  login(payload) {
    return axios.post("http://localhost:4000/api/v1/users/login/", payload);
  },
  logout(payload) {
    return axios.post("http://localhost:4000/api/v1/users/logout/", payload);
  },
  updatePassword(payload) {
    return axios.post(
      "http://localhost:4000/api/v1/users/updateMyPassword/",
      payload
    );
  },
  profile(payload) {
    return axios.post("http://localhost:4000/api/v1/users/me/", payload);
  },
  updateProfile(payload) {
    return axios.post("http://localhost:4000/api/v1/users/updateMe", payload);
  },
  deleteProfile(payload) {
    return axios.post("http://localhost:4000/api/v1/users/deleteMe", payload);
  },

};

