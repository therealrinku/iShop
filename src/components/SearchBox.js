import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/SearchBox.css";

const SearchBox = ({ products, toggle }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const matchedProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.trim().toLowerCase())
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
                  to={`/product/${product.productId}`}
                  key={product.productId}
                  onClick={toggle}
                >
                  <p>{product.productName}</p>
                  <p>${product.productPrice}</p>
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
