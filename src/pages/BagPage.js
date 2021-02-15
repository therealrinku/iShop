import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/all";
import { useHistory } from "react-router-dom";
import "../css/BagPage.css";

const BagPage = ({ cartItems }) => {
  const history = useHistory();

  return (
    <div className="bag--page">
      <Navbar />

      <main>
        <h4>My Bag</h4>

        {cartItems.length >= 1 ? (
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
        ) : (
          <section className="back-to-shopping">
            <p>Your Shopping Cart is Empty.</p>
            <button onClick={() => history.push("/explore")}>
              <p>Get Back to Shopping</p>
              <BsArrowRight />
            </button>
          </section>
        )}
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
