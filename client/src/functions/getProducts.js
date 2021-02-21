import axios from "axios";
import server_url from "../server_url";

const getProducts = async (fetchType) => {
  const data = await axios
    .get(server_url + `/product/${fetchType}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  return data;
};

export default getProducts;
