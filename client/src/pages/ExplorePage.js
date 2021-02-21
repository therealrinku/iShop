import { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import * as productsActions from "../redux/products/productsActions";
import Item from "../components/Item";
import Loader from "../components/Loader";
import "../css/ExplorePage.css";

const ExplorePage = ({ products, loading, error, LOAD_PRODUCTS }) => {
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    if (products.length < 1 && !error) {
      LOAD_PRODUCTS();
    }
  }, []);

  return (
    <div className="explore--page">
      <Navbar />
      <h4 style={error ? { display: "none" } : null}>All Products</h4>

      <section
        className="products"
        style={loading || products.length === 0 ? { display: "none" } : null}
      >
        {products
          .filter((_, i) => {
            return pageNo === 1 ? i <= 7 : i >= 8;
          })
          .map((product, i) => {
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

      <section
        className="pagination-btns"
        style={loading || products.length === 0 ? { display: "none" } : null}
      >
        <button onClick={() => setPageNo(pageNo === 1 ? 2 : 1)}>
          {pageNo === 1 ? "Next Page" : "Previous Page"}
        </button>
        <button onClick={() => setPageNo(1)} disabled={pageNo === 1}>
          1
        </button>
        <button onClick={() => setPageNo(2)} disabled={pageNo === 2}>
          2
        </button>
      </section>

      {loading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : null}
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
