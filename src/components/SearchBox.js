import { connect } from "react-redux";

const SearchBox = ({ products }) => {
  return (
    <div className="search--box">
      <section>
        <input type="text" />
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
