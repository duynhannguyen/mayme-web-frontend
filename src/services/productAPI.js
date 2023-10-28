import api from "./axiosInstances.js";

const ProductAPI = {
  get: () => {
    const url = "/mainpage/menu";
    return api.get(url);
  },

  create: (body) => {
    const url = "/mainpage/menu";
    return api.post(url, body);
  },
};

export default ProductAPI;
