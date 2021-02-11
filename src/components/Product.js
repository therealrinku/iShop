import { Link } from "react-router-dom";
import { VscAdd } from "react-icons/all";
import "../css/Product.css";

const Product = ({ productImage, productName, productPrice }) => {
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <Link to="/">{productName}</Link>
      <p>${productPrice}</p>
      <button>
        <VscAdd />
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
