import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import * as cartActions from "../redux/cart/cartActions";
import axios from "axios";
import Loader from "../components/Loader";
import server_url from "../server_url";
import updateCart from "../functions/updateCart";
import "../css/ItemDetailsPage.css";

const ItemDetailsPage = ({
  email,
  cartItems,
  ADD_TO_CART,
  REMOVE_FROM_CART,
}) => {
  const params = useParams();
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(server_url + `/product/fetchProduct/${params.productId}`)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const [itemQuantity, setItemQuantity] = useState(1);
  const itemIsInCart =
    cartItems.findIndex((item) => item.product_id === product[0]?.product_id) >=
    0;

  const ADD_OR_REMOVE_FROM_BAG = () => {
    const {
      product_image_url,
      product_name,
      product_id,
      product_price,
    } = product[0];

    if (itemIsInCart) {
      REMOVE_FROM_CART(product[0]?.product_id);
      updateCart(
        email,
        cartItems.filter((item) => item.product_id !== product[0]?.product_id)
      );
    } else {
      ADD_TO_CART({
        product_image_url,
        product_name,
        product_id,
        product_price,
        productQuantity: itemQuantity,
      });
      updateCart(email, [
        ...cartItems,
        {
          product_image_url,
          product_name,
          product_id,
          product_price,
          productQuantity: itemQuantity,
        },
      ]);
    }
  };

  return (
    <div className="item--details--page">
      <Navbar />
      <main
        style={loading || product.length === 0 ? { display: "none" } : null}
      >
        <section>
          <button className="back-btn" onClick={() => history.goBack()}>
            Get Back to Shopping
          </button>
          <img
            src={product[0]?.product_image_url}
            alt={`${product[0]?.product_name}`}
          />
        </section>

        <section>
          <h4>{product[0]?.product_name}</h4>
          <p>${product[0]?.product_price}</p>
          {product[0]?.product_specs?.map((spec, i) => {
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

      {loading || product.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          {loading && !error ? (
            <Loader />
          ) : !error ? (
            <Fragment>
              <p>Product not found.</p>
              <button
                className="back-btn1"
                onClick={() => history.push("/explore")}
              >
                Back to shopping
              </button>
            </Fragment>
          ) : null}
        </div>
      ) : null}
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
    ADD_TO_CART: (productData) =>
      dispatch(cartActions.ADD_TO_CART(productData)),
    REMOVE_FROM_CART: (productId) =>
      dispatch(cartActions.REMOVE_FROM_CART(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPage);
