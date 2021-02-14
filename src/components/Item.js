import "../css/Item.css";

const Item = ({ productImageURL, productName, productPrice }) => {
  return (
    <div className="item">
      <img src={productImageURL} alt="" />
      <p>{productName}</p>
      <p>${productPrice}</p>
    </div>
  );
};

export default Item;
