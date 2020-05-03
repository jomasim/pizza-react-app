import server from "./server";

const api = {
  fetchProducts: (payload) => {
    return server.get("/products", payload);
  },
  postOrder: (payload) => {
    return server.post("/orders", payload);
  },
};

export default api;
