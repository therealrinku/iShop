import axios from "axios";
import server_url from "../server_url";

const loginWithToken = async (token) => {
  const data = axios
    .get(server_url + "/auth/getUserData")
    .then((res) => {
      return { ...res.data };
    })
    .catch((err) => {
      throw new Error(err.message);
    });

  return data;
};

export default loginWithToken;
