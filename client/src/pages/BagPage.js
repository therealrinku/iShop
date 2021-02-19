import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/all";
import { useHistory } from "react-router-dom";
import * as cartActions from "../redux/cart/cartActions";
import { useEffect } from "react";
import "../css/BagPage.css";

const BagPage = ({ cartItems, email, LOAD_CART }) => {
  const history = useHistory();

  useEffect(() => {
    if (email) {
      LOAD_CART(email);
    }
  }, []);

  return (
    <div className="bag--page">
      <Navbar />

      <main>
        <h4 style={cartItems.length < 1 ? { display: "none" } : null}>
          My Bag
        </h4>

        {cartItems.length >= 1 ? (
          <section className="cart-items">
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.product_id}
                  itemId={item.product_id}
                  itemImageURL={item.product_image_url}
                  itemName={item.product_name}
                  itemPrice={item.product_price}
                  itemQuantity={item.productQuantity}
                />
              );
            })}

            <section className="buttons">
              <button className="checkout-btn">Checkout</button>
              <button
                onClick={() => history.push("/explore")}
                className="get-back-btn"
              >
                <p>Continue Shopping</p>
                <BsArrowRight />
              </button>
            </section>
          </section>
        ) : (
          <section className="back-to-shopping">
            <p>Your Shopping Bag is Empty.</p>
            <button
              onClick={() => history.push("/explore")}
              className="get-back-btn"
            >
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
    email: state.user.userData?.data.email,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_CART: (email) => dispatch(cartActions.LOAD_CART(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BagPage);
