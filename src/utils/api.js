import server from "./server";

const api = {
  fetchProducts: payload => {
    return server.get('/products', payload);
  }
};

export default api;