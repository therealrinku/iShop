const CartItem = ({ itemImageURL, itemName, itemQuantity, itemPrice }) => {
  return (
    <div className="cart--item">
      <img src={itemImageURL} alt={`${itemName}`} />
      <p>{itemName}</p>
      <p>{itemPrice}</p>
      <p>{itemQuantity}</p>
    </div>
  );
};

export default CartItem;
