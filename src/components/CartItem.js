import "../css/CartItem.css";

const CartItem = ({ itemImageURL, itemName, itemQuantity, itemPrice }) => {
  return (
    <div className="cart--item">
      <img src={itemImageURL} alt={`${itemName}`} />

      <section>
        <p>{itemName}</p>
        <p>${itemPrice}</p>
        <div>
          <button disabled={itemQuantity === 1}>-</button>
          <p>{itemQuantity}</p>
          <button>+</button>
          <button style={{ marginLeft: "4px" }}>x</button>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
