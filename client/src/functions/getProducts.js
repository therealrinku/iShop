import axios from "axios";
import server_url from "../server_url";

const getProducts = (fetchType) => {
  return new Promise((resolve) => {
    axios
      .get(server_url + `/product/${fetchType}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  });
};

export default getProducts;
