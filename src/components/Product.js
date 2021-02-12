import { Link } from "react-router-dom";
import { VscAdd } from "react-icons/all";
import "../css/Product.css";

const Product = ({ productId, productImage, productName, productPrice }) => {
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <Link to={`/product/${productId}`}>{productName}</Link>
      <p>${productPrice}</p>
      <button>
        <VscAdd />
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
