import { connect } from "react-redux";
import "../css/SearchBox.css";

const SearchBox = ({ products }) => {
  return (
    <div className="search--box">
      <section>
        <input type="text" placeholder="What are you looking for?" />
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
