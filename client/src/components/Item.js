import { Link } from "react-router-dom";
import "../css/Item.css";

const Item = ({ productId, productImageURL, productName, productPrice }) => {
  return (
    <Link to={`/product/${productId}`} className="item">
      <img src={productImageURL} alt="" />
      <p>{productName}</p>
      <p>${productPrice}</p>
    </Link>
  );
};

export default Item;
