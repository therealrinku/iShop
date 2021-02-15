import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const BagPage = ({ cartItems }) => {
  return (
    <div className="bag--page">
      <Navbar />

      <main>
        <h4>My Bag</h4>
        <section className="cart-items"></section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(BagPage);
