import { connect } from "react-redux";
import Navbar from "./Navbar";
import "../css/Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <Navbar />

      <section className="cart">
        <h3>My Cart</h3>
        <div className="cart--items">
          {cartItems.map((product, i) => {
            return (
              <div className="cart--item" key={i}>
                <img src={product.productImageURL} alt="item_img" />
                <h4>{product.productName}</h4>
                <h4>{product.productQuantity}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
