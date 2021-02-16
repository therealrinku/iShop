import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import server_url from "../server_url";
import "../css/SearchBox.css";

const SearchBox = ({ toggle }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(server_url + `/product/searchProduct/${searchQuery}`)
      .then((res) => {
        setSearchResults(res.data);
      });
  }, [searchQuery]);

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
          {searchResults.length >= 1 ? (
            searchResults.map((product) => {
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
          ) : searchQuery.trim().length > 0 ? (
            <p style={{ textAlign: "center" }}>Nothing found</p>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default SearchBox;
