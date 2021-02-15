import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import "../css/BagPage.css";

const BagPage = ({ cartItems }) => {
  return (
    <div className="bag--page">
      <Navbar />

      <main>
        <h4>My Bag</h4>
        <section className="cart-items">
          {cartItems.map((item) => {
            return (
              <CartItem
                itemImageURL={item.productImageURL}
                itemName={item.productName}
                itemPrice={item.productPrice}
                itemQuantity={item.productQuantity}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(BagPage);
