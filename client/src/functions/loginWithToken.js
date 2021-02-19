import axios from "axios";
import server_url from "../server_url";

const loginWithToken = async (token) => {
  const data = axios
    .get(server_url + `/auth/getUserData/${token}`)
    .then((res) => {
      return { ...(res.data[0] || []) };
    })
    .catch((err) => {
      throw new Error(err.message);
    });

  return data;
};

export default loginWithToken;
