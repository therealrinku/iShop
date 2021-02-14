import { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import * as productsActions from "../redux/products/productsActions";
import Item from "../components/Item";
import "../css/ExplorePage.css";

const ExplorePage = ({ products, loading, error, LOAD_PRODUCTS }) => {
  useEffect(() => {
    if (products.length < 1) {
      LOAD_PRODUCTS();
    }
  }, []);

  return (
    <div className="explore--page">
      <Navbar />
      <h4>All Products</h4>
      <section className="products">
        {products.map((product, i) => {
          return (
            <Item
              key={i}
              productId={product.productId}
              productImageURL={product.productImageURL}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          );
        })}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_PRODUCTS: () => dispatch(productsActions.LOAD_PRODUCTS()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
