import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/SearchBox.css";

const SearchBox = ({ products, toggle }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const matchedProducts = products.filter((product) =>
    product.product_name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="search--box">
      <section>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you looking for?"
          autoFocus
        />
        <div className="search-results">
          {matchedProducts.length >= 1 ? (
            matchedProducts.map((product) => {
              return (
                <Link
                  to={`/product/${product.product_id}`}
                  key={product.product_id}
                  onClick={toggle}
                >
                  <p>{product.product_name}</p>
                  <p>${product.product_price}</p>
                </Link>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>Nothing found</p>
          )}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(SearchBox);
