import axios from "axios";
import server_url from "../server_url";

const updateCart = async (cart_items) => {
  const response = await axios
    .post(server_url + `/cart/updateCart`, { cart_items })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message);
    });
  return response;
};

export default updateCart;
