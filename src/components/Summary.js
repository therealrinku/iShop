import { useEffect, useState } from "react";
import Item from "./Item";
import db from "../firebase/db";
import { useHistory } from "react-router-dom";
import "../css/Summary.css";

const Summary = () => {
  const [hotProducts, setHotProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    db.collection("products")
      .where("isHot", "==", true)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          setHotProducts((prev) => [
            ...prev,
            { productId: doc.id, ...doc.data() },
          ]);
        });
      });

    db.collection("products")
      .where("isLatest", "==", true)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          setLatestProducts((prev) => [
            ...prev,
            { productId: doc.id, ...doc.data() },
          ]);
        });
      });
  }, []);

  return (
    <div className="summary">
      <h4>Hottest Products</h4>
      <section>
        {hotProducts.map((product, i) => {
          return (
            <Item
              key={i}
              productId={product.productId}
              productImageURL={product.productImageURL}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          );
        })}
      </section>

      <h4>Latest Products</h4>
      <section>
        {latestProducts.map((product, i) => {
          return (
            <Item
              key={i}
              productId={product.productId}
              productImageURL={product.productImageURL}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          );
        })}
      </section>

      <button onClick={() => history.push("/explore")}>See All Products</button>
    </div>
  );
};

export default Summary;
