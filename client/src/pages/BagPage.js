import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/all";
import { useHistory } from "react-router-dom";
import * as cartActions from "../redux/cart/cartActions";
import { useEffect } from "react";
import Loader from "../components/Loader";
import "../css/BagPage.css";

const BagPage = ({ loading, cartItems, email, LOAD_CART, error }) => {
  const history = useHistory();

  useEffect(() => {
    if (email && cartItems.length === 0) {
      LOAD_CART(email);
    }
  }, []);

  return (
    <div className="bag--page">
      <Navbar />

      <main>
        <h4
          style={cartItems.length < 1 || loading ? { display: "none" } : null}
        >
          My Bag
        </h4>

        {cartItems.length >= 1 && !loading ? (
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
                  email={email}
                  cartItems={cartItems}
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
        ) : loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "75vh",
            }}
          >
            <Loader />
          </div>
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
    error: state.cart.error,
    loading: state.cart.loading,
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
