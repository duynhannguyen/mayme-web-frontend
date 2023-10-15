import { api } from "./axiosInstances.js";

const AuthApi = {
  signUp: (body) => {
    const url = "/auth/signup";
    return api.post(url, body);
  },
  login: () => {
    const url = "/auth/login";
    return api.post(url, body);
  },
  currentUser: () => {
    const url = "/auth/curent-user";
    return api.get(url);
  },
};
