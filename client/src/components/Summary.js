import { useEffect } from "react";
import Item from "./Item";
import { useHistory } from "react-router-dom";
import * as productsActions from "../redux/products/productsActions";
import { connect } from "react-redux";
import "../css/Summary.css";
import { Fragment } from "react";
import Loader from "./Loader";

const Summary = ({
  latestProducts,
  hottestProducts,
  loading,
  error,
  LOAD_HOTTEST_PRODUCTS,
  LOAD_LATEST_PRODUCTS,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (latestProducts.length === 0) {
      LOAD_LATEST_PRODUCTS();
    }
    if (hottestProducts.length === 0) {
      LOAD_HOTTEST_PRODUCTS();
    }
  }, []);

  return (
    <div className="summary">
      <h4>Hottest Products</h4>
      <section style={loading ? { display: "none" } : null}>
        {hottestProducts.map((product, i) => {
          return (
            <Item
              key={i}
              productId={product.product_id}
              productImageURL={product.product_image_url}
              productName={product.product_name}
              productPrice={product.product_price}
            />
          );
        })}
      </section>

      {loading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : null}

      <h4
        style={{ marginTop: "50px" }}
        style={
          loading || latestProducts.length === 0 ? { display: "none" } : null
        }
      >
        Latest Products
      </h4>
      <section style={loading ? { display: "none" } : null}>
        {latestProducts.map((product, i) => {
          return (
            <Item
              key={i}
              productId={product.product_id}
              productImageURL={product.product_image_url}
              productName={product.product_name}
              productPrice={product.product_price}
            />
          );
        })}
      </section>

      <button onClick={() => history.push("/explore")}>See All Products</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    latestProducts: state.products.latestProducts,
    hottestProducts: state.products.hottestProducts,
    loading: state.products.loading,
    error: state.products.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_HOTTEST_PRODUCTS: () =>
      dispatch(productsActions.LOAD_HOTTEST_PRODUCTS()),
    LOAD_LATEST_PRODUCTS: () =>
      dispatch(productsActions.LOAD_LATEST_PRODUCTS()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
