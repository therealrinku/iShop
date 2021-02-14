import * as productActions from "../redux/products/productsActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import Item from "./Item";
import "../css/Summary.css";

const Summary = ({ products, GET_ITEMS }) => {
  useEffect(() => {
    if (products.length < 1) {
      GET_ITEMS();
    }
  }, []);

  return (
    <div className="summary">
      <h4>Hottest Products</h4>
      <section>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GET_ITEMS: () => dispatch(productActions.LOAD_PRODUCTS()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
