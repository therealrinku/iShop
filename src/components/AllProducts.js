import Navbar from "./Navbar";
import * as productsActions from "../redux/products/productsActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import Product from "./Product";

const AllProducts = ({ products, loading, error, LOAD_PRODUCTS }) => {
  useEffect(() => {
    if (products.length < 1) {
      LOAD_PRODUCTS();
    }
  }, []);

  return (
    <div className="all--products">
      <Navbar />
      {products.map((product, i) => {
        return (
          <Product
            key={i}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
          />
        );
      })}
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
    LOAD_PRODUCTS: () => dispatch(productsActions.LOAD_PRODUCTS),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
