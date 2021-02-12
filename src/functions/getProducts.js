import db from "../firebase/db";

const getProducts = () => {
  db.collection("products")
    .get()
    .then((data) => {
      return data.docs;
    });
};

export default getProducts;
