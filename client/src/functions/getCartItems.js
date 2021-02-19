import axios from "axios";
import server_url from "../server_url";

const getCartItems = async (user_email) => {
  const cartItems = await axios
    .get(server_url + `/cart/getCart/${user_email}`)
    .then((res) => res.data[0]?.cart_items)
    .catch((err) => {
      throw new Error(err.message);
    });
  return cartItems;
};

export default getCartItems;
