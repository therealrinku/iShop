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
    <div>
      <Navbar />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          width: "85%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {products.map((product, i) => {
          return (
            <Product
              key={i}
              productId={product.productId}
              productImage={product.productImageURL}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
