import { Link } from "react-router-dom";
import "../css/Product.css";

const Product = ({ productImage, productName, productPrice }) => {
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <Link to="/">{productName}</Link>
      <p>${productPrice}</p>
    </div>
  );
};

export default Product;
