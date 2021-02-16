import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import * as cartActions from "../redux/cart/cartActions";
import "../css/ItemDetailsPage.css";

const ItemDetailsPage = ({
  cartItems,
  products,
  ADD_TO_CART,
  REMOVE_FROM_CART,
}) => {
  const params = useParams();
  const history = useHistory();
  const product =
    products.filter((p) => p.product_id === params.productId)[0] || [];

  const [itemQuantity, setItemQuantity] = useState(1);
  const itemIsInCart =
    cartItems.findIndex((item) => item.product_id === product.product_id) >= 0;

  const ADD_OR_REMOVE_FROM_BAG = () => {
    if (itemIsInCart) {
      REMOVE_FROM_CART(product.product_id);
    } else {
      ADD_TO_CART({ ...product, productQuantity: itemQuantity });
    }
  };

  return (
    <div className="item--details--page">
      <Navbar />
      <main>
        <section>
          <button className="back-btn" onClick={() => history.goBack()}>
            Get Back to Shopping
          </button>
          <img src={product.product_image_url} alt={`${product.productName}`} />
        </section>

        <section>
          <h4>{product.product_name}</h4>
          <p>${product.product_price}</p>
          {product.product_specs?.map((spec, i) => {
            return <li key={i}>{spec}</li>;
          })}
          <div>
            <button
              onClick={() => setItemQuantity((prev) => prev - 1)}
              disabled={itemQuantity === 1}
            >
              -
            </button>
            <p>{itemQuantity}</p>
            <button
              onClick={() => setItemQuantity((prev) => prev + 1)}
              disabled={itemQuantity === 5}
            >
              +
            </button>
          </div>
          <button onClick={ADD_OR_REMOVE_FROM_BAG}>
            {!itemIsInCart ? "Add to Bag" : "Remove from Bag"}
          </button>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ADD_TO_CART: (productData) =>
      dispatch(cartActions.ADD_TO_CART(productData)),
    REMOVE_FROM_CART: (productId) =>
      dispatch(cartActions.REMOVE_FROM_CART(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPage);
