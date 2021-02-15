import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";

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
                itemImageURL={item.itemImageURL}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemQuantity={item.itemQuantity}
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
