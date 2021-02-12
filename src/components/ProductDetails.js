import { VscAdd } from "react-icons/all";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import "../css/ProductDetails.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as productsActions from "../redux/products/productsActions";

const ProductDetails = ({ products, LOAD_PRODUCTS, error, loading }) => {
  const params = useParams();
  const product =
    products.filter((product) => product.productId === params.product_id)[0] ||
    [];

  useEffect(() => {
    if (products.length < 1) {
      LOAD_PRODUCTS();
    }
  }, []);

  return (
    <div className="product--details">
      <Navbar />

      <main>
        <section>
          <img src={product.productImageURL} alt="product-name" />
        </section>
        <section>
          <h3>{product.productName}</h3>
          <ul>
            {product.productHighlights?.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>

          <section className="btns">
            <select>
              {[1, 2, 3, 4, 5].map((e) => {
                return (
                  <option value={e} key={e}>
                    {e}
                  </option>
                );
              })}
            </select>

            <button>
              <VscAdd />
              <p>Add to Cart</p>
            </button>
          </section>
        </section>
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
