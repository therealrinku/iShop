import "../css/Product.css";

const Product = ({ productImage, productName, productPrice }) => {
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <h4>{productName}</h4>
      <p>${productPrice}</p>
    </div>
  );
};

export default Product;
