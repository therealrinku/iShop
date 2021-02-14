import { useEffect, useState } from "react";
import Item from "./Item";
import db from "../firebase/db";
import "../css/Summary.css";

const Summary = () => {
  const [hotProducts, setHotProducts] = useState([]);

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
    </div>
  );
};

export default Summary;
