import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;
class Server {
  methods = ["get", "post", "put", "delete"];
  constructor() {
    this.axios = () =>
      axios.create({
        baseURL: baseUrl,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

    this.methods.forEach((method) => {
      Server.prototype[method] = async (url, data = {}) => {
        return this.axios()[method](url, data);
      };
    });
  }
}
export default new Server();
