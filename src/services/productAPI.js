import api from "./axiosInstances.js";

const ProductAPI = {
    create: (body) => {
        const url = "/mainpage/signup";
        return api.post(url, body);
    },
};

export default ProductAPI;